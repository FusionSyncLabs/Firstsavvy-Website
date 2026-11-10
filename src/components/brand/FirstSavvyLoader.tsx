'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface FirstSavvyLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  submessage?: string;
  fullScreen?: boolean;
  className?: string;
  backdrop?: 'default' | 'light' | 'dark' | 'transparent';
  playOnce?: boolean;
  onComplete?: () => void;
}

/**
 * FirstSavvy Geometric Lion Loader
 * Features SVG vector line-drawing (stroke-dashoffset) animation
 * with a luminous brand cyan glow and optional context status text.
 */
export function FirstSavvyLoader({
  size = 'md',
  message = 'Loading...',
  submessage,
  fullScreen = false,
  className = '',
  backdrop = 'default',
  playOnce = false,
  onComplete,
}: FirstSavvyLoaderProps) {
  const sizeMap = {
    sm: {
      svg: 'w-12 h-12',
      text: 'text-xs',
      subtext: 'text-[10px]',
      gap: 'gap-2',
      strokeWidth: 2.2,
    },
    md: {
      svg: 'w-20 h-20',
      text: 'text-sm font-medium',
      subtext: 'text-xs',
      gap: 'gap-3.5',
      strokeWidth: 2,
    },
    lg: {
      svg: 'w-28 h-28',
      text: 'text-base font-semibold',
      subtext: 'text-xs',
      gap: 'gap-4',
      strokeWidth: 1.8,
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const completedRef = React.useRef(false);

  const handleDrawEnd = (event: React.AnimationEvent<SVGSVGElement>) => {
    if (!playOnce || completedRef.current) return;
    if (event.animationName !== 'firstSavvyLionDraw') return;
    completedRef.current = true;
    onComplete?.();
  };

  const content = (
    <div className={cn('flex flex-col items-center justify-center text-center select-none', currentSize.gap, className)}>
      <div className="relative flex items-center justify-center">
        {/* Ambient background glow aura */}
        <div className="absolute inset-0 rounded-full bg-[#52A5CE]/15 blur-xl animate-pulse pointer-events-none" />

        <svg
          viewBox="0 0 132.21 136.03"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={cn(
            currentSize.svg,
            'firstsavvy-lion-drawing relative z-10',
            playOnce && 'firstsavvy-lion-drawing-once'
          )}
          style={{ display: 'block', overflow: 'visible' }}
          onAnimationEnd={handleDrawEnd}
        >
          <g fill="#52A5CE">
            {/* Geometric Lion Mane & Outer Circle Frame */}
            <path
              pathLength={100}
              className="lion-stroke-path"
              style={{ strokeWidth: currentSize.strokeWidth }}
              d="M119.14,32.7h-5.08c-10.75-17.09-29.06-28.35-49.8-28.35-11.73,0-23.09,3.61-32.86,10.44-12.21,8.54-21.07,21.47-24.92,36.4-1.42,5.48-2.14,11.18-2.14,16.92,0,4.19.39,8.37,1.14,12.42,1.08,5.82,2.92,11.45,5.48,16.72,2.39,4.96,5.39,9.54,8.89,13.66-.05-.08-.08-.16-.13-.24-.47-.83-.93-1.68-1.34-2.55-.06-.13-.12-.24-.17-.37-.42-.88-.82-1.78-1.18-2.68-.04-.09-.07-.19-.12-.28-.37-.95-.7-1.89-1.02-2.85-.01-.06-.03-.12-.04-.17-.32-1.01-.61-2.03-.85-3.05-.87-3.6-1.32-7.3-1.32-11.03,0-.81.02-1.61.06-2.41.01-.26.04-.53.05-.8.04-.53.07-1.06.13-1.59.03-.32.08-.62.12-.93.06-.48.12-.96.19-1.44.04-.33.12-.65.17-.98.08-.45.16-.9.24-1.36.07-.33.16-.66.23-.99.11-.44.2-.87.31-1.3.08-.34.19-.66.28-1,.12-.42.23-.85.37-1.27.11-.34.22-.65.33-.98.15-.42.28-.84.44-1.25.12-.33.25-.65.38-.98.16-.4.32-.81.49-1.22.14-.32.28-.63.43-.95.18-.4.36-.8.56-1.2.15-.32.32-.62.47-.94.2-.39.41-.78.62-1.16.17-.32.35-.62.53-.92.22-.39.44-.77.67-1.14.19-.31.39-.6.58-.9.24-.36.48-.73.74-1.09.2-.29.42-.59.63-.88.25-.35.52-.7.78-1.05.22-.28.45-.58.68-.86.27-.34.55-.67.83-1.01.24-.28.49-.57.75-.85.28-.33.58-.64.86-.96.27-.28.55-.57.82-.84.19-.19.37-.39.56-.58v-20.97l1.1-.62c7.74-4.36,16.53-6.66,25.39-6.66,10.8,0,21.09,3.36,29.71,9.35h-8.49c-6.5-3.25-13.72-5.01-21.22-5.01s-15.33,1.89-22.15,5.5v13.01h22.9l-.76,4.34h-22.15v35.44c0,2.45.35,4.79,1.04,6.94.29.92.63,1.77,1.03,2.61,2.4,5.12,6.15,8.06,10.12,11.17,4.41,3.46,8.96,7.04,11.1,13.59.53,1.63.92,4.14,1.02,5.97l-4.38-1.08c-.13-1.39-.35-2.22-.78-3.53-1.71-5.3-5.4-8.18-9.65-11.52-4-3.14-8.52-6.69-11.37-12.74-.48-1.02-.88-2.04-1.23-3.12-.83-2.6-1.25-5.38-1.25-8.28v-27.96c-.2.23-.39.46-.58.69-.13.17-.26.34-.39.5-.35.44-.67.89-1,1.35-.07.11-.16.21-.24.33-.4.57-.78,1.15-1.16,1.74-.05.08-.09.17-.15.25-.31.49-.61,1-.89,1.5-.11.19-.21.38-.32.57-.22.41-.44.82-.65,1.23-.11.22-.21.44-.33.66-.19.39-.38.79-.56,1.2-.09.22-.2.45-.29.67-.18.42-.35.84-.52,1.27-.08.21-.17.41-.24.62-.2.53-.38,1.06-.56,1.61-.03.09-.07.2-.11.31-.2.64-.39,1.29-.56,1.95-.05.18-.09.36-.14.54-.12.48-.23.96-.34,1.44-.05.24-.09.48-.15.73-.08.42-.16.85-.23,1.28-.04.25-.08.52-.12.78-.06.42-.12.85-.17,1.28-.03.25-.06.5-.08.76-.04.46-.07.93-.11,1.4-.01.22-.03.43-.04.66-.03.68-.05,1.37-.05,2.06v.02c0,3.38.4,6.73,1.19,9.98,1.01,4.19,2.67,8.18,4.89,11.89,2.04,3.42,4.57,6.6,7.54,9.43,5.94,5.66,13.41,9.66,21.49,11.57v4.62c-8.62-1.6-16.91-5.07-24.24-10.19-9.26-6.48-16.82-15.41-21.87-25.86-2.71-5.62-4.68-11.61-5.84-17.82-.8-4.31-1.21-8.75-1.21-13.21,0-6.1.77-12.16,2.28-18,4.1-15.94,13.56-29.74,26.64-38.88C39.42,3.88,51.63,0,64.26,0c23.21,0,43.59,13.1,54.89,32.7Z"
            />

            {/* Geometric Lion Chin/Mouth */}
            <path
              pathLength={100}
              className="lion-stroke-path"
              style={{ strokeWidth: currentSize.strokeWidth }}
              d="M78.46,106.34c-1.09-4.29-4.33-8.02-7.96-10.31-3.51-2.29-7.17-3.72-10.59-5.16-4.3-1.92-9.49-3.71-11.41-8.21-.96-2.79-1.09-6.66.92-8.99,1.23-1.35,2.91-1.98,4.75-2.41,2.25-.55,4.61-.41,6.82.28l-.75-4.9c-1.21-.33-2.47-.53-3.74-.58-4.51-.11-9.55,1.31-12.26,5.23-2.66,3.95-2.78,9.1-1.32,13.49,2.34,6.39,8.92,9.4,14.66,11.74,4.72,2.01,9.92,3.71,13.37,7.52,3.24,3.71,3.19,9.03,2.65,13.72-.42,3.61-1.42,6.95-2.64,10.52,7.44-4.28,9.61-14,7.52-21.93Z"
            />

            {/* Geometric Lion Face & Eye */}
            <path
              pathLength={100}
              className="lion-stroke-path"
              style={{ strokeWidth: currentSize.strokeWidth }}
              d="M98.22,97.22c-1.87-9.48-9.11-14.91-16.12-20.17-6.54-4.9-12.71-9.53-14.15-17.11-.22-1.14-.87-4.61.31-8.7,1.36-4.66,4.44-7.87,6.87-9.77h-6.3c-1.92,2.19-3.72,5.03-4.75,8.56-1.48,5.09-.68,9.33-.41,10.72,1.75,9.23,8.89,14.59,15.8,19.77,6.65,4.98,12.92,9.69,14.46,17.53,1.2,6.09-.25,12.76-.26,12.82-.07.3-.14.65-.24,1.03-.5,2.07-1.42,5.17-3.57,8.39-3.62,5.42-8.74,8.21-12.4,9.6l.14.39.14.38,1.25,3.29c3.79-1.44,8.92-4.17,13-9.24.51-.63,1-1.3,1.47-2.01,2.32-3.47,3.42-6.84,4.02-9.15.18-.67.31-1.26.41-1.73.05-.22.91-4.17.84-9.01-.03-1.79-.18-3.71-.55-5.6Z"
            />

            {/* Geometric Lion Mane Crown Highlights */}
            <path
              pathLength={100}
              className="lion-stroke-path"
              style={{ strokeWidth: currentSize.strokeWidth }}
              d="M117.18,50.58l-3.92-3.44c-1.37-5.39-5.79-9.54-10.8-11.61-1.29-.56-2.61-1.01-3.96-1.36-5.92-16.46-27.01-19.66-42.4-17.59,13.92,1.14,34.21,4.53,38.54,20.07l.34,1.26c1.9.43,3.87.96,5.63,1.79,4.26,1.9,7.61,5.28,8.17,10.02l.63.58c4.37,4,10.91,9.97,15.84,14.44-2.95,2.81-10.42-.2-10.42-.2,0,0,.09,5.27,7.08,7.45l-.02,4.85c-.72.95-1.55,1.8-2.47,2.5-3.79,2.97-9.05,3.27-13.55,1.94-1.65-.53-3.71-1.24-3.71-1.24.29.55.75,1.39,1.22,2.44,2.3,5.14,1.35,6.54,3.08,9.25,1.62,2.51,4.37,4.29,7.14,4.82.69.13,1.41.18,2.13.16-1,2.31-2.84,4.24-5.35,5.02-.01,0-1.5.5-1.52.52-.24,1.95-.39,4.05-.64,5.99-.25,2.13-.74,4.37-1.49,6.43-.78,2.23-1.88,4.29-2.99,6.41,5.07-3.36,9.33-9.1,9.75-15.33,2.13-.96,4.04-2.45,5.41-4.33,1.73-2.37,2.65-5.13,2.88-8.02l.35-4.5-4.11,2c-2.15,1.14-5.28.42-6.65-1.46-.43-.64-.45-1.07-.63-1.86,6.36.08,12.48-2.59,16.23-8.25l.47-.72v-.84c0-1.22-.01-5.23-.02-7.97,1.59-.98,2.9-2.46,3.78-4.04l1.02-1.87c-5.01-4.42-10.03-8.85-15.03-13.28Z"
            />

            {/* Lion Ear Detail */}
            <path
              pathLength={100}
              className="lion-stroke-path"
              style={{ strokeWidth: currentSize.strokeWidth }}
              d="M101.92,51.19c-1.08-2-3.22-3.19-5.49-3.04l-8.44.57,2.32.59c.94.24,1.8.71,2.51,1.37l1.04.97c1.18,1.1,2.77,1.66,4.39,1.54,1.1-.08,2.19.15,3.16.66l2.72,1.45-2.21-4.12Z"
            />
          </g>
        </svg>
      </div>

      {message && (
        <div className="space-y-1">
          <p className={cn(currentSize.text, 'text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5')}>
            <span>{message}</span>
            <span className="inline-flex gap-0.5 text-[#52A5CE]" aria-hidden="true">
              <span className="firstsavvy-dot-1 font-bold">•</span>
              <span className="firstsavvy-dot-2 font-bold">•</span>
              <span className="firstsavvy-dot-3 font-bold">•</span>
            </span>
          </p>
          {submessage && (
            <p className={cn(currentSize.subtext, 'text-slate-500 dark:text-slate-400 font-normal')}>
              {submessage}
            </p>
          )}
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    const backdropStyles = {
      default: 'bg-radial-gradient',
      light: 'bg-slate-50/90 backdrop-blur-md',
      dark: 'bg-[#0F172A]/90 backdrop-blur-md text-white',
      transparent: 'bg-transparent',
    };

    return (
      <div
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center p-4',
          backdropStyles[backdrop] || backdropStyles.default
        )}
        style={
          backdrop === 'default'
            ? {
                background: 'radial-gradient(ellipse at 60% 40%, #DCE8F5 0%, #EEF1F6 50%, #E4EAF2 100%)',
              }
            : undefined
        }
      >
        {content}
      </div>
    );
  }

  return content;
}

export default FirstSavvyLoader;

