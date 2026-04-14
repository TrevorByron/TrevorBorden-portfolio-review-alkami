'use client';

import AboutSection from '@/components/AboutSection';
import HomeSection from '@/components/HomeSection';
import Navigation from '@/components/Navigation';
import ProcoreSection from '@/components/ProcoreSection';
import ScoutSection from '@/components/ScoutSection';
import WalkthroughIndexGrid from '@/components/WalkthroughIndexGrid';
import { usePageEntrance } from '@/hooks/usePageEntrance';
import { useScrollSections } from '@/hooks/useScrollSections';
import type { PageId } from '@/types/portfolio';

export default function PortfolioClient({ page }: { page: PageId }) {
  useScrollSections(page);
  usePageEntrance(page);

  return (
    <>
      {page !== 'home' && <Navigation page={page} />}
      {page === 'home' && <HomeSection />}
      {page === 'about' && <AboutSection />}
      {page === 'procore' && <ProcoreSection />}
      {page === 'scout' && <ScoutSection />}
      <footer
        className={page === 'home' ? 'site-index-footer site-index-footer--home' : 'site-index-footer'}
        aria-label="Walkthrough index"
      >
        <WalkthroughIndexGrid currentPage={page} />
      </footer>
    </>
  );
}
