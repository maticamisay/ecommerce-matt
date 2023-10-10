import { cva } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/libs/utils';

const textHeader = cva('font-bold', {
  variants: {
    tag: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
    },
    color: {
      primary: 'text-gray-800',
      secondary: 'text-gray-700',
      tertiary: 'text-gray-600',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-semibold',
      bold: 'font-bold',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
  },
  defaultVariants: {
    tag: 'h1',
    color: 'primary',
    weight: 'bold',
  },
});

const Text = ({ children, tag = 'h1', className = '', color, weight, size }) => {
  const Tag = tag;
  const baseStyles = textHeader({ tag, color, weight, size });
  const combinedClasses = cn(baseStyles, 'mt-1 mb-3', className);

  return <Tag className={combinedClasses}>{children}</Tag>;
};

export default Text;
