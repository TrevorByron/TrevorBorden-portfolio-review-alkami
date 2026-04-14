'use client';

import { useLayoutEffect } from 'react';
import type { PageId } from '@/types/portfolio';

export function usePageEntrance(activePage: PageId) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const page = document.getElementById(`page-${activePage}`);
    if (!page) return;
    page.querySelectorAll('.a1, .a2, .a3, .a4, .a5, .a6, .a7, .a8, .a9').forEach((el) => {
      const h = el as HTMLElement;
      h.style.animation = 'none';
      void h.offsetHeight;
      h.style.animation = '';
    });
  }, [activePage]);
}
