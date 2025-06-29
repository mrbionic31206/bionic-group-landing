# Logo Setup Guide for The Bionic Group

## Overview
This guide explains how to use and customize the Bionic Group logos across the website.

## Logo Files Created

The following logo files have been created and are available in the `/public` directory:

### Primary Logos
- `logo-primary.svg` - Main logo with blue gradient (default)
- `logo-secondary.svg` - Alternative logo with green-blue gradient
- `logo-white.svg` - White version for dark backgrounds
- `logo-dark.svg` - Dark version for light backgrounds

### Additional Assets
- `favicon.svg` - Website favicon with simplified brain icon
- `logo-placeholder.svg` - Fallback placeholder logo

## Logo Design

The logo features:
- **Brain Icon**: Represents AI and intelligence
- **Neural Connections**: Shows interconnected nodes and pathways
- **Gradient Colors**: Modern blue-to-purple gradient for primary version
- **Typography**: Clean, professional font for company name
- **Tagline**: "AI Solutions for Nonprofits"

## Usage in Components

### Logo Component
The `Logo` component in `/src/components/Logo.jsx` supports multiple variants:

```jsx
// Primary logo (default)
<Logo />

// White version for dark backgrounds
<Logo variant="white" />

// Dark version for light backgrounds  
<Logo variant="dark" />

// Secondary version
<Logo variant="secondary" />

// Different sizes
<Logo size="small" />    // 32px height
<Logo size="medium" />   // 48px height (default)
<Logo size="large" />    // 64px height
<Logo size="xlarge" />   // 80px height
```

### Current Usage
- **Header**: Uses `primary` variant with `medium` size
- **Footer**: Uses `white` variant with `medium` size
- **Favicon**: Uses simplified brain icon in browser tab

## File Structure
```
public/
├── logo-primary.svg      ← Main logo (blue gradient)
├── logo-secondary.svg    ← Alternative logo (green-blue)
├── logo-white.svg        ← White version for dark backgrounds
├── logo-dark.svg         ← Dark version for light backgrounds
├── favicon.svg           ← Website favicon
└── logo-placeholder.svg  ← Fallback placeholder
```

## Customization

### Colors
The logos use CSS gradients that can be modified in the SVG files:
- Primary: Blue to purple gradient (`#2563eb` to `#7c3aed`)
- Secondary: Green to blue gradient (`#059669` to `#0891b2`)
- White: Light blue to light purple (`#60a5fa` to `#a78bfa`)
- Dark: Dark blue to dark purple (`#1e40af` to `#5b21b6`)

### Text
The company name and tagline can be modified in the SVG files:
- Company: "The Bionic Group"
- Tagline: "AI Solutions for Nonprofits"

### Icon
The brain icon can be customized by modifying the SVG paths in the logo files.

## Browser Support
- All modern browsers support SVG logos
- Fallback to placeholder SVG if loading fails
- Responsive scaling across different screen sizes

## Performance
- SVG format ensures crisp display at any size
- Small file sizes for fast loading
- No additional HTTP requests for different sizes

## Deployment
The logos are automatically included in the build process and will be available at:
- `https://yourdomain.com/logo-primary.svg`
- `https://yourdomain.com/logo-white.svg`
- etc.

## Testing
To test the logos:
1. Run `npm run dev` to start development server
2. Visit `http://localhost:5173`
3. Check header and footer for logo display
4. Verify favicon appears in browser tab
5. Test different logo variants by modifying the component props

## Maintenance
- Keep SVG files optimized for web use
- Test logos across different browsers and devices
- Update favicon if logo design changes
- Ensure accessibility with proper alt text 