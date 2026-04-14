'use client';

/* Data URIs — next/image is not a fit for inlined portfolio photos */
/* eslint-disable @next/next/no-img-element */

export default function AboutSection() {
  return (
    <div id="page-about" className="page active">
      <div className="page-hero">
        <p className="label a1">About</p>
        <h2 className="page-headline a2">
          A little about me
        </h2>
        <p className="page-lede a3">
          Born in Kenya to an American family, raised in the bush, with high school in Portugal —
          I&apos;m the second of four kids. I built my first website in 2005 for a band I was in,
          spent years as a carpenter and remodeler, then moved into UI/UX in 2017. Today I&apos;m an
          Activator and the founder of Tiger Team Studios.
        </p>
      </div>

      <div className="scroll-section" id="about-scroll">
        <div className="ss-image-col">
          <div className="ss-image-wrap">
            <div className="ss-img" data-index="0">
              <img
                src="/about/east-africa.jpg"
                alt="Kenya and East Africa — childhood landscape"
              />
            </div>
            <div className="ss-img" data-index="1">
              <img
                src="/about/friends-africa.jpg"
                alt="With friends in Africa"
              />
            </div>
            <div className="ss-img" data-index="2">
              <img
                src="/about/designer-today.jpg"
                alt="Today — design practice and Tiger Team Studios"
              />
            </div>
            <div className="ss-caption" id="about-cap">
              Kenya &amp; Portugal
            </div>
            <div className="ss-progress">
              <span className="ss-dot" />
              <span className="ss-dot" />
              <span className="ss-dot" />
            </div>
          </div>
        </div>

        <div className="ss-text-col">
          <div className="ss-panel" data-img="0" data-caption="Kenya &amp; Portugal">
            <p className="ss-num">01 &mdash; Upbringing</p>
            <h3 className="ss-title">Kenya, the bush, and Portugal.</h3>
            <div className="ss-body">
              <p>
                I was born in Nairobi, Kenya and spent much of my growing-up years in a remote area
                of southern Kenya called Loita. I then moved to Portugal for high school and
                eventually moved to the USA in 2006 for college.
              </p>
              <p>
                I&apos;ve been navigating cross-cultural communication my entire life and more than
                anything I think this has tuned me in to reading the subtext of a given moment, the
                gap between what people say and what they mean.
              </p>
              <p>
                I&apos;ve found this to be a very helpful tool in my design work today. Building what
                users want is not always building what they ask for.
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="1" data-caption="Builder to designer">
            <p className="ss-num">02 - Early Career</p>
            <h3 className="ss-title">Always a builder.</h3>
            <div className="ss-body">
              <p>
                My entire career I&apos;ve been a builder, a tinkerer. I built my first website
                around 2005 out of necessity for the punk rock band that I was a part of while in
                high school in Portugal. After college, I worked as a carpenter, safari guide, pool
                cleaner and touring musician, always getting my hands dirty, always making things
                and building things. Tinkering was on- and offline for me.
              </p>
              <p>In 2017 I made the big leap and moved fully into the digital space.</p>
            </div>
          </div>

          <div className="ss-panel" data-img="2" data-caption="Tiger Team Studios">
            <p className="ss-num">03 - Today</p>
            <h3 className="ss-title">Where I am today</h3>
            <div className="ss-body">
              <p>
                I&apos;ve spent the last decade at different SaaS companies across a number of
                industries.
              </p>
              <p>
                At Iodine Software, I was the lead designer on a full product redesign that
                introduced new features that are, to this day, the most adopted.
              </p>
              <p>
                At Procore, I launched the &quot;Procore Construction Network&quot; (case study on
                this site).
              </p>
              <p>
                At Toro TMS I helped grow the company from $0 to $10M in ARR over 4 years and led
                the design of the dispatch experience, a primary driver of sales and where our
                customers spent the vast majority of their time.
              </p>
              <p>
                In January 2026 I founded{' '}
                <a href="https://tigerteamstudios.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                  Tiger Team Studios
                </a>
                , where I now help companies build and de-risk big-bet ideas. I needed a place to
                move faster and dive deeper into what can be done as a product designer and builder
                in the context of 2026.
              </p>
              <p className="label ss-gallup-label">Top Gallup Strength</p>
              <img
                className="ss-gallup-activator"
                src="/about/gallup-activator.png"
                alt="Gallup CliftonStrengths: Activator, an influencing theme"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
