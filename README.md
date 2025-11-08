# Fawn Foundation

A modern, beautiful website template built with React and TypeScript.

## Features

- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Beautiful Design** - Modern, clean UI with smooth animations
- 📱 **Fully Responsive** - Looks great on all devices
- 🔒 **Type Safe** - Full TypeScript support
- 🚀 **Easy to Customize** - Well-organized code structure

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   ├── App.tsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite config
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

### Content

- Update text content in component files (`src/components/`)
- Modify sections in `src/App.tsx`
- Add new components in `src/components/`

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## License

MIT


