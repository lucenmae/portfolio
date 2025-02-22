## Project Structure

```
├── app/
│   ├── components/
│   │   ├── backgrounds/     # Background animation components
│   │   ├── common/          # Reusable UI components
│   │   ├── layout/          # Layout components like Navigation
│   │   ├── sections/        # Main page sections
│   │   └── text-animations/ # Text animation components
│   ├── lib/
│   │   └── utils/         # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── public/                # Static assets
└── config/                # Configuration files
```

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - CSS Variables for theming
  - Class Variance Authority for component variants
- **Animations**:
  - React Spring for smooth animations
  - Framer Motion for interactive elements
- **UI Components**:
  - Radix UI for accessible components
  - Lucide Icons
- **Development Tools**:
  - ESLint for code linting
  - Prettier for code formatting

## Getting Started

1. fork the repo
2. run `pnpm install | npm install | yarn install | bun install`
3. run `pnpm dev | npm run dev | yarn dev | bun dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.