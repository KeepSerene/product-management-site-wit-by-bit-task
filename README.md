# ProdManagePro - A Product Management Site

A responsive React application for managing products and categories with a multi-step form process.

## Design Reference

The application is built based on the design available at [Figma Design](https://www.figma.com/design/ZqXUlzAAyGss98AAq7X6aN/Assignment-2?node-id=0-1&node-type=canvas&t=y0hzA2mGle0HhsDf-0).

## Features

### Technology Stack

- Built with React.js + Vite for optimal performance
- React Router DOM (v6+) for seamless navigation
- Lucide React for consistent, high-quality icons
- Vanilla CSS for custom, lightweight styling
- Modular component architecture following React best practices

### Core Functionality

- Dynamic category management
  - Add new categories via modal
  - Categorize products effectively
- Comprehensive product management with multi-step form:
  1. Description: Basic product details
  2. Variants: Customizable product options (e.g., size, color)
  3. Combinations: SKU management with stock tracking
  4. Price Info: Pricing and discount configuration
- JSON output generation based on user inputs
- Real-time form validation
- State management using React Context

### User Experience

- Keyboard navigable for enhanced accessibility
  - Focus management across forms
  - ARIA labels and roles
  - Screen reader friendly
- Responsive design across all devices:
  - Mobile: ≤ 480px
  - Tablet: ≤ 768px
  - Desktop: > 768px
- Intuitive navigation with breadcrumbs
- Interactive form elements with visual feedback
- Smooth transitions and animations

### Design System

- Customizable design using CSS variables
- Consistent spacing using predefined variables
- Cohesive color palette
- Responsive typography
- Modular scale for spacing
- Maintainable and scalable CSS architecture

### Technical Highlights

- Component reusability
- Form state management
- Dynamic data validation
- Responsive grid layouts
- Mobile-first approach
- Performance optimized
- Clean and maintainable code structure

## Project Structure (May change!)

```
src/
│
├── assets/
│   └── images/              # Application images
│
├── components/
│   ├── Breadcrumb/         # Navigation breadcrumbs
│   ├── CategoryCard/       # Product category display
│   ├── Modal/             # Reusable modal component
│   └── ToggleButton/      # Custom toggle switch
│
├── pages/
│   ├── Home/              # Product overview
│   ├── AddProduct/        # Product form steps
│   │   ├── components/    # Form step components
│   │   └── styles/       # Step-specific styles
│   └── OutputJson/        # JSON data display
│
└── contexts/              # State management
```

## CSS Variables

```css
:root {
  /* Colors */
  --color-primary: hsl(203, 74%, 47%);
  --color-background: hsl(0, 0%, 96%);
  /* ... other color variables */

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
}
```

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Focus management
- Keyboard navigation
- Screen reader compatibility
- Color contrast compliance
- Responsive font sizing

## Responsive Design

- Mobile-first approach
- Fluid layouts
- Adaptive components
- Touch-friendly interfaces
- Optimized images
- Flexible grids
- Responsive typography

## Future Enhancements

- Form data persistence
- Image upload functionality
- Advanced search and filtering
- Bulk actions for products
- Advanced pricing rules
- Category hierarchies
- Export/Import functionality

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

[Dhrubajyoti Bhattacharjee](https://www.linkedin.com/in/dhrubajyoti-bhattacharjee-320822318/).

## Live Site

See [here](https://product-manage-pro.vercel.app/).
