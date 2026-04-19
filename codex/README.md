# KinKeeper

KinKeeper is a responsive friendship tracking dashboard built from a Figma-inspired layout. It helps users monitor who needs a check-in, review past interactions, and see simple relationship analytics in a clean, calm interface.

## Live Project

Deployment link will be added after Vercel publish.

## Technologies Used

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- Custom CSS for Figma-style layout polish
- Lucide React
- React Hot Toast
- Recharts

## Key Features

- Figma-style responsive layout with navbar, banner, summary cards, friend grid, friend detail page, timeline, stats page, footer, and custom 404 page
- Realistic friend data loaded from a JSON file with loading animation on the home page
- Quick Check-In actions for call, text, and video that create timeline entries instantly and show toast notifications
- Timeline filter controls and a Recharts pie chart for friendship analytics
- Deployment-ready Next.js routing so refreshing deep links does not break after deployment

## Pages

- `/` Home dashboard
- `/friends/[id]` Friend detail page
- `/timeline` Timeline page
- `/stats` Friendship analytics page
- unknown routes -> custom 404

## Local Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Friend portraits are reused from the provided Figma file export so the final UI stays close to the supplied design language.
- Timeline interactions persist in local storage for a smoother demo experience.
