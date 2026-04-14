'use client';

export default function HomeSection() {
  return (
    <div id="page-home" className="page active">
      <div className="home-body">
        <p className="home-kicker a1">Portfolio Review &mdash; 2026</p>
        <h1 className="home-name a2">Trevor Borden</h1>
        <div className="home-co-line a3">
          <span className="home-times">&times;</span>
          <svg
            className="home-logo"
            viewBox="0 0 288 86.63"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Alkami"
          >
            <defs>
              <linearGradient
                id="alkami-grad"
                gradientUnits="userSpaceOnUse"
                x1="334.2686"
                y1="43.3142"
                x2="-11.0869"
                y2="43.3142"
              >
                <stop offset="0" stopColor="#FFD34A" />
                <stop offset="1" stopColor="#FFA700" />
              </linearGradient>
            </defs>
            <path
              fill="url(#alkami-grad)"
              d="M72.24,3.6h12.33v82.21H72.24V59.4L0,86.63L28.57,3.6L39.97,0l18.19,57.86l14.08-1.44V3.6z M45.52,59.6
          l-9.04-37.92l1.85-16.13L16.34,75.74l8.12-13.67L45.52,59.6z M60.01,65.05l6.27,20.76H52.82l-3.7-14.49L60.01,65.05z M105.54,3.6
          v82.21H93.21V3.6H105.54z M118.9,54.46l22.81,31.34h-14.39l-21.79-31.34l21.17-26.2h14.39L118.9,54.46z M185.03,46.55v39.26H172.7
          v-6.68h-0.41c-1.64,2.26-7.6,7.5-15.62,7.5c-9.56,0-16.44-7.71-16.44-16.34c0-11.82,12.02-19.42,32.47-19.42v-3.6
          c0-6.37-3.39-9.76-11.2-9.76c-6.78,0-13.56,4.01-16.44,6.99V34.22c4.11-3.9,11.51-6.78,19.11-6.78
          C175.68,27.44,184.83,33.19,185.03,46.55z M172.7,59.6c-16.13,0-20.35,4.32-20.35,9.76c0,4.11,3.39,7.09,7.71,7.09
          c4.32,0,10.58-3.19,12.64-6.06V59.6z M265.6,45.73v40.08h-12.33V45.73c0-4.11-1.85-7.6-6.78-7.6c-4.93,0-8.53,2.98-10.69,6.68v41
          h-12.33V45.73c0-4.11-1.85-7.6-6.78-7.6c-4.32,0-8.53,2.98-10.69,6.68v41h-12.33V28.26H206v6.68h0.41c1.85-3.49,6.27-7.5,14.39-7.5
          c5.24,0,10.89,3.08,13.46,8.12c3.19-4.32,8.32-8.12,15.31-8.12C256.76,27.44,265.6,32.47,265.6,45.73z M272.79,11
          c0-4.32,3.19-7.4,7.6-7.4c4.42,0,7.6,3.08,7.6,7.4c0,4.32-3.19,7.4-7.6,7.4C275.98,18.39,272.79,15.31,272.79,11z M274.23,28.26
          h12.33v57.55h-12.33V28.26z"
            />
          </svg>
        </div>
        <div className="home-sub a4">
          <span className="home-role">Lead Product Designer, Data &amp; Marketing</span>
        </div>

        <section
          id="walkthrough"
          className="home-agenda a5"
          aria-labelledby="walkthrough-heading"
        >
          <p className="home-agenda-eyebrow">Walkthrough</p>
          <h2 id="walkthrough-heading" className="home-agenda-title">
            Goal
          </h2>
          <p className="home-agenda-lede">
            My hope is that this Portfolio review shows a bit of who I am as a person and
            designer and the evolution of my design process over the years. I&apos;ve chosen to
            highlight two unique projects; one from a few years back and one from a few weeks
            back. It&apos;s my intent to highlight the design process and talk honestly about what
            changes when AI speeds everything up—and what doesn&apos;t.
          </p>
          <p className="home-agenda-bridge">
            Rough flow: About, then Procore Construction Network (~20 min), then a shorter look at
            Scout Fuel.
          </p>
        </section>
      </div>

      <div className="home-stamp">2026 &middot; Trevor Borden &middot; Alkami</div>
    </div>
  );
}
