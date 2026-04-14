'use client';

import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import type { PageId } from '@/types/portfolio';

const NAV_IDS: Exclude<PageId, 'home'>[] = ['about', 'procore', 'scout'];

export default function Navigation({ page }: { page: PageId }) {
  return (
    <nav aria-label="Primary">
      <a
        href={ROUTES.home}
        className="nav-logo"
        aria-label="Home — Trevor Borden portfolio (TB x Alkami)"
        aria-current={page === 'home' ? 'page' : undefined}
      >
        <span className="nav-logo-tb">TB</span>
        <span className="nav-logo-x" aria-hidden="true">
          x
        </span>
        <Image
          src="/Alkami_Logo_GRAD_RGB.svg"
          alt=""
          width={96}
          height={29}
          className="nav-logo-alkami"
          unoptimized
        />
      </a>
      <ul className="nav-links">
        {NAV_IDS.map((id) => (
          <li key={id}>
            <a
              href={ROUTES[id]}
              id={`nav-${id}`}
              className={page === id ? 'active' : undefined}
              aria-current={page === id ? 'page' : undefined}
            >
              {id === 'about' && 'About'}
              {id === 'procore' && 'Procore'}
              {id === 'scout' && 'Scout Fuel'}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
