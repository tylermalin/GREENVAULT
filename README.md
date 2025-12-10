# Greenstone Vault - Enterprise Digital Asset Treasury Platform

A high-fidelity, single-page enterprise landing page for Greenstone Vault with an embedded interactive demo dashboard.

## Features

- **Enterprise Landing Page**: Complete marketing site with Hero, About, Product, Integration Stack, Value Proposition, FAQ, and CTA sections
- **Interactive Dashboard**: Fully functional demo dashboard with:
  - Portfolio overview with charts and KPIs
  - Asset allocation visualization
  - Recent transactions table
  - ESG/Carbon credit tracking
  - Risk & compliance monitoring
- **Responsive Design**: Mobile-first, fully responsive layout
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Recharts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Dashboard/       # Dashboard sub-components
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Product.tsx      # Product section with dashboard preview
│   ├── IntegrationStack.tsx
│   ├── ValueProposition.tsx
│   ├── FAQ.tsx
│   └── CTA.tsx
├── lib/
│   └── mockData.ts      # Mock data generators
└── types/
    └── index.ts         # TypeScript type definitions
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Charting library for React
- **Lucide React**: Icon library
- **Framer Motion**: Animation library (installed but not yet used)

## Design System

- **Colors**: Deep green, slate gray, muted gold highlights
- **Typography**: Montserrat for headings, system sans-serif for body
- **Components**: Reusable button, card, and panel styles

## License

ISC

