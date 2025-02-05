"use client"

import { useRippleEffect } from '@/hooks/useRippleEffect';

interface RippleEffectProps {
  id: string;
}

const RippleEffect = ({ id }: RippleEffectProps) => {
  useRippleEffect(id);
  return null;
};

export default RippleEffect;
