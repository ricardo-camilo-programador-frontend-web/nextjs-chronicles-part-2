import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";
import AdsterraBanner from "@/components/AdsterraBanner";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const NATIVE_KEY = "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4";
const NATIVE_HOST = "pl1234.effectivegatecpm.com";
const CANONICAL_HOST = "persona-nextjs-chronicles-part-2.netlify.app";
const PREVIEW_HOST = "deploy-preview-42--persona-nextjs-chronicles-part-2.netlify.app";

// jsdom allows redefining `window.location` (configurable accessor); vitest 4
// ignores the `@vitest-environment-options` docblock, so we stub the hostname
// this way instead of relying on the environment URL.
const ORIGINAL_LOCATION = Object.getOwnPropertyDescriptor(window, "location");

function stubLocationHostname(hostname: string) {
  Object.defineProperty(window, "location", {
    value: {
      hostname,
      href: `https://${hostname}/`,
      origin: `https://${hostname}`,
      protocol: "https:",
    },
    configurable: true,
    writable: true,
  });
}

class MockIntersectionObserver implements IntersectionObserver {
  static latest: MockIntersectionObserver | null = null;

  readonly root: Element | Document | null = null;
  readonly thresholds: Array<number> = [0];
  rootMargin: string;

  constructor(
    private readonly callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ) {
    this.rootMargin = options?.rootMargin ?? "";
    MockIntersectionObserver.latest = this;
  }

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): Array<IntersectionObserverEntry> {
    return [];
  }

  intersect(isIntersecting: boolean): void {
    this.callback(
      [{ isIntersecting, intersectionRatio: isIntersecting ? 1 : 0 } as IntersectionObserverEntry],
      this,
    );
  }
}

function stubNativeEnv() {
  vi.stubEnv("NEXT_PUBLIC_ADSTERRA_NATIVE_KEY", NATIVE_KEY);
  vi.stubEnv("NEXT_PUBLIC_ADSTERRA_NATIVE_HOST", NATIVE_HOST);
  vi.stubEnv("NEXT_PUBLIC_ADSTERRA_ENABLED", "true");
}

function installObservers() {
  MockIntersectionObserver.latest = null;
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  vi.stubGlobal("requestIdleCallback", (callback: IdleRequestCallback) => {
    callback({ didTimeout: false, timeRemaining: () => 10 });
    return 1;
  });
  vi.stubGlobal("cancelIdleCallback", () => {});
}

function renderBanner(label = "Advertisement") {
  const host = document.createElement("div");
  document.body.appendChild(host);
  const root: Root = createRoot(host);
  act(() => {
    root.render(<AdsterraBanner format="native" label={label} />);
  });
  return {
    unmount() {
      act(() => root.unmount());
      host.remove();
    },
  };
}

function invokeScripts(): Array<HTMLScriptElement> {
  return Array.from(document.querySelectorAll("script")).filter((node) =>
    node.src.includes("/invoke.js"),
  );
}

afterEach(() => {
  document.body.innerHTML = "";
  delete window.rcStudyModal;
  window.atOptions = undefined;
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  if (ORIGINAL_LOCATION) {
    Object.defineProperty(window, "location", ORIGINAL_LOCATION);
  }
});

describe("AdsterraBanner", () => {
  it("renders nothing when the native key is missing", () => {
    installObservers();
    vi.stubEnv("NODE_ENV", "production");
    stubLocationHostname(CANONICAL_HOST);
    const view = renderBanner();
    expect(document.querySelector("aside")).toBeNull();
    expect(invokeScripts()).toHaveLength(0);
    view.unmount();
  });

  it("does not inject the script outside production", () => {
    installObservers();
    stubNativeEnv();
    vi.stubEnv("NODE_ENV", "development");
    stubLocationHostname(CANONICAL_HOST);
    const view = renderBanner();
    expect(invokeScripts()).toHaveLength(0);
    view.unmount();
  });

  it("does not inject the script on a non-canonical hostname", () => {
    installObservers();
    stubNativeEnv();
    vi.stubEnv("NODE_ENV", "production");
    stubLocationHostname(PREVIEW_HOST);
    const view = renderBanner();
    expect(invokeScripts()).toHaveLength(0);
    view.unmount();
  });

  it("does not inject the script when analytics consent is false", () => {
    installObservers();
    stubNativeEnv();
    vi.stubEnv("NODE_ENV", "production");
    stubLocationHostname(CANONICAL_HOST);
    window.rcStudyModal = { isAnalyticsEnabled: () => false };
    const view = renderBanner();
    expect(document.querySelector("aside")).toBeNull();
    expect(invokeScripts()).toHaveLength(0);
    view.unmount();
  });

  it("injects one native script after the slot intersects on the canonical production host", () => {
    installObservers();
    stubNativeEnv();
    vi.stubEnv("NODE_ENV", "production");
    stubLocationHostname(CANONICAL_HOST);
    const view = renderBanner("Publicidade");

    const slot = document.querySelector("aside");
    expect(slot?.getAttribute("aria-label")).toBe("Publicidade");
    expect(slot?.textContent).toContain("Publicidade");
    expect(document.getElementById(`container-${NATIVE_KEY}`)).not.toBeNull();
    expect(MockIntersectionObserver.latest?.rootMargin).toBe("200px");

    act(() => {
      MockIntersectionObserver.latest?.intersect(true);
    });

    const scripts = invokeScripts();
    expect(scripts).toHaveLength(1);
    // getAttribute: o atributo cru e' protocolo-relativo (//host/key/invoke.js);
    // a propriedade .src resolvida depende da URL base do jsdom (http://).
    expect(scripts[0]?.getAttribute("src")).toBe(`//${NATIVE_HOST}/${NATIVE_KEY}/invoke.js`);
    expect(scripts[0]?.id).toBe(`adsterra-invoke-${NATIVE_KEY}`);
    view.unmount();
    expect(document.getElementById(`adsterra-invoke-${NATIVE_KEY}`)).toBeNull();
  });

  it("removes the script and hides the slot when the consent event turns false", () => {
    installObservers();
    stubNativeEnv();
    vi.stubEnv("NODE_ENV", "production");
    stubLocationHostname(CANONICAL_HOST);
    const view = renderBanner("Publicidade");

    act(() => {
      MockIntersectionObserver.latest?.intersect(true);
    });
    expect(invokeScripts()).toHaveLength(1);

    act(() => {
      window.dispatchEvent(new CustomEvent("rc-study-modal:analytics", { detail: false }));
    });
    expect(invokeScripts()).toHaveLength(0);
    expect(document.querySelector("aside")).toBeNull();
    view.unmount();
  });
});
