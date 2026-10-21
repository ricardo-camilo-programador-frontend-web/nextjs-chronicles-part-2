import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Link from '@/components/general/link';

vi.mock('@/i18n/routing', () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }));

afterEach(cleanup);

describe('Link externo', () => {
  it('repassa aria-label e title para o <a> (links só com ícone)', () => {
    render(
      <Link href="https://github.com/exemplo" externalLink title="GitHub" aria-label="GitHub">
        <svg />
      </Link>
    );
    const link = screen.getByRole('link', { name: 'GitHub' });
    expect(link.getAttribute('title')).toBe('GitHub');
    expect(link.getAttribute('target')).toBe('_blank');
  });
});
