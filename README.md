# The Bionic Group Landing Page

A modern, responsive landing page for The Bionic Group - The Nonprofit Operating System.

## Features

- Clean, professional design with blue accent colors
- Responsive layout for all devices
- Interactive CTAs (Get Started, Book Demo, Newsletter)
- Social proof and testimonials
- Ready for backend integration

## Tech Stack

- React 18
- Vite
- CSS-in-JS styling
- Git version control

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Deployment

This project is configured for deployment on Netlify:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Node Version**: 18+ (auto-detected)

## Project Structure

```
src/
├── components/
│   └── LandingPageV0.jsx    # Main landing page component
├── App.jsx                  # App entry point
├── App.css                  # Global styles
└── main.jsx                 # React entry point
```

## Customization

The landing page includes placeholder functions for:
- Form submissions (Get Started, Book Demo)
- Newsletter signup
- Analytics tracking

These can be easily connected to your backend services.

## Domain Setup

To connect your domain `www.thebionicgroup.org`:

1. Deploy to Netlify
2. Go to Site Settings > Domain Management
3. Add custom domain: `www.thebionicgroup.org`
4. Follow DNS configuration instructions

## License

© The Bionic Group 2025
