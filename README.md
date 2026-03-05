# Abrams Furniture

Custom Furniture Manufacturing - Built to Order

## Project Overview

This is a custom furniture e-commerce platform featuring:
- Interactive price calculator for cabinets, wardrobes, and platform beds
- Real-time pricing with customization options
- Contact form with Telegram integration
- Responsive design with modern UI components

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Client-side routing
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run sitemap` - Generate sitemap

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── calculator/  # Calculator-specific components
│   ├── home/        # Homepage components
│   ├── layout/      # Layout components (Header, Footer)
│   └── ui/          # shadcn/ui components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── assets/          # Images and static assets
```

## Features

- **Price Calculator**: Interactive calculator for furniture pricing
- **Multiple Product Types**: Base cabinets, top cabinets, wardrobes, staircase cabinets, platform beds
- **Customization Options**: Sizes, heights, drawers, add-ons
- **Contact Form**: Direct inquiry submission via Telegram
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Sitemap generation and meta tags

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## License

Private - All rights reserved
