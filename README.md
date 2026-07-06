# AutoMarkt — Car Dealership with Live Inventory

A premium car dealership site with a fully functional inventory browser. Demonstrates multi-filter UI, dynamic routing, and detail page generation from a local data source.

## Features

- **Live inventory filters** — brand, body type, fuel, price range — all reactive with zero page reload
- **Car detail pages** — dynamic route `/[id]` for each vehicle with full spec sheet
- **Inventory catalog** — grid view with cards showing key stats (year, mileage, fuel, price)
- **Comparison badges** — highlight deals and new arrivals
- **Enquiry CTA** — per-vehicle contact flow
- **Mobile-first** — responsive grid and navigation

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router, dynamic routes
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — icons

## Project Structure

```
src/app/
├── page.tsx        # Inventory listing with filters
├── data.ts         # Car inventory data
└── [id]/
    └── page.tsx    # Vehicle detail page
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## About This Demo

This is one of 15 industry demos built by [Vladimir Rusakov](https://github.com/woffpost) — a senior frontend engineer available for freelance projects.

> Want this customised for your dealership? [Get in touch →](mailto:woffpost@gmail.com)
