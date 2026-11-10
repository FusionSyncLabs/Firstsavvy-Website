'use client';

import React from 'react';
import { FirstSavvyLoader } from './FirstSavvyLoader';

interface BrandLoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'fullscreen';
  className?: string;
  showTagline?: boolean;
  message?: string;
}

export function BrandLoader({
  size = 'md',
  className = '',
  showTagline = false,
  message = 'Loading...',
}: BrandLoaderProps) {
  const mappedSize = size === 'fullscreen' ? 'lg' : size;

  return (
    <FirstSavvyLoader
      size={mappedSize}
      message={message}
      submessage={showTagline ? 'Stars to Legacy' : undefined}
      fullScreen={size === 'fullscreen'}
      className={className}
    />
  );
}
