'use client';

import { useLayoutEffect } from 'react';
import type { PageId } from '@/types/portfolio';

/**
 * Syncs sticky scroll-section imagery to the text panel being read.
 * Prefers overlap of each panel with a viewport “reading band” (avoids a one-pixel probe
 * missing short panels). Falls back to probe-line and midpoint rules. Skips percentage
 * rootMargin IntersectionObserver patterns that are unreliable in Safari.
 */
export function useScrollSections(activePage: PageId) {
  useLayoutEffect(() => {
    let rafId = 0;
    let cancelled = false;

    const run = () => {
      const container = document.getElementById(`page-${activePage}`);
      if (!container) return;

      // Middle of the former IO band (~15%–45% from top) → reading focus line
      const probeY = window.innerHeight * 0.32;

      container.querySelectorAll('.scroll-section').forEach((section) => {
        const panels = section.querySelectorAll('.ss-panel');
        const images = section.querySelectorAll('.ss-img');
        const dots = section.querySelectorAll('.ss-dot');
        const cap = section.querySelector('.ss-caption');

        if (!panels.length) return;

        function activate(imgIdx: number, captionText: string | undefined) {
          images.forEach((img) => {
            const idx = parseInt((img as HTMLElement).dataset.index ?? '-1', 10);
            img.classList.toggle('active', idx === imgIdx);
          });
          dots.forEach((dot, i) => dot.classList.toggle('active', i === imgIdx));
          if (cap && captionText !== undefined) cap.textContent = captionText;
        }

        const panelEls = Array.from(panels) as HTMLElement[];
        const vh = window.innerHeight;
        // Reading band (not a single pixel) — avoids missing short panels / subpixel gaps
        const bandTop = vh * 0.22;
        const bandBottom = vh * 0.48;

        let bestI = 0;
        let bestOverlap = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < panelEls.length; i++) {
          const r = panelEls[i].getBoundingClientRect();
          const overlap = Math.min(r.bottom, bandBottom) - Math.max(r.top, bandTop);
          if (overlap > bestOverlap) {
            bestOverlap = overlap;
            bestI = i;
          }
        }

        if (bestOverlap >= 0) {
          activate(
            parseInt(panelEls[bestI].dataset.img ?? String(bestI), 10),
            panelEls[bestI].dataset.caption ?? ''
          );
          return;
        }

        const firstR = panelEls[0].getBoundingClientRect();
        const last = panelEls[panelEls.length - 1];
        const lastR = last.getBoundingClientRect();

        if (probeY < firstR.top) {
          activate(
            parseInt(panelEls[0].dataset.img ?? '0', 10),
            panelEls[0].dataset.caption ?? ''
          );
          return;
        }
        if (probeY > lastR.bottom) {
          activate(
            parseInt(last.dataset.img ?? String(panelEls.length - 1), 10),
            last.dataset.caption ?? ''
          );
          return;
        }

        let bestIdx = 0;
        let bestCaption = panelEls[0].dataset.caption ?? '';
        let bestDist = Infinity;
        for (let i = 0; i < panelEls.length; i++) {
          const r = panelEls[i].getBoundingClientRect();
          const mid = (r.top + r.bottom) / 2;
          const d = Math.abs(mid - probeY);
          if (d < bestDist) {
            bestDist = d;
            bestIdx = parseInt(panelEls[i].dataset.img ?? String(i), 10);
            bestCaption = panelEls[i].dataset.caption ?? '';
          }
        }
        activate(bestIdx, bestCaption);
      });
    };

    const schedule = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        if (!cancelled) run();
      });
    };

    const initFrame = requestAnimationFrame(() => {
      if (cancelled) return;
      run();
      requestAnimationFrame(() => {
        if (!cancelled) run();
      });
    });

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);

    return () => {
      cancelled = true;
      cancelAnimationFrame(initFrame);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
    };
  }, [activePage]);
}
