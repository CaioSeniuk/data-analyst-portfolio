# Data Analyst Portfolio Website

A modern, high-performance portfolio website built with Next.js 14, React, and Tailwind CSS, specifically designed for data analysts and business intelligence professionals. Optimized for 1920x1080 displays with full responsive design for all devices.

## 🚀 Features

- **Responsive Design**: Optimized for 1920x1080 with full mobile responsivity
- **Dark Theme**: Professional dark theme with orange accent colors
- **Performance Optimized**: Fast loading with optimized animations
- **SEO Friendly**: Built with SEO best practices
- **Accessibility**: WCAG compliant design
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion

### Interactive Elements
- **Animated Background**: Data-themed icons with delayed appearance (2s after load)
- **Infinite Tech Carousel**: Smooth scrolling technology showcase
- **Animated Statistics**: Counter animations with scroll triggers
- **Smooth Scrolling**: Enhanced navigation experience
- **Hover Effects**: Subtle interactions throughout
- **Form Handling**: Contact form with validation

### Sections
1. **Hero Section**: Professional introduction with call-to-action buttons
2. **Tech Stack**: Infinite carousel showcasing technical expertise
3. **Statistics**: Animated counters highlighting achievements
4. **Projects**: Featured work with detailed descriptions
5. **About**: Personal background and professional highlights
6. **Contact**: Contact form and social media links
7. **Footer**: Navigation and social links

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React + React Icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── unified-background.tsx # Animated background system
│   ├── hero-section.tsx     # Hero section with introduction
│   ├── tech-stack-section.tsx # Technology carousel
│   ├── stats-section.tsx    # Animated statistics
│   ├── projects-section.tsx # Projects showcase
│   ├── about-section.tsx    # About me section
│   ├── contact-section.tsx  # Contact form
│   └── footer.tsx           # Footer component
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind configuration
└── README.md              # This file
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Accent**: Orange (#f97316)
- **Text**: White/Zinc gradients
- **Cards**: Zinc-900/800 with transparency
- **Borders**: Zinc-700/600

### Typography
- **Font**: Inter (system font fallback)
- **Headings**: Gradient text effects
- **Body**: Zinc color variations
- **Responsive**: Scales from mobile to 4K displays

### Responsive Breakpoints
- **Mobile**: < 768px (optimized density)
- **Tablet**: 768px - 1024px (medium density)
- **Desktop**: 1024px - 1920px (full density)
- **4K**: > 1920px (enhanced spacing)

## ⚙️ Customization Guide

### Background Animation Settings

\`\`\`typescript
// In components/unified-background.tsx

// DELAY BEFORE APPEARANCE (milliseconds)
const APPEARANCE_DELAY = 2000

// DENSITY MULTIPLIERS
const densityMultipliers = {
  mobile: 0.3,    // 30% density on mobile
  tablet: 0.6,    // 60% density on tablet
  desktop: 1.0,   // 100% density on desktop
}

// SIZE CONFIGURATION
const sizeConfig = {
  mobile: { iconBase: 16, iconVariation: 4 },
  tablet: { iconBase: 20, iconVariation: 6 },
  desktop: { iconBase: 24, iconVariation: 8 }
}

// ANIMATION TIMING
duration: 15 + (i % 3) * 5, // 15, 20, or 25 seconds
\`\`\`

### Personal Information Updates

1. **Hero Section** (`components/hero-section.tsx`):
   \`\`\`typescript
   // Update name and tagline
   <h1>Your Name</h1>
   <h2>Your Professional Tagline</h2>
   \`\`\`

2. **Contact Information** (`components/contact-section.tsx`):
   \`\`\`typescript
   // Update contact details
   email: "your.email@example.com"
   phone: "+1 (555) 123-4567"
   location: "Your Location"
   \`\`\`

3. **Social Links** (`components/footer.tsx`):
   \`\`\`typescript
   // Update social media URLs
   linkedin: "https://linkedin.com/in/yourprofile"
   github: "https://github.com/yourusername"
   \`\`\`

### Tech Stack Customization

\`\`\`typescript
// In components/tech-stack-section.tsx
const techStack = [
  {
    name: "Technology Name",
    icon: IconComponent,
    color: "from-color-400 to-color-500"
  },
  // Add more technologies...
]

// Carousel speed adjustment
duration: 30, // Seconds for full cycle
\`\`\`

### Projects Configuration

\`\`\`typescript
// In components/projects-section.tsx
const projects = [
  {
    title: "Project Title",
    description: "Detailed description...",
    tech: ["Tech1", "Tech2", "Tech3"],
    icon: IconComponent,
    image: "/path/to/image.jpg",
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/user/repo",
    category: "Category"
  },
  // Add more projects...
]
\`\`\`

### Statistics Updates

\`\`\`typescript
// In components/stats-section.tsx
const stats = [
  {
    icon: IconComponent,
    label: "Metric Label",
    value: 1000,
    suffix: "+",
    color: "from-color-400 to-color-500",
    description: "Metric description"
  },
  // Add more stats...
]
\`\`\`

## 🎯 Performance Optimization

### Background Animation
- **Mobile Optimization**: Reduced icon count and slower animations
- **Delayed Loading**: 2-second delay prevents initial load impact
- **GPU Acceleration**: Transform-based animations for smooth performance
- **Responsive Density**: Automatic adjustment based on screen size

### Image Optimization
- **Next.js Image**: Automatic optimization and lazy loading
- **Placeholder Images**: Consistent aspect ratios
- **WebP Support**: Modern image formats when available

### Code Splitting
- **Component-based**: Each section loads independently
- **Dynamic Imports**: Reduced initial bundle size
- **Tree Shaking**: Unused code elimination

## 📱 Mobile Optimization

### Responsive Features
- **Touch-friendly**: Larger touch targets on mobile
- **Optimized Animations**: Reduced motion for better performance
- **Readable Typography**: Proper scaling across all devices
- **Fast Loading**: Optimized for mobile networks

### Mobile-specific Adjustments
- **Reduced Icon Density**: 30% of desktop density
- **Simplified Animations**: Fewer complex effects
- **Optimized Images**: Smaller sizes for mobile viewports
- **Touch Navigation**: Smooth scrolling and touch interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with optimizations

### Manual Deployment
\`\`\`bash
# Build the project
npm run build

# Start production server
npm start
\`\`\`

### Environment Variables
\`\`\`env
# Add any required environment variables
NEXT_PUBLIC_SITE_URL=https://yoursite.com
\`\`\`

## 🔧 Development

### Getting Started
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
\`\`\`

### Development Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 🎨 Customization Examples

### Changing Color Scheme
\`\`\`css
/* In app/globals.css */
:root {
  --primary: #your-color;
  --accent: #your-accent;
}
\`\`\`

### Adding New Sections
1. Create component in `components/`
2. Add to main page in `app/page.tsx`
3. Update navigation in `components/header.tsx`

### Modifying Animations
\`\`\`typescript
// Adjust animation timing
transition={{
  duration: 0.6,        // Animation duration
  delay: 0.2,          // Delay before start
  ease: "easeInOut"    // Easing function
}}
\`\`\`

## 🐛 Troubleshooting

### Common Issues

**Slow Performance on Mobile**
- Reduce background icon density in `unified-background.tsx`
- Increase animation durations for smoother motion

**Layout Issues on Different Screens**
- Check responsive breakpoints in Tailwind classes
- Test on various screen sizes

**Animation Stuttering**
- Ensure GPU acceleration with `transform3d(0,0,0)`
- Reduce number of simultaneous animations

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support:
- Email: caio.seniuk@email.com
- LinkedIn: [Caio Seniuk](https://linkedin.com/in/caioseniuk)
- GitHub: [Issues](https://github.com/caioseniuk/portfolio/issues)

---

**Built with ❤️ for data professionals**

*Optimized for 1920x1080 displays with full responsive design for all devices*
