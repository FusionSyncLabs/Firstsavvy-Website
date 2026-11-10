'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FirstSavvyLoader } from './FirstSavvyLoader';

export function InitialSplashScreen() {
  // Server-rendered content stays usable until client hydration runs.
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const exitStarted = useRef(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout>>();
  const completeTimer = useRef<ReturnType<typeof setTimeout>>();

  const triggerExit = useCallback(() => {
    if (exitStarted.current) return;
    exitStarted.current = true;
    try { sessionStorage.setItem('fs-splash-shown', '1'); } catch { /* Private browsing. */ }
    setFadeOut(true);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    fadeTimer.current = setTimeout(() => setVisible(false), reduceMotion ? 0 : 300);
  }, []);

  const handleDrawComplete = useCallback(() => {
    clearTimeout(completeTimer.current);
    // Hold the completed filled lion briefly before fading out.
    completeTimer.current = setTimeout(triggerExit, 250);
  }, [triggerExit]);

  useEffect(() => {
    exitStarted.current = false;
    try {
      if (sessionStorage.getItem('fs-splash-shown') === '1') {
        setVisible(false);
        return;
      }
    } catch { /* The time limit also works without storage. */ }

    setVisible(true);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Safety fallback guarantees visitors are never blocked if CSS animation events don't fire.
    const timeout = setTimeout(triggerExit, reduceMotion ? 400 : 2800);
    return () => {
      clearTimeout(timeout);
      clearTimeout(fadeTimer.current);
      clearTimeout(completeTimer.current);
    };
  }, [triggerExit]);

  useEffect(() => {
    if (!visible || fadeOut) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [visible, fadeOut]);

  if (!visible) return null;

  return (
    <div
      data-brand-splash
      role="progressbar"
      aria-label="Loading First Savvy"
      className={`fixed inset-0 z-[9999] flex h-[100dvh] w-full touch-none items-center justify-center overflow-hidden px-4 transition-opacity duration-300 motion-reduce:transition-none sm:px-6 lg:px-8 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{
        background: 'radial-gradient(ellipse at 60% 40%, #DCE8F5 0%, #EEF1F6 50%, #E4EAF2 100%)',
      }}
    >
      <FirstSavvyLoader
        size="lg"
        message="Loading"
        submessage="From stars to legacy"
        playOnce
        onComplete={handleDrawComplete}
      />
    </div>
  );
}
