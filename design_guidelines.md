# Yokan Digital - Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by modern SaaS agencies (Vercel, Linear, Stripe) combined with vibrant gradient aesthetics from platforms like Dribbble/Behance agency portfolios. This creates a professional yet energetic identity for a digital marketing company.

**Core Principles**: Bold gradients as accent elements, clean typography hierarchy, asymmetric layouts for visual interest, generous whitespace to let vibrant colors breathe.

---

## Typography System

**Primary Font**: Inter (via Google Fonts CDN)
**Accent Font**: Manrope for headings (via Google Fonts)

**Hierarchy**:
- Hero Headlines: Manrope Bold, text-6xl (60px) → text-4xl mobile
- Section Headers: Manrope Bold, text-4xl (36px) → text-3xl mobile  
- Subsection Titles: Inter Semibold, text-2xl (24px)
- Body Large: Inter Regular, text-lg (18px)
- Body Standard: Inter Regular, text-base (16px)
- Captions/Labels: Inter Medium, text-sm (14px)

**Bilingual Handling**: Language toggle button in header. Use identical font sizes for both languages, with slightly increased line-height (leading-relaxed) for Bahasa Melayu to accommodate diacritics.

---

## Layout & Spacing System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, mt-12)

**Section Padding**: py-20 lg:py-32 for major sections, py-12 lg:py-20 for subsections

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Text content: max-w-3xl for optimal readability

**Grid Systems**:
- Team cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Service features: grid-cols-1 lg:grid-cols-2 gap-12
- Case studies/portfolio: masonry grid with varying heights

---

## Component Library

### Navigation Header
Sticky header with backdrop-blur-xl, logo left, nav center, language toggle + CTA button right. Mobile: hamburger menu with full-screen overlay featuring gradient background.

### Hero Section (Homepage)
Large hero image showing dynamic marketing/digital work (illustrations of social media, analytics, creative design). Overlay gradient (purple to pink, 40% opacity). Content positioned left-aligned with max-w-2xl. Hero headline + subtext + dual CTA buttons (primary: "Get Started", secondary: "View Our Work"). Buttons have backdrop-blur-md with semi-transparent backgrounds.

Height: min-h-[600px] lg:min-h-[700px]

### Team Cards (Homepage Section & Team Page)

**Homepage Team Section** (3 cards horizontal):
- Section title "Meet Our Team" / "Kenali Pasukan Kami"
- 3-column grid showcasing CEO, Sales Master, Admin/Social Media roles
- Each card: Professional headshot photo (aspect-ratio-square, rounded-2xl), gradient border effect, name, role title (bilingual), brief 2-sentence bio, social media links (LinkedIn icon)
- Card hover: subtle lift (translate-y-2) with shadow increase
- Background: Subtle gradient sphere blur decoration behind cards

**Dedicated Team Page**:
Hero banner with team photo showing all members collaborating. Below: expanded 3-column grid with larger cards including:
- Larger photos (aspect-ratio-3/4, rounded-xl)
- Name + dual-language role
- Extended bio paragraph (4-5 sentences)
- Skills tags (e.g., "Digital Strategy", "SEO", "Content Creation") as pill badges with gradient backgrounds
- Contact button per member
- Additional section: "Our Values" with 4-column grid of value cards (Innovation, Transparency, Results, Partnership)

### Service Cards
Asymmetric grid with alternating layouts. Each service features icon (from Heroicons), title, description, "Learn More" link. Purple-to-pink gradient accent on hover.

### Case Study/Portfolio Grid
Masonry-style grid (3 columns desktop, 2 tablet, 1 mobile). Each card: project thumbnail, client logo, title, metrics (e.g., "+150% engagement"), gradient overlay on hover revealing full description + CTA.

### CTA Sections
Full-width gradient background sections with centered content. Include headline, supporting text, primary CTA, trust indicator (e.g., "Trusted by 50+ Malaysian brands").

### Footer
4-column layout (Services, Company, Resources, Contact). Newsletter signup form with gradient button. Social media icons (Facebook, Instagram, LinkedIn, TikTok). Language switcher. Bottom bar with copyright + privacy links.

---

## Animations (Minimal & Strategic)

- Scroll-triggered fade-in for section entries (stagger delay for grid items)
- Gradient shift animation on hero background (subtle, 10s duration)
- Button hover: slight scale (1.02) + shadow increase
- Card hover: translate-y-2 with smooth transition
- No complex parallax or scroll-jacking effects

---

## Images Section

**Homepage**:
1. **Hero Image**: Dynamic composition showing digital marketing elements—laptop with analytics dashboard, mobile phones displaying social media, colorful graphs, creative tools. Modern, energetic feel. Full-width background image.

2. **Team Section Background**: Abstract gradient spheres (blur-3xl) positioned behind team cards for depth—one purple sphere top-left, one pink sphere bottom-right.

3. **Team Member Photos** (3): Professional headshots with clean backgrounds, similar lighting/composition for consistency. Square crop (1:1 ratio).

**Team Page**:
1. **Team Hero Banner**: Group photo of all 3 members in office environment, collaborating around laptop/whiteboard. Landscape orientation (16:9), min-height 400px.

2. **Individual Team Photos** (3): Professional portraits, slightly more editorial style than homepage (3:4 ratio). Show personality while maintaining professionalism—could be in creative workspace.

3. **Office/Culture Photos** (2-3): Candid shots of workspace, team collaboration, or creative process. Used as decorative elements between sections.

**General**:
- Portfolio/Case Study thumbnails: 10-12 project screenshots showing diverse work (social media campaigns, website designs, branding work)
- Client logos: 6-8 recognizable Malaysian brands (grayscale, hover reveals color)
- Service illustrations: 4-5 custom illustrations representing services (SEO, Social Media, Web Design, Branding, Analytics)

All images should align with the vibrant purple-pink gradient aesthetic through subtle color grading or overlay treatments.