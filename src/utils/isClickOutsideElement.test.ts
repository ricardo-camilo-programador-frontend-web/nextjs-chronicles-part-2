import { describe, expect, it } from 'vitest';
import { isClickOutsideElement } from '@/utils/isClickOutsideElement';

const createElementWithRect = (left: number, top: number, right: number, bottom: number) =>
  ({
    getBoundingClientRect: () => ({ left, top, right, bottom }),
  }) as HTMLElement;

const mouseEventAt = (clientX: number, clientY: number) => ({ clientX, clientY }) as MouseEvent;

describe('isClickOutsideElement', () => {
  it('retorna true quando o alvo é null', () => {
    expect(isClickOutsideElement(null, mouseEventAt(0, 0))).toBe(true);
  });

  it('retorna false para clique dentro do elemento', () => {
    const element = createElementWithRect(0, 0, 100, 100);
    expect(isClickOutsideElement(element, mouseEventAt(50, 50))).toBe(false);
  });

  it('retorna true para clique fora do elemento', () => {
    const element = createElementWithRect(0, 0, 100, 100);
    expect(isClickOutsideElement(element, mouseEventAt(150, 50))).toBe(true);
  });
});
