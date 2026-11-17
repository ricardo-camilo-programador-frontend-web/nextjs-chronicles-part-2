import { describe, expect, it } from "vitest";
import { buildAdsterraScript, DEFAULT_BANNER_HOST, shouldLoadAdsterra } from "@/lib/ads/adsterra";
import { CANONICAL_SITE_ORIGIN } from "@/lib/site";

const NATIVE_KEY = "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4";
const NATIVE_HOST = "pl1234.effectivegatecpm.com";
const BANNER_KEY = "b1b2c3d4e5f6b1b2c3d4e5f6b1b2c3d4";
const CANONICAL_HOST = "persona-nextjs-chronicles-part-2.netlify.app";

describe("buildAdsterraScript", () => {
  it("returns null when the native key is missing", () => {
    expect(
      buildAdsterraScript({
        format: "native",
        nativeHost: NATIVE_HOST,
      }),
    ).toBeNull();
  });

  it("returns null when the kill switch is off, even with a key", () => {
    expect(
      buildAdsterraScript({
        format: "native",
        nativeKey: NATIVE_KEY,
        nativeHost: NATIVE_HOST,
        enabledFlag: "false",
      }),
    ).toBeNull();
  });

  it("builds the native invoke.js url and the fixed container id", () => {
    expect(
      buildAdsterraScript({
        format: "native",
        nativeKey: NATIVE_KEY,
        nativeHost: NATIVE_HOST,
      }),
    ).toEqual({
      format: "native",
      key: NATIVE_KEY,
      host: NATIVE_HOST,
      src: `//${NATIVE_HOST}/${NATIVE_KEY}/invoke.js`,
      containerId: `container-${NATIVE_KEY}`,
      width: 728,
      height: 120,
    });
  });

  it("builds a display banner with the public default host and iframe atOptions", () => {
    expect(
      buildAdsterraScript({
        format: "banner",
        bannerKey: BANNER_KEY,
        viewportWidth: 1024,
      }),
    ).toEqual({
      format: "banner",
      key: BANNER_KEY,
      host: DEFAULT_BANNER_HOST,
      src: `//${DEFAULT_BANNER_HOST}/${BANNER_KEY}/invoke.js`,
      containerId: `container-${BANNER_KEY}`,
      width: 728,
      height: 90,
      atOptions: {
        key: BANNER_KEY,
        format: "iframe",
        height: 90,
        width: 728,
        params: {},
      },
    });
  });

  it("uses 320x50 below the desktop breakpoint and 300x250 for the rectangle variant", () => {
    const mobile = buildAdsterraScript({
      format: "banner",
      bannerKey: BANNER_KEY,
      bannerHost: "www.highperformanceformat.com",
      viewportWidth: 390,
    });
    expect(mobile).toMatchObject({ width: 320, height: 50 });

    const rectangle = buildAdsterraScript({
      format: "banner",
      bannerKey: BANNER_KEY,
      bannerVariant: "rectangle",
      viewportWidth: 390,
    });
    expect(rectangle).toMatchObject({
      width: 300,
      height: 250,
      atOptions: { format: "iframe", width: 300, height: 250, params: {} },
    });
  });
});

describe("shouldLoadAdsterra", () => {
  const script = buildAdsterraScript({
    format: "native",
    nativeKey: NATIVE_KEY,
    nativeHost: NATIVE_HOST,
  });

  it("does not load outside production", () => {
    expect(
      shouldLoadAdsterra({
        script,
        nodeEnv: "development",
        hostname: CANONICAL_HOST,
        canonicalHostname: CANONICAL_HOST,
        analyticsEnabled: null,
      }),
    ).toBe(false);
  });

  it("does not load on a non-canonical hostname", () => {
    expect(
      shouldLoadAdsterra({
        script,
        nodeEnv: "production",
        hostname: "deploy-preview-42--persona-nextjs-chronicles-part-2.netlify.app",
        canonicalHostname: CANONICAL_HOST,
        analyticsEnabled: true,
      }),
    ).toBe(false);
  });

  it("does not load when the study modal reports analytics disabled", () => {
    expect(
      shouldLoadAdsterra({
        script,
        nodeEnv: "production",
        hostname: CANONICAL_HOST,
        canonicalHostname: CANONICAL_HOST,
        analyticsEnabled: false,
      }),
    ).toBe(false);
  });

  it("loads in production on the canonical host when consent is absent or granted", () => {
    expect(CANONICAL_SITE_ORIGIN).toBe(`https://${CANONICAL_HOST}`);
    expect(
      shouldLoadAdsterra({
        script,
        nodeEnv: "production",
        hostname: CANONICAL_HOST,
        canonicalHostname: CANONICAL_HOST,
        analyticsEnabled: null,
      }),
    ).toBe(true);
    expect(
      shouldLoadAdsterra({
        script,
        nodeEnv: "production",
        hostname: CANONICAL_HOST,
        canonicalHostname: CANONICAL_HOST,
        analyticsEnabled: true,
      }),
    ).toBe(true);
  });

  it("does not load when there is no script config", () => {
    expect(
      shouldLoadAdsterra({
        script: null,
        nodeEnv: "production",
        hostname: CANONICAL_HOST,
        canonicalHostname: CANONICAL_HOST,
        analyticsEnabled: null,
      }),
    ).toBe(false);
  });
});
