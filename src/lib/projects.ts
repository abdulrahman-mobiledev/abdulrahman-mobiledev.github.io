export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  year: string;
  context?: string;
  body: string;
  status?: string;
  metric?: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "gayar",
    name: "Gayar",
    year: "2022 → 2026",
    context: "nearly four years in production",
    body:
      "Kuwait's first car-parts marketplace. Built and shipped iOS and Android from launch through four years of production use. TikTok, Snapchat, Meta, and Google Analytics SDKs for full-funnel event tracking and conversion attribution; deep-linked marketing campaigns route ad creative directly into product listings.",
    status: "Live",
    metric: "5k+ users on Google Play",
    links: [
      { label: "getgayar.com", href: "https://www.getgayar.com/en" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.gayar" },
      { label: "App Store", href: "https://apps.apple.com/us/app/gayar-%D8%BA%D9%8A%D8%A7%D8%B1/id6478932610" },
    ],
  },
  {
    slug: "nile-university",
    name: "Nile University",
    year: "2023 → 2024",
    body:
      "Two shipped apps for Nile University. The official student-facing app on iOS and Android with role-based access for students, staff, and visitors. Nile Gate, the internal campus security app: visitor registration, campus entry management, and event tracking.",
    status: "Live · official + internal security app",
    metric: "5k+ users on Google Play",
    links: [
      { label: "nu.edu.eg", href: "https://www.nu.edu.eg/students" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.nileuniversity" },
      { label: "App Store", href: "https://apps.apple.com/us/app/nile-university/id1637473286" },
    ],
  },
  {
    slug: "wzgate",
    name: "WZGate",
    year: "2024 → 2026",
    body:
      "Three production apps. Niche and Shari Real Estate: property discovery with deep-link routing from ad campaigns, interactive map-based search with location filters, and an in-app AI assistant for buyer queries. PetWell: pet care with clinic discovery, appointment booking on a GraphQL backend, and digital pet health records.",
    status: "3 client apps · real estate, pet care",
    links: [{ label: "wzgate.com", href: "https://wzgate.com/en" }],
  },
  {
    slug: "valueplus",
    name: "ValuePlus",
    year: "2021 → 2023",
    body:
      "Saudi enterprise ERP. Dual apps deployed across multi-branch retail. POS with high-speed barcode scanning and real-time stock across branches. HR with geofenced attendance, digital employee profiles, and self-service approval workflows.",
    status: "Enterprise ERP · 2 internal apps (POS, HR)",
    links: [{ label: "valueerp.net", href: "https://valueerp.net/ar" }],
  },
  {
    slug: "fixa",
    name: "FIXA",
    year: "2025 → present",
    body:
      "Car services marketplace with AI diagnostics. Camera-based tire size scanning and AI issue identification take users from problem photo to booked diagnostic in one flow. Elasticsearch-backed parts search across service centers, replacing keyword matching with relevance-ranked results. Feature-first clean architecture across the platform.",
    status: "Private beta",
  },
  {
    slug: "fitra360",
    name: "Fitra360",
    year: "2026 → present",
    body:
      "AI wellness platform. Ingests DNA, bloodwork, symptoms, and lifestyle to generate personalized health and routine plans. Structured DNA and bloodwork data feed a conversational AI that produces individualized recommendations. Offline-first with MMKV and Zustand for fast cold starts and resilient sync.",
    status: "Private beta",
  },
  {
    slug: "thought-craft",
    name: "Thought Craft",
    year: "2023 → 2024",
    body:
      "White-label telemedicine. One codebase ships as a standalone consumer app or embeds inside a health-insurance partner app, with theming, auth, and routing all swappable per deployment. Zoom SDK for live doctor-patient consults: session lifecycle, in-call prescription generation, and mid-call access to medical history.",
    status: "White-label · not public",
  },
];

export type StackRow = { key: string; items: string };

export const stack: StackRow[] = [
  { key: "Platform", items: "React Native · Expo · TypeScript (strict) · Swift · Kotlin · iOS · Android" },
  { key: "Backend", items: "Supabase (auth, RLS, realtime, edge fns) · Firebase · GraphQL · REST" },
  { key: "State · storage", items: "Zustand · MMKV · TanStack Query · offline sync" },
  { key: "Device", items: "Reanimated · Lottie · VisionCamera · deep links · push · geofencing · maps · IAP · biometrics · native modules" },
  { key: "Navigation", items: "React Navigation · Expo Router · React Hook Form · Linking API · universal links" },
  { key: "Performance", items: "Hermes · React profiler · Reanimated worklets · list virtualization · image caching" },
  { key: "Localization", items: "Arabic + English · RTL layouts · i18next · expo-localization" },
  { key: "Analytics", items: "Meta · TikTok · Snapchat · Google Analytics · campaign attribution" },
  { key: "AI", items: "on-device vision · in-app assistants · OpenAI · Gemini" },
  { key: "Ops · quality", items: "Sentry · Crashlytics · EAS Build · EAS Update · Fastlane · TestFlight · Jest · Detox · GitHub Actions" },
];

export const contacts = [
  {
    key: "Email",
    label: "abdulrahman.mohammed.dev@gmail.com",
    href: "mailto:abdulrahman.mohammed.dev@gmail.com",
  },
  {
    key: "CV",
    label: "Download PDF",
    href: "/abdulrahman-mohammed-cv.pdf",
  },
  {
    key: "GitHub",
    label: "@abdulrahman-mobiledev",
    href: "https://github.com/abdulrahman-mobiledev",
  },
  {
    key: "Upwork",
    label: "Top Rated · @abdulrahmandev",
    href: "https://www.upwork.com/freelancers/abdulrahmandev",
  },
  {
    key: "LinkedIn",
    label: "@abdulrahman-mohammed-yassin",
    href: "https://www.linkedin.com/in/abdulrahman-mohammed-yassin/",
  },
];
