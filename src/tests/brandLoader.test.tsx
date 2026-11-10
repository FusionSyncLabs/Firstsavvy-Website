import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { InitialSplashScreen } from '@/components/brand/InitialSplashScreen';

let reduceMotion = false;

beforeEach(() => {
  vi.useFakeTimers();
  sessionStorage.clear();
  document.body.style.overflow = '';
  reduceMotion = false;
  vi.mocked(window.matchMedia).mockImplementation((query) => ({
    matches: reduceMotion && query.includes('prefers-reduced-motion'),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('brand splash screen', () => {
  it('renders the geometric lion SVG loader, locks scroll, and exits via fallback timer', async () => {
    const { container } = render(<InitialSplashScreen />);
    const svg = container.querySelector('svg.firstsavvy-lion-drawing');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('firstsavvy-lion-drawing-once');
    expect(container.querySelectorAll('path.lion-stroke-path')).toHaveLength(5);
    expect(document.body.style.overflow).toBe('hidden');

    await act(() => vi.advanceTimersByTimeAsync(3200));
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
  });

  it('exits promptly when the lion draw animation ends', async () => {
    const { container } = render(<InitialSplashScreen />);
    const svg = container.querySelector('svg.firstsavvy-lion-drawing')!;

    const event = new Event('animationend', { bubbles: true });
    Object.defineProperty(event, 'animationName', { value: 'firstSavvyLionDraw' });
    fireEvent(svg, event);

    await act(() => vi.advanceTimersByTimeAsync(600));
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
  });

  it('releases quickly when prefers-reduced-motion is enabled', async () => {
    reduceMotion = true;
    render(<InitialSplashScreen />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await act(() => vi.advanceTimersByTimeAsync(450));
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
  });

  it('skips repeat visits and cleans up the scroll lock on unmount', () => {
    sessionStorage.setItem('fs-splash-shown', '1');
    const { unmount } = render(<InitialSplashScreen />);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
});
