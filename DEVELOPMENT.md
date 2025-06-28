# The Bionic Group - Development Guide

## Project Structure

```
bionic-group-landing/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── LandingPageV0.jsx
│   ├── pages/              # Page components
│   │   ├── About.jsx
│   │   ├── BookDemo.jsx
│   │   ├── Contact.jsx
│   │   ├── Solutions.jsx
│   │   └── ThankYou.jsx
│   ├── assets/             # Images, icons, etc.
│   ├── main.jsx           # App entry point with routing
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```

## Available Pages

- **Home** (`/`) - Main landing page
- **About** (`/about`) - Company information and mission
- **Solutions** (`/solutions`) - Detailed product information
- **Contact** (`/contact`) - Contact form and information
- **Book Demo** (`/book-demo`) - Calendar booking page
- **Thank You** (`/thank-you`) - Post-booking confirmation

## Development Workflow

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment
```bash
git add .
git commit -m "Description of changes"
git push origin main
```
Changes automatically deploy to Netlify.

## Styling Guidelines

- **Colors**: Blue theme (#1e3a8a, #2563eb, #38bdf8)
- **Font**: Inter, Segoe UI, Arial, sans-serif
- **Layout**: Responsive design with mobile-first approach
- **Components**: Inline styles for simplicity

## Adding New Pages

1. Create new component in `src/pages/`
2. Add route in `src/main.jsx`
3. Update navigation in `LandingPageV0.jsx`
4. Test locally and deploy

## Key Features

- **Responsive Design**: Works on all device sizes
- **React Router**: Client-side navigation
- **Google Calendar Integration**: Embedded booking system
- **Contact Forms**: Ready for backend integration
- **SEO Optimized**: Meta tags and semantic HTML

## Future Enhancements

- [ ] Add blog/news section
- [ ] Implement user authentication
- [ ] Add case studies page
- [ ] Create pricing page
- [ ] Add testimonials carousel
- [ ] Implement newsletter signup backend
- [ ] Add analytics tracking
- [ ] Create admin dashboard

## Contact Information

- **Email**: hello@thebionicgroup.org
- **Demo Booking**: /book-demo
- **GitHub**: https://github.com/mrbionic31206/bionic-group-landing
- **Live Site**: https://thebionicgroup.org 