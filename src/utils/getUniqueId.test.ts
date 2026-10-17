import { describe, expect, it } from 'vitest';
import { getUniqueId } from '@/utils/getUniqueId';

const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe('getUniqueId', () => {
  it('gera um UUID v4 válido', () => {
    expect(getUniqueId()).toMatch(UUID_V4_REGEX);
  });

  it('gera identificadores únicos a cada chamada', () => {
    expect(getUniqueId()).not.toBe(getUniqueId());
  });
});
