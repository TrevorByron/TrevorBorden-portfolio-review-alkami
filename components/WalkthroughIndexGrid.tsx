import { ROUTES } from '@/lib/routes';
import type { PageId } from '@/types/portfolio';

export default function WalkthroughIndexGrid({ currentPage }: { currentPage: PageId }) {
  return (
    <div className="home-index">
      <div className="home-index-grid">
        <a
          href={ROUTES.about}
          className={`hii${currentPage === 'about' ? ' hii--current' : ''}`}
          aria-current={currentPage === 'about' ? 'page' : undefined}
        >
          <span className="hii-num">00 &mdash; About</span>
          <span className="hii-title">About me</span>
          <span className="hii-desc">
            East Africa, Portugal, and a career built on deep empathy.
          </span>
          <span className="hii-arrow">&rarr;</span>
        </a>
        <a
          href={ROUTES.procore}
          className={`hii${currentPage === 'procore' ? ' hii--current' : ''}`}
          aria-current={currentPage === 'procore' ? 'page' : undefined}
        >
          <span className="hii-num">01 &mdash; Procore</span>
          <span className="hii-title">Construction Network</span>
          <span className="hii-desc">
            A classic through-line: process, the deliverable, and the outcome—the kind of
            discovery-to-delivery story familiar to traditional design frameworks.
          </span>
          <span className="hii-arrow">&rarr;</span>
        </a>
        <a
          href={ROUTES.scout}
          className={`hii${currentPage === 'scout' ? ' hii--current' : ''}`}
          aria-current={currentPage === 'scout' ? 'page' : undefined}
        >
          <span className="hii-num">02 &mdash; Scout Fuel</span>
          <span className="hii-title">Rapid Coded Prototype</span>
          <span className="hii-desc">
            A more current pass: an AI-first loop where the edge is taste, execution, and
            shipping—less ceremony, more velocity, same bar for the work.
          </span>
          <span className="hii-arrow">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
