'use client';

import Image from 'next/image';
import ScoutClaudeChatMockup from '@/components/scout/ScoutClaudeChatMockup';
import ScoutRefinementMotion from '@/components/scout/ScoutRefinementMotion';

/** Optional context — public talk on craft vs rigid process in the AI era (parallel framing). */
const JENNY_WEN_LENNY_URL =
  'https://www.youtube.com/watch?v=eh8bcBIAAFo';

/** Embedded Notion page for panel 07 (documentation). */
const SCOUT_NOTION_EMBED_URL =
  'https://north-element-ae1.notion.site/ebd//32cda057146d804f8d4bdbfc91e510ec';

const SCOUT_HERO_BEFORE = '/scout-fuel/hero-before.png';
const SCOUT_HERO_AFTER = '/scout-fuel/hero-after.png';
const SCOUT_PROCESS_CONTRAST = '/scout-fuel/process-contrast.png';
const SCOUT_IMAGE_PANELS: { src: string; alt: string }[] = [
  {
    src: '/scout-fuel/panel-narrative.svg',
    alt: 'Stylized narrative vision document: a fuel manager day starting at 6 a.m.',
  },
  {
    src: '/scout-fuel/tweakcn.png',
    alt: 'TweakCN interface used to customize the Shadcn theme before implementation.',
  },
  {
    src: '/scout-fuel/panel-scaffold.svg',
    alt: 'Stylized dashboard scaffold: first layout from Shadcn, Tailwind, and theme tokens.',
  },
  {
    src: '/scout-fuel/panel-subtractive.svg',
    alt: 'Stylized refinement view: dashed guides suggesting lines and chrome removed.',
  },
  {
    src: '/scout-fuel/panel-gamified.jpg',
    alt: 'Scout Fuel dashboard screenshot highlighting fleet efficiency and savings performance.',
  },
  {
    src: '/scout-fuel/panel-outcome.svg',
    alt: 'Stylized handoff-ready prototype overview in a browser frame.',
  },
];
const SCOUT_SHOWCASE = '/scout-fuel/showcase-final.png';
const NARRATIVE_VISION_PROMPT =
  'describe the ideal software to support all this. tell the story again but explain what the imaginary software is doing so simplify this job';
const NARRATIVE_VISION_RESPONSE =
  `I pull into the office at 5:30 AM, and instead of staring at three monitors full of spreadsheets, I open one dashboard. FuelCommand has already been working while I slept.

The system automatically ingested last night's fuel transactions, cross-referenced them against real-time pricing data at every truck stop within 50 miles of where each driver fueled up, and flagged the exceptions. There's a clean alert: "Driver 31 - Overpaid $47 at TA in Reno. Flying J 12 miles prior was $0.31/gal cheaper." The system shows me it already sent Driver 31 a gentle automated message: "Hey Tom, heads up - next time you're in this area, check the fuel app for better rates nearby." It learns which drivers need coaching and which ones just had no choice.

I click into the efficiency dashboard. FuelCommand has already correlated Driver 23's 8% MPG drop with maintenance records and flagged that his truck is 2,000 miles overdue for a tire rotation. It created a maintenance ticket automatically. It also noticed his average speed increased 4 mph this month-probably driving more aggressively. The system queued him for the next defensive driving refresher but wants my approval first. I click "approve."

At 7 AM, dispatch calls about the Memphis to Phoenix urgent run. But before I can even open my routing tool, FuelCommand is already showing me the answer. It analyzed which trucks are available, their current fuel economy trends, their locations, and their fuel levels. It recommends Truck 17 with Driver 42-she's got the best fuel efficiency rating on western routes, and the truck just came out of maintenance.

More importantly, the system has already calculated the optimal fuel stops. It's not just looking at our negotiated rates-it's pulling live pricing from our fuel card network, factoring in current traffic patterns, considering the load weight, accounting for elevation changes (Phoenix is uphill from Memphis), and even checking which stations have shorter wait times based on historical data. Three perfect stops pop up on the map with precise timing: "Refuel in Little Rock (47% capacity, $3.58/gal), Albuquerque (43% capacity, $3.62/gal), arrive Phoenix with 22% remaining."

I send the route to Driver 42's tablet with one click. She gets turn-by-turn navigation with the fuel stops pre-programmed. If she deviates or if prices change dramatically mid-route, the system will automatically recalculate and notify her of better options.

Mid-morning, I'm not on the phone with the fuel card company-FuelCommand already caught those DEF retail purchases and sent me a weekly anomaly report. It even drafted a message for the safety manager to include in Friday's driver meeting, with specific examples and the cost impact. I just review and approve it.

The idling report is automated now. FuelCommand tracks every truck in real-time via telematics integration. When Driver 8 idled for 4.2 hours yesterday, the system texted him at hour 2: "Extended idle detected. If waiting for load, consider shutting down. Current idle cost: $8." It logged the location, cross-referenced it with our customer database, and automatically added it to the detention time report I send to that shipper monthly. It's even calculating the total annual idling cost per customer so I can negotiate better terms.

The system already knows there's a problem customer who's costing us $4,200/year in idle time.

For the weekly fuel bid review, I don't spend lunch building comparison spreadsheets. FuelCommand has a vendor evaluation module. I upload the three proposals, and it instantly models them against our actual historical consumption patterns-every route, every gallon, every price point from the last 12 months. It shows me:

Vendor A: Projected annual savings $23,400 (2.1% reduction)
Vendor B: Projected annual savings $41,200 (3.7% reduction)
Vendor C: Projected annual cost increase $8,900 (marketing fluff, poor coverage on our actual routes)

It even highlights the risk factors: "Vendor B has limited stations on I-80 through Nebraska-would require route modifications on 12% of loads."

The quarterly budget forecast that used to take me six hours? FuelCommand has a predictive modeling engine. It's already tracking DOE diesel projections, our planned route expansions, the three new trucks in the fleet, seasonal variations, and even correlating factors I never thought of-like how El Nino patterns affect fuel prices in the Southwest. It generates the forecast in 30 seconds. My job is to review the assumptions, make strategic adjustments (maybe I know we're bidding on a new contract the AI doesn't), and export it to the CFO. Ninety minutes instead of a full day.

At 4 PM, Driver 38 doesn't call me panicking in Wyoming. FuelCommand saw his fuel level dropping and calculated his range 45 minutes ago. It sent an automatic alert to his tablet: "Low fuel warning. Next recommended stop: TA Travel Center, Rawlins, WY - 43 miles. You will arrive with 18% fuel remaining at current consumption rate. Maintain 60 mph."

He taps "Navigate" and it routes him there. If he'd been in real danger of running out, the system would have escalated to me AND dispatch simultaneously with suggested intervention options.

The system also flagged the route issue automatically: "Route WY-87 North has insufficient fuel coverage for standard truck range. Recommend route optimization or fuel capacity requirements." It's already drafting a route modification proposal for me to review.

Before I leave at 5 PM (not 6, because I'm not drowning in manual data entry), I open the executive dashboard. FuelCommand has already prepared everything for Monday's meeting:

Current cost per mile: $1.23
Budget variance: -2.3% (color-coded green)
YoY efficiency improvement: 4.7%
Driver performance rankings (anonymized, but identifying top performers and those needing coaching)
Top 5 cost-saving opportunities identified by AI analysis
Projected savings if all recommendations implemented: $127,000 annually

But here's the beautiful part: FuelCommand doesn't just report the past. It's prescriptive. It tells me:
"Next week's forecast: 15 loads running through California. Current CA diesel prices are 8% above national average. Recommend: (1) Refuel maximum capacity before entering CA on all westbound loads. (2) Consider route modifications for 3 loads that could avoid CA entirely with <50 mile detour. (3) Estimated savings: $1,840."
I click "Approve All" and the recommendations get pushed to the affected drivers' route plans automatically.

The software also learns from every decision. When I override a recommendation (maybe I know a particular truck stop always has long lines, even if the price is good), it notes my feedback and adjusts future suggestions. When drivers report issues ("This station's pumps were broken"), it updates its database in real-time for all drivers.

There's even a mobile app where drivers can see their personal fuel efficiency scores, compete on leaderboards, and earn recognition for smart fueling decisions. Gamification has cut my "driver education" workload by 60% because they're training each other.

What FuelCommand actually does:

Automated transaction monitoring with real-time price comparison and exception alerts
Predictive maintenance integration that correlates fuel efficiency with vehicle health
Dynamic route optimization with multi-variable fuel stop planning (price, location, timing, traffic, load weight, weather)
Real-time driver guidance via mobile app with automated coaching
Proactive alerting for low fuel, extended idling, off-route fueling
Vendor analysis modeling that simulates proposals against actual data
Predictive budgeting with external data integration (weather, fuel markets, economic indicators)
Customer cost tracking for detention time and idle-related expenses
Prescriptive recommendations not just reporting, but telling me what to DO
Machine learning that improves with every decision and every mile

I'm no longer a data archaeologist digging through spreadsheets. I'm a strategic operator making high-value decisions based on intelligence the software provides. The software handles the 1,000 micro-optimizations. I handle the 10 strategic moves that actually transform the business.

My job went from "hunt for pennies in transaction logs" to "deploy AI-identified savings opportunities and negotiate better deals with the leverage of perfect information."

And I leave at 5 PM, because the software works 24/7 and I don't have to.`;

/** User asks for a build prompt; assistant returns a Cursor-ready scaffold instruction (panel 04). */
const V1_SCAFFOLD_USER_PROMPT =
  'can you write a prompt for cursor to build an app that looks like this? its just for prototyping purposes. no need for a back end. a shadcn project is already setup so it just needs to pull in shadcn components';

const V1_SCAFFOLD_ASSISTANT_REPLY = `You are building a FuelCommand prototype - a fleet fuel management dashboard for trucking companies. This is a frontend-only prototype using React, TypeScript, and shadcn/ui components. Use mock data throughout.

PROJECT STRUCTURE:
Create the following main views/pages:
1. Dashboard (Home) - Main overview with key metrics
2. Live Fleet Map - Real-time truck locations and fuel status
3. Fuel Transactions - Recent transactions with alerts
4. Driver Performance - Rankings and efficiency scores
5. Route Optimizer - Tool for planning optimal fuel stops
6. Budget & Forecasting - Predictive analytics view
7. Alerts & Recommendations - AI-generated action items

DESIGN REQUIREMENTS:
- Dark mode professional dashboard aesthetic
- Use Tailwind for styling, shadcn/ui for all components
- Mobile responsive but optimized for desktop (this is a workstation tool)
- Color coding: Green for good/savings, Red for overspend/alerts, Yellow for warnings
- Professional trucking/logistics color palette

DASHBOARD VIEW:
Top row KPI cards (use Card component):
- Current Cost Per Mile: $1.23 (with trend indicator ↓ 2.3%)
- Monthly Fuel Spend: $387,450 (vs budget: -2.3%)
- Fleet Average MPG: 6.8 (YoY improvement: +4.7%)
- Active Alerts: 7 (clickable, goes to alerts page)

Main content area (grid layout):
- Recent Fuel Transactions table (last 10, with alert badges for overspend)
- Top 5 Cost-Saving Opportunities (list with estimated savings amounts)
- Weekly Fuel Price Trends (line chart - use recharts)
- Driver Efficiency Leaderboard (top 5 drivers with scores)

LIVE FLEET MAP VIEW:
- Full-width map placeholder (just a div with bg-gray-800 for now, add text "Map Integration Point")
- Sidebar with list of trucks (use ScrollArea)
- Each truck card shows: Truck ID, Driver name, Current fuel level (progress bar), Next recommended stop, Status badge (On Route, Refueling, Idle, Low Fuel)
- Filter controls: All Trucks, Low Fuel Only, Idling, Off-Route

FUEL TRANSACTIONS VIEW:
Data table (use Table component) with columns:
- Date/Time
- Driver Name
- Truck ID
- Location
- Station Brand
- Gallons
- Price/Gallon
- Total Cost
- Variance (vs optimal price, color coded)
- Alert Badge (if overspent)

Filters above table:
- Date range picker
- Driver dropdown
- Station brand dropdown
- Show only alerts toggle

DRIVER PERFORMANCE VIEW:
- Leaderboard table with columns: Rank, Driver Name, Truck ID, Avg MPG, Fuel Cost/Mile, Idle Time, Efficiency Score (0-100)
- Sortable columns
- Color-coded efficiency scores (>90 green, 70-90 yellow, <70 red)
- Individual driver detail modal (click on row) showing:
  - Monthly trend chart
  - Recent trips
  - Coaching recommendations
  - Badge achievements

ROUTE OPTIMIZER VIEW:
Form interface (use Form components):
- Origin (Input)
- Destination (Input)
- Truck Selection (Select dropdown)
- Load Weight (Input with unit)
- Calculate Route (Button)

Results panel (shown after calculate):
- Recommended fuel stops (3-4 cards) showing:
  - Station name/brand
  - Location
  - Estimated price/gallon
  - Refuel amount (gallons)
  - Distance from previous stop
  - Estimated arrival time with fuel %
- Total trip cost estimate
- Savings vs alternative routes

BUDGET & FORECASTING VIEW:
- Time period selector (tabs: This Month, Quarter, Year)
- Budget vs Actual chart (use recharts bar chart)
- Forecast model card showing:
  - Predicted next month spend
  - Confidence interval
  - Key factors affecting forecast (list)
- Historical trends line chart
- Scenario analysis tool (simple form to adjust variables like fuel price, mileage, efficiency)

ALERTS & RECOMMENDATIONS VIEW:
List of actionable items (use Alert component):
Each alert card contains:
- Priority badge (High, Medium, Low)
- Alert type icon
- Description
- Estimated savings/cost
- Action buttons (Approve, Dismiss, View Details)

Example alerts:
- "Driver 31 consistently refueling at non-preferred stations. Potential monthly savings: $340"
- "Truck 17 MPG decreased 12% - maintenance required"
- "15 loads next week through California - optimize pre-CA refueling. Savings: $1,840"
- "Vendor B proposal review - potential annual savings: $41,200"

NAVIGATION:
- Sidebar navigation (use Sheet or permanent sidebar)
- Logo/brand at top
- Nav items with icons for each view
- User profile section at bottom

MOCK DATA:
Generate realistic mock data:
- 40-50 trucks with IDs (T001-T050)
- Driver names
- Fuel transactions from past 30 days
- Coordinates for US interstate routes
- Fuel prices ranging $3.20-$4.50/gallon
- Station brands: TA/Petro, Pilot Flying J, Loves, Shell, etc.

COMPONENTS TO USE:
- Card, CardHeader, CardTitle, CardContent
- Table, TableHeader, TableBody, TableRow, TableCell
- Button, Badge, Alert, AlertTitle, AlertDescription
- Select, Input, Label, Form
- Tabs, TabsList, TabsTrigger, TabsContent
- ScrollArea, Separator
- Progress (for fuel level bars)
- Dialog (for modals)
- Charts from recharts (LineChart, BarChart, AreaChart)

Start with the Dashboard view and navigation structure. Make it look professional and data-rich like a real fleet management system would. Use realistic numbers and mock data that tells a coherent story.`;

export default function ScoutSection() {
  return (
    <div id="page-scout" className="page active">
      <div className="page-hero page-hero--scout">
        <p className="label a1">Case Study 02 &mdash; Scout Fuel</p>
        <h2 className="page-headline a2">
          Scout Fuel
          <br />
          Product Design
        </h2>
        <div className="page-lede-stack a3">
          <p>
            Scout Fuel is a fuel optimization tool for fuel managers at trucking companies. The
            founders have built a UI that is not scaling, and though their customers see value in
            the concept of fuel optimization, the product has yet to gain traction. On paper, it
            makes sense; in practice, they are not leveraging the tool.
          </p>
          <p>
            The founders came to me asking for support. They are new to development, not fully sure
            of what they needed, but wanted to make sure what they were building felt modern and well
            thought out.
          </p>
          <p>
            My goal was to create, first, a design foundation from which they could continue to
            build the product, and second, redesign their customers&apos; experience so it was more
            than a system of record, but instead a system of intelligence that drove action and
            ultimately increased customers&apos; fuel savings.
          </p>
        </div>
        <div className="cs-meta a4">
          <div className="cs-meta-item">
            <span className="cs-meta-label">Role</span>
            <span className="cs-meta-value">Solo Designer &amp; Builder</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Timeline</span>
            <span className="cs-meta-value">60 hours</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Output</span>
            <span className="cs-meta-value">Coded prototype</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Stack</span>
            <span className="cs-meta-value">Shadcn &middot; Tailwind &middot; Cursor</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Tools</span>
            <span className="cs-meta-value">Claude &middot; Tweak CN</span>
          </div>
        </div>
        <div className="cs-hero-bleed" role="img" aria-label="Before and after browser-framed Scout Fuel dashboard redesign comparison.">
          <div className="cs-hero-compare">
            <article className="cs-hero-shot cs-hero-shot--before">
              <div className="cs-hero-shot-meta">
                <p className="cs-hero-shot-kicker">Before</p>
                <p className="cs-hero-shot-title">Legacy UI shipped by engineering</p>
              </div>
              <div className="cs-hero-browser">
                <div className="cs-hero-browser-chrome">
                  <span className="cs-hero-dot cs-hero-dot--red" />
                  <span className="cs-hero-dot cs-hero-dot--yellow" />
                  <span className="cs-hero-dot cs-hero-dot--green" />
                  <span className="cs-hero-url">scoutfuel.app/dashboard</span>
                </div>
                <div className="cs-hero-browser-screen">
                  <Image
                    src={SCOUT_HERO_BEFORE}
                    alt="Original Scout Fuel dashboard with lighter palette and inconsistent hierarchy."
                    fill
                    className="cs-hero-bleed-img"
                    sizes="(max-width: 900px) 100vw, 46vw"
                    priority
                  />
                </div>
              </div>
            </article>

            <article className="cs-hero-shot cs-hero-shot--after">
              <div className="cs-hero-shot-meta">
                <p className="cs-hero-shot-kicker">After</p>
                <p className="cs-hero-shot-title">Systemized design with clearer hierarchy</p>
              </div>
              <div className="cs-hero-browser">
                <div className="cs-hero-browser-chrome">
                  <span className="cs-hero-dot cs-hero-dot--red" />
                  <span className="cs-hero-dot cs-hero-dot--yellow" />
                  <span className="cs-hero-dot cs-hero-dot--green" />
                  <span className="cs-hero-url">scoutfuel.app/dashboard</span>
                </div>
                <div className="cs-hero-browser-screen">
                  <Image
                    src={SCOUT_HERO_AFTER}
                    alt="Redesigned Scout Fuel dashboard with improved hierarchy and component consistency."
                    fill
                    className="cs-hero-bleed-img"
                    sizes="(max-width: 900px) 100vw, 46vw"
                  />
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>

      <section className="cs-process a5" id="scout-process" aria-labelledby="scout-process-label">
        <div className="cs-process-inner">
          <div className="cs-process-text">
            <p className="ss-num" id="scout-process-label">
              2020 vs today
            </p>
            <h3 className="ss-title">An Update in Process</h3>
            <div className="ss-body">
              <p>
                On the Procore Construction Network (case study 01), I followed a very traditional
                arc: discovery, then <strong>low-fidelity flows</strong> that slowly, slowly became
                high-fidelity mocks. A huge share of calendar time lived in those early bands —
                sketching, grayscale, Figma hygiene — because that was how we de-risked structure
                before we invested in polish.
              </p>
              <p>
                In today&apos;s process, design is much more powerful in the refining stage.{' '}
                <strong>Taste, judgment, and instinct</strong> become some of the most important
                skills because of how easy generating and creating has become. Our job is much more
                about removing noise and distraction and really honing in on the simplest, most
                beautiful experience for our users. In the past, design process was a slow,
                additive process. Today, it is often a much more subtractive process.
              </p>
              <p>
                I leveraged this in a recent project for Scout Fuel. The results and timeline
                astounded me.
              </p>
            </div>
          </div>
          <div className="cs-process-visual">
            {/* eslint-disable-next-line @next/next/no-img-element -- local illustrative SVG */}
            <img
              src={SCOUT_PROCESS_CONTRAST}
              alt="Diagram contrasting a slow Figma-first fidelity climb over weeks with a faster path to runnable UI where refinement dominates."
              width={1100}
              height={900}
              decoding="async"
            />
            <p className="cs-process-quote">
              &ldquo;If you like the design, take a line out. If you still like it, take another
              line out.&rdquo;
              <span className="cs-process-quote-author">
                — Gorden Wagener, head of design at Mercedes
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="scroll-section img-right" id="scout-scroll">
        <div className="ss-text-col">
          <div className="ss-panel" data-img="0" data-caption="Research & brief">
            <p className="ss-num">01 &mdash; Discovery</p>
            <h3 className="ss-title">AI to understand the problem space</h3>
            <div className="ss-body">
              <p>
                For this project, I knew it was going to be a challenge to get on the phone with
                customers of Scout Fuel, so I leaned into AI to help get situated in the needs of
                the users I was designing for.
              </p>
              <p>
                My prompt was to get Claude to tell me the story of a Fuel Manager at a trucking
                company to help me understand their jobs-to-be-done and general challenges.
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="1" data-caption="Vision doc">
            <p className="ss-num">02 &mdash; Narrative vision</p>
            <h3 className="ss-title">Vision First</h3>
            <div className="ss-body">
              <p>
                I then prompted a narrative vision of what an ideal product might unlock for a Fuel
                Manager. I did this in narrative form, as I have found that stories are often the
                best way to communicate and to capture the end result.
              </p>
              <p>
                From here, I set out to design and build a product that was supportive of this
                vision.
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="2" data-caption="Cursor prompt">
            <p className="ss-num">03 - Define</p>
            <h3 className="ss-title">Building a Design Foundation</h3>
            <div className="ss-body">
              <p>
                Because my goal was to build a front-end prototype they could continue building on,
                I jumped straight into code and used the Shadcn component system as the base of the
                prototype.
              </p>
              <p>
                Shadcn gave me modern componentry, and then I used Tweak CN to customize three
                unique style directions for Scout Fuel to review and provide feedback on. That gave
                us a solid design foundation to start building out the actual experience.
              </p>
              <p>
                I also used Tailwind for layout and styling, so the stack stayed squarely in
                today&apos;s React ecosystem: composable UI primitives, utility-first CSS, and a
                codebase pattern product engineering already knows how to run with.
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="3" data-caption="First layout">
            <p className="ss-num">04 - Ideate</p>
            <h3 className="ss-title">Prompting The First Version</h3>
            <div className="ss-body">
              <p>
                With a clear vision set and the scaffolding of the design foundation in place, I
                used Claude to shape the first one-shot prompt and get a V1 on the canvas. From
                there, I moved into Cursor as my primary environment for both development and
                design, and the work of refining kicked in.
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="4" data-caption="Subtractive pass">
            <p className="ss-num">05 - Refine &amp; Build</p>
            <h3 className="ss-title">Refining Through Problem Solving Focus</h3>
            <div className="ss-body">
              <p>
                Once AI put the first version on the canvas, the work shifted to
                <strong> subtraction</strong>. The first pass usually has too much: extra panels,
                extra lines, extra decoration.
              </p>
              <p>
                I start by moving things around, merging repeated blocks, and removing anything that
                doesn&apos;t carry real signal. It&apos;s less about polishing and more about
                reshaping the structure so the core workflow reads quickly.
              </p>
              <p>
                That phase feels more like carving than layering. Each pass strips away noise so the
                product gets closer to the rough shape I have in mind.
              </p>
              <p>
                At the core, this stage is about becoming incredibly clear about the problems you
                are solving, and checking whether you are solving them as directly and as simply as
                possible.
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="5" data-caption="Gamification">
            <p className="ss-num">06 - Refine &amp; Build</p>
            <h3 className="ss-title">Adding once the shape is in place</h3>
            <div className="ss-body">
              <p>
                After the refinement phase removed distractions and clarified the core shape of the
                product, I started adding new features for all user problems that seemed poorly
                addressed.
              </p>
              <p>
                In this case I focused on simplifying the ability to see, at a glance, how your
                fleet was doing holistically and which of your drivers might need additional
                coaching.
              </p>
              <p>
                I introduced a dynamic <strong>efficiency score</strong> based on each trucking
                company&apos;s purchase history; the score moved up or down with fleet driver
                execution and became a prominent dashboard signal for quickly identifying which
                drivers needed attention. The goal was to bring a grounded sense of{' '}
                <strong>gamification</strong> into the workflow.
              </p>
            </div>
          </div>

          <div className="ss-panel" data-img="6" data-caption="Documentation">
            <p className="ss-num">07 - Documentaion</p>
            <h3 className="ss-title">Leveraging Skills for Documentation</h3>
            <div className="ss-body">
              <p>
                I will admit that documentation is not something that really gets me excited and is
                often an area where I&apos;ll drag my feet.
              </p>
              <p>
                This is changing dramatically as I&apos;ve started leveraging new workflows into my
                process.
              </p>
              <p>
                In the repo I added a <strong>Cursor skill</strong> that summarizes every pull
                request and appends to that Notion doc. I told the agent to write in{' '}
                <strong>customer-facing language</strong> — what value landed for Scout Fuel, not
                just commit noise — and to <strong>capture screenshots</strong> of the work so the
                log stayed visual, not abstract.
              </p>
              <p>
                After each session building the prototype, I would type <strong>&ldquo;summarize&rdquo;</strong>{' '}
                and let the skill run. It turned into one of the highest-leverage habits of the
                sprint: a lightweight audit trail that made it much easier to communicate design
                decisions back to stakeholders without rebuilding context from memory.
              </p>
            </div>
          </div>
        </div>

        <div className="ss-image-col">
          <div className="ss-image-wrap">
            <div key="scout-claude-mockup" className="ss-img" data-index={0}>
              <div className="bfw">
                <div className="bfw-bg dark" aria-hidden />
                <div className="browser-frame">
                  <div className="bf-chrome">
                    <div className="bf-dots">
                      <span className="bf-dot bf-red" />
                      <span className="bf-dot bf-yellow" />
                      <span className="bf-dot bf-green" />
                    </div>
                    <div className="bf-urlbar">Research — discovery</div>
                  </div>
                  <div className="bf-screen bf-screen--media">
                    <ScoutClaudeChatMockup />
                  </div>
                </div>
              </div>
            </div>
            {SCOUT_IMAGE_PANELS.map(({ src, alt }, j) => {
              const i = j + 1;
              return (
                <div key={src} className="ss-img" data-index={i}>
                  <div className="bfw">
                    <div className="bfw-bg dark" aria-hidden />
                    <div className="browser-frame">
                      <div className="bf-chrome">
                        <div className="bf-dots">
                          <span className="bf-dot bf-red" />
                          <span className="bf-dot bf-yellow" />
                          <span className="bf-dot bf-green" />
                        </div>
                        <div className="bf-urlbar">
                          {i === 1 && 'Design vision — narrative'}
                          {i === 2 && 'www.tweakcn.com'}
                          {i === 3 && 'Ideate — V1 prompt'}
                          {i === 4 && 'Refinement — subtractive pass'}
                          {i === 5 && 'Gamification'}
                          {i === 6 && 'Notion — documentation'}
                        </div>
                      </div>
                      <div
                        className={
                          i === 6
                            ? 'bf-screen bf-screen--media bf-screen--iframe'
                            : i === 5
                              ? 'bf-screen bf-screen--media bf-screen--auto-height'
                            : 'bf-screen bf-screen--media'
                        }
                      >
                        {i === 1 ? (
                          <ScoutClaudeChatMockup
                            theme="light"
                            activationIndex={1}
                            userMessage={NARRATIVE_VISION_PROMPT}
                            assistantMessage={NARRATIVE_VISION_RESPONSE}
                            awaitingSendHint="Click Send for a design vision in narrative form"
                            headerTitle="Design vision"
                            headerMeta="Narrative"
                            ariaLabel="Simulated chat in light mode for narrative vision: a software design prompt types into the composer, then waits for Send."
                          />
                        ) : i === 3 ? (
                          <ScoutClaudeChatMockup
                            activationIndex={3}
                            userMessage={V1_SCAFFOLD_USER_PROMPT}
                            assistantMessage={V1_SCAFFOLD_ASSISTANT_REPLY}
                            awaitingSendHint="Click Send for a Cursor-ready V1 scaffold prompt"
                            headerTitle="Ideate"
                            headerMeta="V1"
                            ariaLabel="Simulated chat: user asks for a prompt to build a runnable V1 from the design vision narrative; assistant replies with a Cursor-ready scaffold prompt."
                          />
                        ) : i === 4 ? (
                          <ScoutRefinementMotion />
                        ) : i === 6 ? (
                          <iframe
                            src={SCOUT_NOTION_EMBED_URL}
                            title="Scout Fuel — Work Completed Summary on Notion"
                            allowFullScreen
                          />
                        ) : (
                          i === 5 ? (
                            <Image
                              src={src}
                              alt={alt}
                              width={1024}
                              height={540}
                              sizes="(max-width: 900px) 100vw, 35vw"
                              style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                          ) : (
                            <Image
                              src={src}
                              alt={alt}
                              fill
                              sizes="(max-width: 900px) 100vw, 35vw"
                              style={{ objectFit: 'cover', objectPosition: 'top center' }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="ss-caption" id="scout-cap">
              Research & brief
            </div>
            <div className="ss-progress">
              <span className="ss-dot" />
              <span className="ss-dot" />
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
        className="cs-showcase cs-showcase--scout a6"
        aria-labelledby="scout-showcase-label"
      >
        <div className="cs-showcase-inner">
          <div className="cs-showcase-wire-lede">
            <p className="ss-num" id="scout-showcase-label">
              08 - Prototype
            </p>
            <h3 className="ss-title">Front End Prototype</h3>
            <div className="ss-body">
              <p>
                Explore the prototype in its current state.
              </p>
            </div>
          </div>
          <div className="bfw cs-showcase-bfw">
            <a
              href="https://scout-fuel-redesign.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="browser-frame browser-frame--showcase"
              aria-label="Open live Scout Fuel redesign demo"
            >
              <div className="bf-chrome">
                <div className="bf-dots">
                  <span className="bf-dot bf-red" />
                  <span className="bf-dot bf-yellow" />
                  <span className="bf-dot bf-green" />
                </div>
                <div className="bf-urlbar">Click to explore</div>
              </div>
              <div className="bf-screen bf-screen--media bf-screen--scout-showcase">
                <Image
                  src={SCOUT_SHOWCASE}
                  alt="Wide illustrative preview of the Scout Fuel dashboard prototype in a browser frame."
                  width={3456}
                  height={1986}
                  sizes="(max-width: 900px) 100vw, min(var(--w), 94vw)"
                  priority={false}
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section
        className="cs-process scout-relevance a8"
        id="scout-relevance"
        aria-labelledby="scout-relevance-label"
      >
        <div className="cs-process-inner scout-relevance-inner">
          <div className="cs-process-text">
            <p className="ss-num" id="scout-relevance-label">
              Going Forward
            </p>
            <h3 className="ss-title">Next Steps</h3>
            <div className="ss-body">
              <p>
                The next step is getting this prototype in front of real users and validating it
                through usability testing and sentiment testing. Does it resonate? Are we surfacing
                the right signals for the operator? Does this interface actually drive action in the
                field? The value of a prototype like this is speed: we can put it in people&apos;s
                hands quickly, watch how they use it, see where they break it, and iterate from
                there. That is the goal of these faster design workflows.
              </p>
            </div>
          </div>
          <div className="cs-process-visual scout-relevance-visual" aria-hidden="true">
            <figure className="scout-relevance-quote-card">
              <blockquote className="scout-relevance-quote">
                It&apos;s not the big that beat the small. It&apos;s the fast that beat the slow.
              </blockquote>
              <figcaption className="scout-relevance-quote-source">
                Posted in the kitchen at my first job, iodine software
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="cs-footer a9">
        <div className="tags">
          <span className="tag">Agentic workflow</span>
          <span className="tag">Claude</span>
          <span className="tag">Cursor</span>
          <span className="tag">Cursor skills</span>
          <span className="tag">Coded prototype</span>
          <span className="tag">Shadcn</span>
          <span className="tag">Tailwind CSS</span>
          <span className="tag">Tweak CN</span>
          <span className="tag">Narrative vision</span>
          <span className="tag">Subtractive UI</span>
          <span className="tag">Gamification</span>
          <span className="tag">Notion</span>
          <span className="tag">Living documentation</span>
          <span className="tag">B2B SaaS</span>
        </div>
      </div>
    </div>
  );
}
