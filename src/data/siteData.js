// Single source of truth for site content.
// Edit this file to update copy anywhere on the site — every
// component and page reads from here instead of hardcoding text.

export const profile = {
  name: 'Courage Afemije',
  role: 'Performance Marketing Strategist & Creative Producer',
  heroHeadline:
    "I don't just run ads. I build the creative, the funnel, and the numbers behind them.",
  // Split in two so the hero can set the second line in the display serif
  // with a gold italic accent — the emphasis carries the dual positioning.
  heroLine1: "I don't just run ads.",
  heroLine2: 'I build the creative, the funnel, and the numbers behind them.',
  heroLine2Emphasis: 'the creative, the funnel, and the numbers',
  heroSubhead:
    'Performance marketing strategist and creative producer with 6+ years turning raw footage, AI-generated visuals, and Meta/TikTok/Google budgets into campaigns that convert for DTC, beauty, food, and fintech brands.',
  tagline:
    'Driving measurable growth through data-driven performance marketing campaigns across e-commerce, B2B, SaaS, and fintech.',
  summary:
    'Performance marketing strategist and creative producer with 6+ years across agency and in-house work, managing paid media budgets, building the ad creative that fuels them, and reporting on what actually moved revenue.',
  about:
    "Hi, I'm Courage, a performance marketing strategist and creative producer. I've run paid media and creative strategy across a portfolio of DTC, beauty, apparel, and food brands, managing budgets, building the ad creative that fuels them, and reporting on what actually moved revenue. 6+ years in, across agency and in-house work, I've helped accounts hit 9x+ ROAS and scaled brands past $3.6M ARR.",
  aboutHeading: 'Both halves of the growth function, in one person.',
  email: 'afemijecourage@gmail.com',
  // Real headshot, staged from the assets folder by scripts/process-media.sh.
  photo: '/media/img/headshot.jpg',
  whatsapp: 'https://wa.me/message/ORZGGNIL7B2VP1',
  socials: {
    twitter: 'https://x.com/courage_af?s=21',
    instagram: 'https://www.instagram.com/courage_afemije/',
    linkedin: 'https://www.linkedin.com/in/courageafemije/',
    whatsapp: 'https://wa.me/message/ORZGGNIL7B2VP1',
  },
};

export const stats = [
  { value: '6+', label: 'Years of Experience' },
  { value: '9x+', label: 'Best ROAS Delivered' },
  { value: '$70k+', label: 'Monthly Ad Spend Managed' },
  { value: '9', label: 'Brands Worked With' },
];

export const experience = [
  { company: 'Pricepally', role: 'Performance Marketing Lead', initials: 'PP' },
  { company: 'Shops by Heyfood', role: 'Head of Growth', initials: 'HF' },
  { company: 'Sendme', role: 'Head of Marketing', initials: 'SM' },
  { company: 'Koyn', role: 'Community Marketing Lead', initials: 'KY' },
  { company: 'Eyelevel Learning', role: 'Head of Growth', initials: 'EL' },
  { company: 'Boardman', role: 'Head of Marketing', initials: 'B' },
  { company: 'Bezopo', role: 'Shopify Commerce Marketing Manager', initials: 'BZ' },
  { company: 'FutureSource', role: 'Head of Paid Ads', initials: 'F' },
];

export const process = [
  {
    title: 'Brief',
    desc: 'You share the brand, the audience, the goal, and the budget. Clear inputs mean faster, sharper output.',
  },
  {
    title: 'Access',
    desc: 'You send raw footage, brand assets, ad account access, or past performance data, whatever the scope calls for.',
  },
  {
    title: 'Strategize & Build',
    desc: 'I build the media plan and the creative side-by-side, testing hooks, angles, and audiences until we find what scales.',
  },
  {
    title: 'Review',
    desc: 'We align on results and creative direction. Revisions are fast and focused.',
  },
  {
    title: 'Scale',
    desc: 'Winning combinations get scaled, reported on, and iterated. You get delivery-ready files and dashboards you can actually read.',
  },
];

export const certifications = [
  'Google Ads Certification: Search, Display & Shopping',
  'Meta Blueprint Certification',
  'TikTok Marketing Certification',
  'ADMA Digital Marketing Certification (Australia)',
  'HubSpot AI for Marketers',
];

export const toolkit = [
  {
    category: 'Advertising Platforms',
    tools: ['Meta Ads Manager', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads'],
  },
  {
    category: 'Creative & AI Tools',
    tools: ['Figma', 'Canva', 'Adobe Creative Suite', 'Davinci Resolve', 'Higgsfield', 'ElevenLabs', 'ChatGPT', 'Claude'],
  },
  {
    category: 'CRM, Email & Automation',
    tools: ['n8n', 'Make (Integromat)', 'HubSpot', 'Clay', 'Shopify', 'Mailchimp', 'Klaviyo'],
  },
  {
    category: 'Analytics, Tracking & Research',
    tools: ['Google Analytics 4', 'Google Tag Manager', 'Meta Pixel & CAPI', 'SEMrush', 'Ahrefs', 'Mixpanel', 'Microsoft Clarity'],
  },
];

export const testimonials = [
  {
    quote:
      'Courage played a major role in scaling our growth engine at Heyfood. From paid acquisition to retention strategy, he brought structure, speed, and strong commercial thinking. His ability to connect marketing spend directly to revenue impact made him a valuable operator during our growth stage.',
    name: 'Taiwo Akinropo',
    title: 'CEO, HeyFood',
    initials: 'TA',
    rating: 5,
  },
  {
    quote:
      'Courage combines creativity with strong performance discipline. He understands both product and growth, and consistently turned insights into campaigns that drove measurable business results. He was instrumental in helping us accelerate adoption during critical growth phases.',
    name: 'Micheal Mekuleyi',
    title: 'CTO, Sendme',
    initials: 'MM',
    rating: 5,
  },
  {
    quote:
      'Working with Courage was refreshing because he thinks beyond campaign execution. He understands unit economics, customer behaviour and how to scale channels responsibly. His contribution helped improve our marketing efficiency and growth execution.',
    name: 'Adesola Osota',
    title: 'Head of Growth, Pricepally',
    initials: 'AO',
    rating: 4,
  },
  {
    quote:
      'Courage brought clarity and execution excellence to our customer acquisition strategy. He helped us better position our offers, improve campaign messaging and generate stronger lead quality across our paid channels.',
    name: 'Tolu Olaniran',
    title: 'Founder, PFM Academy',
    initials: 'TO',
    rating: 4,
  },
];


// Hero reel — the looping muted video row from the brief. Real cuts from
// the assets folder, processed to public/media/video/ by scripts/process-media.sh.
// Portrait 9:16 clips, scrolled horizontally like the reference site.
export const heroReel = [
  {
    src: '/media/video/hero-conviction.mp4',
    label: 'Faith-Based Lifestyle · Eyewear Ad',
  },
  {
    src: '/media/video/hero-grey-leopard.mp4',
    label: 'Faith-Based Lifestyle · 3D Motion Ad',
  },
  {
    src: '/media/video/hero-beauty-hook.mp4',
    label: 'Beauty Brand · Hook-First UGC',
  },
  {
    src: '/media/video/hero-faith-cap.mp4',
    label: 'Accessories Brand · Product Story',
  },
  {
    src: '/media/video/hero-gods-timepiece.mp4',
    label: 'Accessories Brand · AI Product Visual',
  },
  {
    src: '/media/video/hero-voyee.mp4',
    label: 'Beauty Brand · Product Demo',
  },
];

// Case studies — each needs a unique `slug` used in the URL
// (/case-studies/:slug). `kpis` drive the hero stat pair on the
// detail page; `achievements` is the bullet list; `results` are
// the two headline numbers repeated in the results band.
export const caseStudies = [
  {
    slug: 'pricepally',
    company: 'Pricepally',
    role: 'Performance Marketing Lead',
    industry: 'E-commerce & Group Buying Platform',
    color: '#8C6A33',
    logo: '/media/img/logo-pricepally.png',
    logoBg: '#FFFFFF',
    summary:
      'Built a structured paid acquisition engine that cut CAC from ₦3,500 to ₦1,200 and grew monthly buyers to 3,200+.',
    kpis: [
      { value: '₦1,200', label: 'Customer acquisition cost (from ₦3,500)' },
      { value: '3,200+', label: 'Monthly active buyers' },
    ],
    gallery: [
      { kind: 'image', src: '/media/img/case-pricepally-1.jpg', ratio: 'square', label: 'Price Comparison Ad' },
      { kind: 'image', src: '/media/img/case-pricepally-2.jpg', ratio: 'square', label: 'Market Price Watch' },
      { kind: 'image', src: '/media/img/case-pricepally-3.jpg', ratio: 'square', label: 'First Order Promo' },
      { kind: 'image', src: '/media/img/case-pricepally-4.jpg', ratio: 'portrait', label: 'Stew Bundle Creative' },
    ],
  },
  {
    slug: 'heyfood',
    company: 'Shops by Heyfood',
    role: 'Head of Growth',
    industry: 'Food Delivery & Shops Platform',
    color: '#9C5C33',
    logo: '/media/img/logo-heyfood.png',
    logoBg: '#0AA51E',
    summary:
      'Scaled monthly orders from 1,100 to 6,800+ and improved 30-day retention from 12% to 34% through acquisition and lifecycle strategy.',
    kpis: [
      { value: '6,800+', label: 'Monthly orders (from 1,100)' },
      { value: '34%', label: '30-day retention (from 12%)' },
    ],
    gallery: [
      { kind: 'video', src: '/media/video/case-heyfood-ad1.mp4', ratio: 'landscape', label: 'Brand Video Ad' },
      { kind: 'video', src: '/media/video/case-heyfood-ad2.mp4', ratio: 'portrait', label: 'App Install Ad' },
    ],
  },
  {
    slug: 'sendme',
    company: 'Sendme',
    role: 'Head of Marketing',
    industry: 'Fintech & Remittance',
    color: '#4F6B6A',
    logo: '/media/img/logo-sendme.png',
    logoBg: '#D81E1E',
    summary:
      'Reduced cost per install from $18 to $6.40 and built a content engine driving 4,000+ monthly organic visits in 5 months.',
    kpis: [
      { value: '$6.40', label: 'Cost per install (from $18)' },
      { value: '4,000+', label: 'Monthly organic visits' },
    ],
    gallery: [
      { kind: 'video', src: '/media/video/case-sendme-ad1.mp4', ratio: 'landscape', label: 'Cook & Chill Campaign Ad' },
      { kind: 'image', src: '/media/img/case-sendme-static-1.jpg', ratio: 'square', label: 'Chop Life Static' },
      { kind: 'image', src: '/media/img/case-sendme-static-2.jpg', ratio: 'square', label: 'Best Meat Series' },
      { kind: 'image', src: '/media/img/case-sendme-static-3.jpg', ratio: 'square', label: 'Delicious Series' },
      { kind: 'image', src: '/media/img/case-sendme-static-4.jpg', ratio: 'square', label: 'You Order We Deliver' },
    ],
  },
  {
    slug: 'bezopo',
    company: 'Bezopo',
    role: 'Shopify Commerce Marketing Manager',
    industry: 'E-commerce & Retail',
    color: '#7A3B44',
    summary:
      'Achieved 5.2x peak ROAS on Google Shopping and lifted conversion rate from 1.4% to 3.1% through funnel and CRO work.',
    kpis: [
      { value: '5.2x', label: 'Peak ROAS on Google Shopping' },
      { value: '3.1%', label: 'Conversion rate (from 1.4%)' },
    ],
  },
  {
    slug: '7automation',
    company: '7Automation',
    role: 'Head of Paid Ads',
    industry: 'B2B SaaS & Automation',
    color: '#545A72',
    summary:
      'Cut cost per qualified lead from £180 to £64 and generated 340+ demo-qualified leads in the first campaign quarter.',
    kpis: [
      { value: '£64', label: 'Cost per qualified lead (from £180)' },
      { value: '340+', label: 'Demo-qualified leads in Q1' },
    ],
    overview:
      "7Automation is a B2B automation platform. Through my work at FutureSource, I led the paid acquisition strategy for this product, focusing on LinkedIn and Google Search to generate qualified demo requests from operations and IT decision-makers.",
    achievements: [
      'Built LinkedIn Ads campaigns from scratch targeting operations, finance, and IT personas',
      'Developed lead magnet content (whitepapers, webinar promotions) as top-of-funnel acquisition',
      'Managed Google Search campaigns focused on high-intent "automation software" and "workflow tools" terms',
      'Implemented lead scoring in HubSpot to prioritise sales follow-up',
      'Reduced cost per qualified lead from £180 to £64 in 3 months',
      'Generated 340+ demo-qualified leads in the first campaign quarter',
    ],
  },
  {
    slug: 'eyelevel',
    company: 'Eyelevel',
    role: 'Head of Growth',
    industry: 'EdTech & Online Learning',
    color: '#3F6152',
    summary:
      'Scaled enrolments from 200 to 1,100+ students and reduced cost per enrolment from $45 to $17 in 6 months.',
    kpis: [
      { value: '1,100+', label: 'Student enrolments (from 200)' },
      { value: '$17', label: 'Cost per enrolment (from $45)' },
    ],
  },
  {
    slug: 'koyn',
    company: 'Koyn',
    role: 'Community Marketing Lead',
    industry: 'Web3 & Crypto',
    color: '#63506B',
    logo: '/media/img/logo-koyn.png',
    logoBg: '#2E1A47',
    summary:
      'Grew Telegram community from 800 to 14,000+ members and coordinated a launch that drove 8,000+ app downloads on day one.',
    kpis: [
      { value: '14,000+', label: 'Telegram community members (from 800)' },
      { value: '8,000+', label: 'App downloads on launch day' },
    ],
    gallery: [
      { kind: 'video', src: '/media/video/case-koyn-ad1.mp4', ratio: 'portrait', label: '24/7 Support UGC Ad' },
      { kind: 'video', src: '/media/video/case-koyn-ad2.mp4', ratio: 'portrait', label: 'App Demo Ad' },
      { kind: 'video', src: '/media/video/case-koyn-ad3.mp4', ratio: 'portrait', label: 'QR Share How-To Ad' },
      { kind: 'image', src: '/media/img/case-koyn-static-1.jpg', ratio: 'portrait', label: 'Refer & Earn Static' },
      { kind: 'image', src: '/media/img/case-koyn-static-2.jpg', ratio: 'portrait', label: 'Cash Out Static' },
      { kind: 'image', src: '/media/img/case-koyn-static-3.jpg', ratio: 'portrait', label: 'Swap & Sell Story' },
    ],
  },
  {
    slug: 'boardman',
    company: 'Boardman',
    role: 'Head of Marketing',
    industry: 'B2B SaaS & Project Management',
    color: '#5C5138',
    summary:
      'Built an inbound engine from zero: 5,200 monthly visitors, 120+ MQLs per month, and a 40% improvement in sales close rate.',
    kpis: [
      { value: '5,200', label: 'Monthly organic visitors (from 400)' },
      { value: '120+', label: 'MQLs per month from LinkedIn Ads' },
    ],
    overview:
      'Boardman is a B2B project management and team collaboration SaaS. As Head of Marketing, I owned the entire marketing function across brand, demand generation, content, and product marketing, helping the business move from a founder-led sales motion to scalable inbound growth.',
    achievements: [
      'Built the inbound marketing engine: SEO, content, and LinkedIn thought leadership',
      'Grew organic traffic from 400 to 5,200 monthly visitors in 7 months',
      'Launched LinkedIn Ads campaigns targeting project managers and team leads, generating 120+ MQLs per month',
      'Created a case study content programme that contributed to a 40% increase in sales close rate',
      'Established product marketing assets: one-pagers, comparison pages, and objection-handling guides',
      'Built HubSpot CRM workflows aligning marketing MQLs with sales follow-up SLAs',
    ],
  },
];

// Real ad cuts from the assets folder, anonymized to category labels per the
// PRD — do not add real brand names to live site copy. `ratio` drives the
// card aspect ratio so portrait and landscape clips both sit cleanly.
export const creativeWork = [
  {
    client: 'Faith-Based Lifestyle Brand',
    format: 'UGC Product Ad',
    category: 'Accessories',
    desc: 'Hands-first creator demo of the one-hand buckle, shot to prove the product in the first three seconds.',
    ratio: 'portrait',
    featured: true,
    src: '/media/video/work-buckle-belt.mp4',
  },
  {
    client: 'Beauty Brand',
    format: 'Hook-First UGC Ad',
    category: 'Skincare Tech',
    desc: 'Leads with the after, rewinds to the routine. A retention-first cut built for cold traffic.',
    ratio: 'portrait',
    featured: true,
    src: '/media/video/hero-beauty-hook.mp4',
  },
  {
    client: 'Streetwear / Apparel Brand',
    format: 'Hook-First Meta Ad',
    category: 'Apparel',
    desc: 'High-energy movement puts the fit in context. Captioned, sound-off friendly, built for the feed.',
    ratio: 'portrait',
    featured: true,
    src: '/media/video/work-street-dance.mp4',
  },
  {
    client: 'Beauty Brand',
    format: 'Brand Video Ad',
    category: 'Skincare Tech',
    desc: 'Cinematic brand film introducing the device, its benefits, and the ritual around it.',
    ratio: 'landscape',
    src: '/media/video/work-luminx-ad.mp4',
  },
  {
    client: 'Faith-Based Lifestyle Brand',
    format: 'Cinematic Eyewear Ad',
    category: 'Eyewear',
    desc: 'Golden-hour cinematography that sells the shades as an article of faith. Slow, deliberate, premium.',
    ratio: 'portrait',
    featured: true,
    src: '/media/video/hero-conviction.mp4',
  },
  {
    client: 'Sports Apparel Brand',
    format: 'Static-to-Motion Ad',
    category: 'Streetwear',
    desc: 'Stills brought to life with AI-driven motion and beat-synced cuts, turning a photo set into a video ad.',
    ratio: 'portrait',
    featured: true,
    src: '/media/video/work-statics-motion.mp4',
  },
  {
    client: 'Beauty Brand',
    format: 'UGC Review Ad',
    category: 'Skincare',
    desc: 'Creator review that walks viewers through setup, session, and results, building trust before the ask.',
    ratio: 'portrait',
    src: '/media/video/work-steamer-ugc.mp4',
  },
  {
    client: 'Faith-Based Lifestyle Brand',
    format: '3D Product Motion Ad',
    category: 'Accessories',
    desc: 'Full 3D motion turn of the leopard belt, texture as the hero. Product storytelling without a creator.',
    ratio: 'portrait',
    src: '/media/video/hero-grey-leopard.mp4',
  },
  {
    client: 'Streetwear / Apparel Brand',
    format: 'Get Ready With Me Ad',
    category: 'Apparel',
    desc: 'A get-ready-with-me story that wears the fit, making the apparel feel everyday and attainable.',
    ratio: 'portrait',
    src: '/media/video/work-grwm.mp4',
  },
  {
    client: 'Beauty Brand',
    format: 'Product Showcase Edit',
    category: 'Skincare Tech',
    desc: 'Clean showcase edit of the LED mask, benefit callouts layered over beauty-grade lighting.',
    ratio: 'landscape',
    src: '/media/video/work-led-mask.mp4',
  },
  {
    client: 'Accessories Brand',
    format: 'AI-Generated Product Visual',
    category: 'Watches',
    desc: 'AI-generated luxury watch scene, framing the gold timepiece as an heirloom rather than an accessory.',
    ratio: 'portrait',
    src: '/media/video/hero-gods-timepiece.mp4',
  },
  {
    client: 'Beauty Brand',
    format: 'Studio Product Edit',
    category: 'Skincare',
    desc: 'Studio-lit edit isolating the form and mist of the steamer, pure product desire in a fifteen-second loop.',
    ratio: 'landscape',
    src: '/media/video/work-steamer-studio.mp4',
  },
];

// Static ad creative gallery — feed-ready stills in 9:16 / 4:5 / 1:1.
export const staticAds = [
  { src: '/media/img/static-combo.jpg', ratio: '9:16', label: 'Faith-Based Lifestyle Brand · Combo Deal' },
  { src: '/media/img/static-laborday.jpg', ratio: '9:16', label: 'Faith-Based Lifestyle Brand · Labor Day Sale' },
  { src: '/media/img/static-ai-cap.jpg', ratio: '9:16', label: 'Agency Creative · AI-Made Static' },
  { src: '/media/img/static-complexcon.jpg', ratio: '4:5', label: 'Faith-Based Lifestyle Brand · Event Teaser' },
  { src: '/media/img/static-enduring.jpg', ratio: '4:5', label: 'Faith-Based Lifestyle Brand · Product Story' },
  { src: '/media/img/static-revenuelab.jpg', ratio: '4:5', label: 'Agency Creative · Guarantee Ad' },
  { src: '/media/img/static-summersale.jpg', ratio: '1:1', label: 'Faith-Based Lifestyle Brand · Summer Sale' },
  { src: '/media/img/product-belt.jpg', ratio: '4:5', label: 'Faith-Based Lifestyle Brand · Belt Program' },
  { src: '/media/img/product-cap.jpg', ratio: '4:5', label: 'Faith-Based Lifestyle Brand · Cap Program' },
  { src: '/media/img/product-sunglasses.jpg', ratio: '4:5', label: 'Faith-Based Lifestyle Brand · Eyewear Program' },
  { src: '/media/img/product-navigator.jpg', ratio: '4:5', label: 'Faith-Based Lifestyle Brand · Navigator Program' },
];

// Paid media results gallery — only cards with a confirmed number
// from the brief are included. Two more (VogueNow creative lift,
// and a standout CPL/CPP card for Aggressive Soccer or Mexican Town
// Flea) were left as "[fill in metric]" in the brief, so they're not
// built yet — add them to this array once Courage confirms the numbers.
export const paidResults = [
  {
    client: 'Food Delivery Brand',
    category: 'Food Delivery',
    headline: '9.4x',
    label: 'Blended ROAS · Meta + Google',
  },
  {
    client: 'Apparel / Streetwear Brand',
    category: 'Apparel / Streetwear',
    headline: '9x ROAS',
    label: '$100k+ monthly ad revenue on a single account',
  },
  {
    client: 'Agency-Level Aggregate',
    category: 'Agency Aggregate',
    headline: '$70k+/mo',
    label: 'Managed spend across 7 accounts',
  },
];

export const services = [
  {
    number: '01',
    title: 'Paid Media & Creative Strategy',
    sub: '(Meta, TikTok, Google)',
    desc: 'End-to-end campaign strategy covering audience research, budget allocation, creative testing frameworks, and reporting that ties spend to revenue, not just clicks.',
    tags: ['Campaign Strategy', 'Budget Optimization', 'Performance Reporting'],
    img: '/media/img/static-revenuelab.jpg',
  },
  {
    number: '02',
    title: 'UGC-Style Video Ads',
    desc: 'Raw footage turned into scroll-stopping, hook-first ad creative. Captioned, sound-designed, and built to feel native to the feed, not like an ad.',
    tags: ['Hook Testing', 'Captions & Subtitles', 'Sound Design'],
    img: '/media/img/service-ugc-belt.jpg',
  },
  {
    number: '03',
    title: 'AI Video & Image Generation',
    desc: 'Batch creative production with consistent AI characters, scenes, and copy variations, built for signal diversity testing on Meta using ElevenLabs, Higgsfield, and Kling.',
    tags: ['AI Characters', 'Variation Batches', 'Voice & Motion'],
    img: '/media/img/static-ai-cap.jpg',
  },
  {
    number: '04',
    title: 'Static Ad Creative',
    desc: 'Scroll-stopping statics designed for Meta feed, Stories, and Demand Gen, feed-ready in every aspect ratio.',
    tags: ['Feed-Ready', '9:16', '4:5', '1:1'],
    img: '/media/img/static-combo.jpg',
  },
];

export const whyMe = {
  headline: '9 Brands Worked With, Across Beauty, Food, Apparel, Faith & Sports',
  badges: [
    {
      title: 'Fast Turnaround',
      desc: 'Most creative projects delivered within 3 to 5 business days',
    },
    {
      title: 'Cross-Category Range',
      desc: 'Beauty, streetwear, food, sports, and lifestyle brands',
    },
    {
      title: 'Dual Skillset',
      desc: 'Strategy and creative production from the same person, so nothing gets lost in translation between the media buyer and the editor',
    },
  ],
};

export const contactOptions = [
  'Full-time Paid Media Role',
  'Freelance Paid Media',
  'UGC/AI Video Production',
  'Static Ad Creative',
  'Other',
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);

export const getAdjacentCaseStudies = (slug) => {
  const index = caseStudies.findIndex((c) => c.slug === slug);
  return {
    prev: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  };
};
