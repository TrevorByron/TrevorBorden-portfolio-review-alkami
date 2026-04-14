'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const PCN_VISION_DOC_URL =
  'https://www.dropbox.com/scl/fi/2aw86rl0p1ud73yec3ptd/What-we-talk-about-when-we-talk-about-the-PCN-January-Prototype-here.paper?rlkey=5kl3kcviibvwmd6cw6sptgbvu&dl=0';

const PCN_VISION_VIDEO_URL =
  'https://www.dropbox.com/scl/fi/5ne1ptyl8p74dbn6buzqv/Buyer-Final.mov?rlkey=ot4kw28vmqd5c0alev9eybh6w&st=zm4uubh7&dl=0';

/** Set true after adding `public/procore-pcn-vision-video-poster.png`. */
const VISION_VIDEO_HAS_POSTER = false;

const PCN_PROTOTYPE_SRC = '/procore/prototype/index.html';

/** Served from `public/procore/build.png` (Build section illustration). */
const PCN_BUILD_ILLUSTRATION_SRC = '/procore/build.png';

export default function ProcoreSection() {
  const protoShowcaseRef = useRef<HTMLElement | null>(null);
  const [prototypeIframeSrc, setPrototypeIframeSrc] = useState<string | null>(null);

  useEffect(() => {
    const el = protoShowcaseRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPrototypeIframeSrc(PCN_PROTOTYPE_SRC);
          obs.disconnect();
        }
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="page-procore" className="page active">
      <div className="page-hero page-hero--procore">
        <p className="label a1">Case Study 01 &mdash; Procore</p>
        <h2 className="page-headline a2">
          Procore Construction
          <br />
          Network
        </h2>
        <div className="page-lede-stack a3">
          <p>
            Procore&apos;s mission is to &ldquo;Connect Everyone in Construction on a Global
            Platform&rdquo; &mdash; but they had no product that actually let the industry connect
            with each other.
          </p>
          <p>
            General Contractors needed a reliable way to find and vet specialty contractors.
            Specialty contractors needed a way to market themselves and get found.
          </p>
          <p>
            Procore already had one of the largest datasets of construction companies in the US but
            hadn&apos;t figured out a way to use it. And there was a clear SEO opportunity sitting
            uncaptured: a public-facing marketplace where every contractor search on Google led back
            to Procore.
          </p>
          <p>
            The opportunity was pretty clear internally but for whatever reason the right team or
            time had never been in place to deliver.
          </p>
          <p>
            I was placed on the initiative in late 2020, together with a PM and a lead engineer, to
            help drive the idea to production.
          </p>
        </div>
        <div className="cs-meta a4">
          <div className="cs-meta-item">
            <span className="cs-meta-label">Role</span>
            <span className="cs-meta-value">Sole Design Lead</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Design Timeline</span>
            <span className="cs-meta-value">7 Months</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Scope</span>
            <span className="cs-meta-value">
              Vision Setting -&gt; Discovery -&gt; Design -&gt; Build
            </span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Status</span>
            <span className="cs-meta-value">Live — 4.5M visitors/yr ✦</span>
          </div>
        </div>
        <div className="cs-hero-bleed">
          <Image
            src="/procore-pcn-hero.png"
            alt="Procore Construction Network across desktop, laptop, tablet, and mobile."
            width={8805}
            height={3097}
            className="cs-hero-bleed-img"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <section
        className="cs-process"
        id="procore-process"
        aria-labelledby="procore-process-label"
      >
        <div className="cs-process-inner">
          <div className="cs-process-text">
            <p className="ss-num" id="procore-process-label">
              My 2020 Design Process
            </p>
            <div className="ss-body">
              <p>
                For the Procore Construction Network, I followed a very traditional design process.
                Starting with discover, then low-fidelity flows and concepts and moving towards more
                robust and refined prototypes.
                <br />
                Below, I&apos;ll walk you through that process and highlight how
                the steps impacted the final outcome and success of the Procore Construction
                Network.
              </p>
            </div>
          </div>
          <div className="cs-process-visual">
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG animation lives inside the asset */}
            <img
              src="/process.svg"
              alt="Process diagram with a rotating dashed ring: research, design, build, and refine."
              width={1101}
              height={1173}
              decoding="async"
            />
          </div>
        </div>
      </section>

      <div className="scroll-section img-right" id="procore-scroll">
        <div className="ss-text-col">
          <div className="ss-panel" data-img="0" data-caption="The challenge">
            <p className="ss-num">01 - Document Everything</p>
            <h3 className="ss-title">Driving alignment and shared vision</h3>
            <div className="ss-body">
              <p>
                At the start of the project, I was aware that there had been a few other attempts
                before my time to get a construction network off the ground. One of my goals early on
                was to simultaneously drive alignment and excitement internally within the org to keep
                the project funded.
              </p>
              <p>
                I did this through rigorous documentation and making promo videos of what the
                construction network could be one day. As cheesy and cringe as some of these videos
                feel now, they played an important role in keeping the organization speaking the same
                language and moving in the same direction.
              </p>
              <p>
                A few examples:{' '}
                <a
                  href={PCN_VISION_DOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  Internal Strategy Document
                </a>
                {' · '}
                <a
                  href={PCN_VISION_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  Vision video
                </a>
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="1" data-caption="Discovery & research">
            <p className="ss-num">02 - Discovery &quot;What Works&quot;</p>
            <h3 className="ss-title">Market Place Audits</h3>
            <div className="ss-body">
              <p>
                The Procore Construction Network was to be a marketplace, and I had never designed
                one before. So my very first step in discovery was dissecting other
                marketplaces &mdash; I didn&apos;t want to reinvent the wheel.
              </p>
              <p>
                I did a deep dive into the most successful marketplaces on the web, studying what
                was setting the standard for best practice. This was both to educate myself and to get
                my PM partner and engineering lead looking at the same strong patterns early in the
                process.
              </p>
              <p>
                My goal was to identify the most important shared elements across these marketplaces
                &mdash; both for the searcher and seller experience, and for SEO.
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="2" data-caption="Customer calls">
            <p className="ss-num">03 - Discovery &quot;The real world&quot;</p>
            <h3 className="ss-title">Customer Calls</h3>
            <div className="ss-body">
              <p>
                Still in the discovery phase of the design process, we set out to better understand
                the real-world experience of our customers.
              </p>
              <p>
                We did this through discovery calls that I ran, having our customers walk us
                through their journey, as it existed at that moment, of how they went about looking
                for new partners and new opportunities.
              </p>
              <p>All of these calls were recorded and captured in visuals.</p>
              <p>Unshared research is often wasted research.</p>
              <p>
                We paired that with marketplace audits and what we already knew from
                Procore&apos;s company records—not just vibes from the calls.
              </p>
              <div className="cs-callout">
                Who was on the line: I led the calls, with our PM and our lead engineer on every
                session — design, product, and engineering hearing the same customer, together.
              </div>
            </div>
          </div>

          <div className="ss-panel" data-img="3" data-caption="Journey mapping">
            <p className="ss-num">04 - Define</p>
            <h3 className="ss-title">Define The High Level</h3>
            <div className="ss-body">
              <p>
                Together with our PM and lead engineer, we worked at a very high level to map the
                key journey maps and flows in the Construction Network. The questions in front of
                us:
                <br />
                <strong>How will users flow through this experience?</strong>
                <br />
                <strong>How will they accomplish all that they need to accomplish?</strong>
              </p>
              <p>
                Those high-level flows were put together with members of Product, UX, and
                Engineering in the room.
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="4" data-caption="Wireframes">
            <p className="ss-num">05 - Ideate</p>
            <h3 className="ss-title">Wireframes</h3>
            <div className="ss-body">
              <p>
                Before moving to high fidelity, I designed everything in grayscale. Introducing
                color and polish too early risks shifting the conversation away from what actually
                matters &mdash; whether the flows and features are right. These wireframes were
                shared internally for alignment and iterated on based on feedback.
              </p>
              <p>
                The PCN sat between Procore&apos;s marketing site and the core app, which meant the
                design system did too. There was no clear system to inherit, and I knew that debate
                could become a distraction. Staying in grayscale kept everyone focused on the right
                problems until we were ready to have the visual design conversation.
              </p>
              <p>
                For search results I leaned toward tight rows over big cards so GCs could scan and
                compare fast.
              </p>
            </div>
          </div>
        </div>

        <div className="ss-image-col">
          <div className="ss-image-wrap">
            <div className="ss-img" data-index="0">
              <div className="bfw bfw--deck">
                <div className="bfw-bg dark" />
                <div className="bfw-deck">
                  <a
                    href={PCN_VISION_DOC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bf-card bf-card--paper"
                    aria-label="Open internal strategy document in Dropbox Paper"
                  >
                    <div className="browser-frame browser-frame--deck">
                      <div className="bf-chrome">
                        <div className="bf-dots">
                          <span className="bf-dot bf-red" />
                          <span className="bf-dot bf-yellow" />
                          <span className="bf-dot bf-green" />
                        </div>
                        <div className="bf-urlbar">Internal Strategy Document</div>
                      </div>
                      <div className="bf-screen bf-screen--media">
                        <Image
                          src="/procore-pcn-strategy-paper.png"
                          alt="Internal strategy document in Dropbox Paper: PCN prototype vision, value, and MVP goals."
                          fill
                          sizes="(max-width: 900px) 100vw, 35vw"
                          style={{ objectFit: 'cover', objectPosition: 'top center' }}
                        />
                      </div>
                    </div>
                  </a>
                  <a
                    href={PCN_VISION_VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bf-card bf-card--video"
                    aria-label="Open vision video in Dropbox"
                  >
                    <div className="browser-frame browser-frame--deck">
                      <div className="bf-chrome">
                        <div className="bf-dots">
                          <span className="bf-dot bf-red" />
                          <span className="bf-dot bf-yellow" />
                          <span className="bf-dot bf-green" />
                        </div>
                        <div className="bf-urlbar">Vision video</div>
                      </div>
                      <div className="bf-screen bf-screen--media bf-screen--video-poster">
                        {VISION_VIDEO_HAS_POSTER ? (
                          <Image
                            src="/procore-pcn-vision-video-poster.png"
                            alt="Vision video preview"
                            fill
                            sizes="(max-width: 900px) 100vw, 35vw"
                            style={{ objectFit: 'cover', objectPosition: 'center center' }}
                          />
                        ) : (
                          <div className="bf-video-placeholder" aria-hidden>
                            <span className="bf-video-play" />
                            <span className="bf-video-label">Vision video</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="ss-img" data-index="1">
              <div className="bfw">
                <div className="bfw-bg dark" aria-hidden />
                <div className="browser-frame">
                  <div className="bf-chrome">
                    <div className="bf-dots">
                      <span className="bf-dot bf-red" />
                      <span className="bf-dot bf-yellow" />
                      <span className="bf-dot bf-green" />
                    </div>
                    <div className="bf-urlbar">Marketplace audit reference</div>
                  </div>
                  <div className="bf-screen bf-screen--media bf-screen--audit-gif">
                    {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF */}
                    <img
                      src="/procore/procore-discover-marketplace-audit.gif"
                      alt="Marketplace design audit: annotated Google Maps walkthrough showing quick filters, result list structure, and advanced filter patterns."
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="ss-img" data-index="2">
              <div className="bfw">
                <div className="bfw-bg dark" />
                <div className="browser-frame">
                  <div className="bf-chrome">
                    <div className="bf-dots">
                      <span className="bf-dot bf-red" />
                      <span className="bf-dot bf-yellow" />
                      <span className="bf-dot bf-green" />
                    </div>
                    <div className="bf-urlbar">Customer research</div>
                  </div>
                  <div className="bf-screen bf-screen--media bf-screen--audit-gif">
                    {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF */}
                    <img
                      src="/procore/customer-research.gif"
                      alt="Customer discovery board: journey map for finding new partners to work with—steps from search and trade lines through qualification, fit, and contracting."
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="ss-img" data-index="3">
              <div className="bfw">
                <div className="bfw-bg dark" />
                <div className="browser-frame">
                  <div className="bf-chrome">
                    <div className="bf-dots">
                      <span className="bf-dot bf-red" />
                      <span className="bf-dot bf-yellow" />
                      <span className="bf-dot bf-green" />
                    </div>
                    <div className="bf-urlbar">Workflows</div>
                  </div>
                  <div className="bf-screen bf-screen--media bf-screen--audit-gif">
                    {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF */}
                    <img
                      src="/procore/workflows.gif"
                      alt="High-level user flow diagram for the Construction Network: account creation and onboarding journey with decision branches, logged-in states, and lightweight vs full paths."
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="ss-img" data-index="4">
              <div className="bfw">
                <div className="bfw-bg dark" aria-hidden />
                <div className="browser-frame">
                  <div className="bf-chrome">
                    <div className="bf-dots">
                      <span className="bf-dot bf-red" />
                      <span className="bf-dot bf-yellow" />
                      <span className="bf-dot bf-green" />
                    </div>
                    <div className="bf-urlbar">Wireframes &mdash; Figma</div>
                  </div>
                  <div className="bf-screen bf-screen--media bf-screen--audit-gif">
                    {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF */}
                    <img
                      src="/procore/wireframes.gif"
                      alt="Construction Network wireframes: search hero, results, and business profile explorations."
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="ss-caption" id="procore-cap">
              The challenge
            </div>
            <div className="ss-progress">
              <span className="ss-dot" />
              <span className="ss-dot" />
              <span className="ss-dot" />
              <span className="ss-dot" />
              <span className="ss-dot" />
            </div>
          </div>
        </div>
      </div>

      <section
        ref={protoShowcaseRef}
        className="cs-showcase cs-showcase--prototype a6"
        aria-labelledby="procore-proto-label"
      >
        <div className="cs-showcase-inner">
          <div className="cs-showcase-wire-lede">
            <p className="ss-num" id="procore-proto-label">
              06 - Refine
            </p>
            <h3 className="ss-title">A Coded Prototype</h3>
            <div className="ss-body">
              <p>
                This is where I deviated from the classic design process &mdash; and where my
                Activator instinct kicked in.
              </p>
              <p>
                By the end of 2020, we had done the research, defined the vision, and were ready to
                build. But our team was just three people: a PM, a lead developer, and me. We
                didn&apos;t have engineers yet. The project had momentum on paper but nothing to
                show for it.
              </p>
              <p>
                Rather than wait, I spent the Christmas break building a working prototype in HTML
                and CSS &mdash; half seriously threatening to learn React and ship the whole thing
                myself. It wasn&apos;t precious. It was just enough to make the vision real and get
                the project moving.
              </p>
              <p>
                What I didn&apos;t anticipate was how much that prototype would do. It became one of
                the most important artifacts in the entire project &mdash; a reference point that
                engineering built directly from when the team finally came together. But more
                immediately, I believe it helped us get engineers assigned sooner. Leadership could
                suddenly see the product clearly in a way they hadn&apos;t before. The prototype
                didn&apos;t just refine the MVP. It helped make the case that this was worth
                resourcing.
              </p>
            </div>
          </div>
          <div className="bfw cs-showcase-bfw">
            <div className="browser-frame browser-frame--showcase">
              <div className="bf-chrome">
                <div className="bf-dots">
                  <span className="bf-dot bf-red" />
                  <span className="bf-dot bf-yellow" />
                  <span className="bf-dot bf-green" />
                </div>
                <div className="bf-urlbar">PCN prototype</div>
              </div>
              <div className="bf-screen bf-screen--media bf-screen--iframe">
                {prototypeIframeSrc ? (
                  <iframe
                    src={prototypeIframeSrc}
                    title="Interactive Construction Network HTML prototype"
                    tabIndex={-1}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="cs-process a7"
        id="procore-iterate"
        aria-labelledby="procore-iterate-label"
      >
        <div className="cs-process-inner">
          <div className="cs-process-text">
            <p className="ss-num" id="procore-iterate-label">
              07 - Refine
            </p>
            <h3 className="ss-title">Rapid Iteration</h3>
            <div className="ss-body">
              <p>
                Together with Procore&apos;s research team, we started getting the prototype in
                front of real customers using a
                RITE methodology &mdash; Rapid Iterative Testing and Evaluation. The idea is pretty
                simple: test with a small group, find the biggest issues, fix them, and test again.
              </p>
              <p>
                Because we were working in code, I could take the feedback we got on a Tuesday and
                have updates live by Wednesday. Each round made us more confident in what we were
                building, and by the time the engineering team came together, we weren&apos;t
                starting from zero. We hit the ground running.
              </p>
            </div>
          </div>
          <div className="cs-process-visual">
            {/* eslint-disable-next-line @next/next/no-img-element -- static raster in public/ */}
            <img
              src="/procore/iteration.png"
              alt="Iteration loop: prototype, customer feedback, and rapid refinement in code."
              width={1551}
              height={1084}
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section
        className="cs-process a8"
        id="procore-build"
        aria-labelledby="procore-build-label"
      >
        <div className="cs-process-inner">
          <div className="cs-process-text">
            <p className="ss-num" id="procore-build-label">
              08 - Build
            </p>
            <h3 className="ss-title">Shipping with engineering</h3>
            <div className="ss-body">
              <p>
                Once we had a real build in motion, I made sure we were instrumenting the right
                events &mdash; what people clicked, where they lingered, bounce patterns, and the
                other signals we needed to understand whether the experience was working.
              </p>
              <p>
                I stayed close to the developers shipping the production version: clearing
                blockers, updating flows and UI details as constraints surfaced, and keeping the
                build aligned with what we had already learned in research and iteration.
              </p>
              <p>
                I planned to help with CSS polish; in practice I owned the responsive CSS for the
                first iteration so the site held up on mobile. A lot of that code is still in
                production today.
              </p>
            </div>
          </div>
          <div className="cs-process-visual">
            <Image
              src={PCN_BUILD_ILLUSTRATION_SRC}
              alt="GitHub-style contribution graph for PCN, annotated to highlight intensive commits in June and July, with a profile photo."
              width={1329}
              height={764}
              sizes="(max-width: 900px) 100vw, 35vw"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <div className="impact-section">
        <div className="impact-inner">
          <div className="impact-header">
            <p className="impact-label">09 - Business Impact</p>
            <h3 className="impact-hed">Stats since launch</h3>
          </div>

          <div className="yoy-grid">
            <div className="yoy-year">
              <p className="yoy-label">2021 &mdash; Launch</p>
              <div className="yoy-stats">
                <div className="yoy-stat">
                  <span className="yoy-val">53K</span>
                  <span className="yoy-desc">Companies onboarded at launch</span>
                </div>
                <div className="yoy-stat">
                  <span className="yoy-val">Live</span>
                  <span className="yoy-desc">PCN ships August 25, 2021</span>
                </div>
              </div>
              <p className="yoy-note">Prototype secures buy-in. Dedicated team funded. Platform built.</p>
            </div>

            <div className="yoy-year">
              <p className="yoy-label">2022 &mdash; Traction</p>
              <div className="yoy-stats">
                <div className="yoy-stat">
                  <span className="yoy-val">~400K</span>
                  <span className="yoy-desc">Unique visitors</span>
                </div>
                <div className="yoy-stat">
                  <span className="yoy-val">111</span>
                  <span className="yoy-desc">Bidding Network pilot customers</span>
                </div>
              </div>
              <p className="yoy-note">
                Free accounts, Bid Board, and PCN+Bidding integration all ship within 14 months of
                launch.
              </p>
            </div>

            <div className="yoy-year">
              <p className="yoy-label">2023 &mdash; Scale</p>
              <div className="yoy-stats">
                <div className="yoy-stat">
                  <span className="yoy-val accent">1.2M</span>
                  <span className="yoy-desc">Unique visitors &uarr; 288% YoY</span>
                </div>
                <div className="yoy-stat">
                  <span className="yoy-val accent">210K+</span>
                  <span className="yoy-desc">Published profiles &uarr; 4&times;</span>
                </div>
              </div>
              <p className="yoy-note">
                98%+ of paying customers discoverable via PCN. First bid awarded to a company found
                through the network.
              </p>
            </div>

            <div className="yoy-year highlight">
              <p className="yoy-label">2024 &mdash; Infrastructure</p>
              <div className="yoy-stats">
                <div className="yoy-stat">
                  <span className="yoy-val accent">4.5M</span>
                  <span className="yoy-desc">Unique visitors &uarr; 275% YoY</span>
                </div>
                <div className="yoy-stat">
                  <span className="yoy-val accent">300K</span>
                  <span className="yoy-desc">Bid invites &uarr; 165% YoY</span>
                </div>
              </div>
              <p className="yoy-note">
                Expanded to Canada. Gilbane (ENR #10) commits to sunsetting Building Connected and
                fully adopting Procore Preconstruction.
              </p>
            </div>
          </div>

          <div className="impact-quotes">
            <div className="impact-quote">
              <p className="iq-text">
                &quot;Because we used the Procore Construction Network, Peridot Mechanical is
                projected to <strong>triple our annual revenue</strong>.&quot;
              </p>
              <p className="iq-attr">John Watson &mdash; Peridot Mechanical</p>
            </div>
            <div className="impact-quote">
              <p className="iq-text">
                &quot;Companies in the PCN are <strong>aligned to our requirements</strong>. We no
                longer have to make countless phone calls to find the right firms, which saves us a
                significant amount of time.&quot;
              </p>
              <p className="iq-attr">Sean Leach &mdash; Project Manager, BBL Construction Services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-footer">
        <div className="tags">
          <span className="tag">Zero-to-One</span>
          <span className="tag">B2B SaaS</span>
          <span className="tag">Network Product</span>
          <span className="tag">Coded Prototype</span>
          <span className="tag">Cross-surface UI</span>
          <span className="tag">User Research</span>
          <span className="tag">Systems Thinking</span>
          <span className="tag">Front-end Implementation</span>
        </div>
      </div>
    </div>
  );
}
