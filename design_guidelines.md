# Yokan Digital - Design Guidelines
## Revenue Architecture & AI Systems Firm

## Design Approach
**Reference-Based Approach** inspired by Linear's precision, Stripe's technical clarity, and Vercel's dark mode aesthetics. Creates a surgical, high-tech identity for an AI systems and revenue architecture firm.

**Core Principles**: Ultra-dark foundations, electric accent glows, monospace data presentation, grid-based precision, technical authenticity, industrial minimalism.

---

## Color System
**Backgrounds**: 
- Primary: #050505
- Elevated surfaces: #0A0A0A
- Cards/sections: #0F0F0F

**Accents** (choose one primary):
- Electric Green: #00FF88 (primary glow)
- Cyber Blue: #00D4FF (alternative)

**Grid/Borders**: rgba(255,255,255,0.05) for subtle lines, accent color at 20% opacity for glowing borders

**Text**:
- Primary: #FFFFFF
- Secondary: #A0A0A0
- Tertiary: #666666

---

## Typography System

**Fonts**: Inter (headings/body), JetBrains Mono (data/metrics) via Google Fonts CDN

**Hierarchy**:
- Hero Headlines: Inter Bold, text-6xl → text-4xl mobile
- Section Headers: Inter Semibold, text-4xl → text-3xl mobile
- Data Metrics: JetBrains Mono Bold, text-5xl (large numbers)
- Body: Inter Regular, text-lg (18px)
- Technical Labels: JetBrains Mono Regular, text-sm
- Captions: Inter Medium, text-sm

---

## Layout & Spacing

**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24 (p-4, gap-8, mt-12)

**Section Padding**: py-24 lg:py-32 for major sections

**Container**: max-w-7xl mx-auto px-6

**Single-Page Scroll Structure**:
1. Hero (80vh)
2. Services/Capabilities (2-column grid)
3. Technology Stack (masonry grid)
4. Case Study/Results (stats-heavy)
5. Team (3-column cards)
6. Contact/CTA

---

## Component Library

### Navigation
Sticky header (#050505 backdrop-blur-xl), logo left, anchor links (Services, Tech, Results, Team, Contact) center, CTA button right. Thin border-b with accent glow. Mobile: slide-in menu from right.

### Hero Section
Full-screen (#050505) with abstract grid pattern overlay (subtle white lines at 5% opacity). Large hero headline left-aligned (max-w-3xl): "Revenue Architecture Through AI Systems" + supporting text. Dual CTA buttons with backdrop-blur-md, glowing accent borders. Right side: Abstract data visualization element (animated grid of glowing dots/lines forming neural network pattern).

Height: min-h-[80vh]

### Services Grid
2-column asymmetric layout. Each service card: dark elevated background (#0F0F0F), glowing accent border (1px), icon (Heroicons), title, description, key metric in JetBrains Mono (e.g., "↑340% Revenue"). Hover: border glow intensifies.

### Technology Stack Section
Title "Our Technology Stack". Masonry grid (4 columns → 2 mobile) of tech logos/names on dark cards with glowing borders. Categories: AI/ML, Data Infrastructure, Analytics, Integration Tools. Each card shows logo + brief descriptor.

### Results/Case Study
Dark section with grid background. Large metrics displayed in JetBrains Mono: Revenue increase %, Cost reduction %, Time saved. Below: 2-3 case study cards with client logo, industry, challenge, solution (brief), results in bold numbers. Glowing accent dividers between cards.

### Team Cards
3-column grid. Each card: Professional headshot (grayscale with subtle accent tint), name (Inter Bold), role in JetBrains Mono, 2-sentence technical bio, LinkedIn icon. Cards have glowing borders, hover: subtle glow increase + translate-y-1.

### Contact/CTA Section
Full-width with grid pattern background. Centered content: headline, form (Name, Email, Company, Message) with glowing input borders, submit button with accent glow. Side element: Real-time "availability" indicator (green dot + "Available for consultation").

### Footer
Minimal single-row: Logo left, nav links center, social icons (LinkedIn, GitHub) + copyright right. Thin top border with accent.

---

## Visual Elements

**Grid Patterns**: Subtle grid overlays (8px or 16px squares) at 5% opacity on dark backgrounds

**Glowing Borders**: 1px borders with accent color, box-shadow with accent at 20% opacity spreading 4px

**Data Viz Elements**: Abstract geometric shapes (hexagons, circuit lines) as decorative elements between sections

---

## Animations
- Section fade-in on scroll (opacity + translate-y)
- Glowing border pulse on hover (shadow intensity)
- Subtle grid animation in hero (slow drift)
- Metric count-up animation when scrolled into view
- NO color transitions or complex effects

---

## Images

**Hero Background**: Abstract dark tech imagery—server rooms, circuit boards, or code on screens. Apply dark overlay (80% opacity) to maintain #050505 base.

**Team Photos** (3): Professional headshots, convert to grayscale with subtle electric green tint overlay. Clean backgrounds. Square crop.

**Case Study Assets** (2-3): Dashboard screenshots, analytics graphs, or system architecture diagrams. Apply dark theme treatment.

**Decorative Elements**: Abstract geometric data visualization graphics (neural networks, flowcharts) as SVG elements throughout—use sparingly for accent.

All imagery maintains dark aesthetic with accent color highlights for cohesion with ultra-dark theme.