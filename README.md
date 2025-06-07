# Data Analyst Portfolio Website

A modern, interactive portfolio website built with Next.js, React, and Tailwind CSS, specifically designed for data analysts and business intelligence professionals.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Sleek dark theme with orange accents
- **Interactive UI**: Smooth animations and transitions
- **Modern Tech Stack**: Built with Next.js, React, and Tailwind CSS
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Friendly**: Built with SEO best practices in mind
- **Accessibility**: WCAG compliant for better accessibility
- **Easy to Customize**: Well-organized code structure for easy customization

### Core Functionality
- **Hover Effects**: Subtle scale and glow effects
- **Particle Animations**: Interactive background elements
- **Micro-interactions**: Enhancing user engagement
- **Contact Form**: Functional contact form with email integration

### Sections
1. **Hero Section**: Eye-catching introduction with animated text and background particles
2. **Tech Stack Carousel**: Interactive carousel showcasing technical skills
3. **Statistics Section**: Animated statistics highlighting achievements
4. **Skills Progress**: Animated progress bars for skill proficiency
5. **Projects Showcase**: Featured data analysis projects with descriptions and links
6. **About Section**: Professional background with downloadable resume options
7. **Contact Form**: Contact form and social media links

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── header.tsx           # Navigation header
│   ├── hero-section.tsx     # Hero section with typing animation
│   ├── tech-stack-section.tsx # Infinite carousel of technologies
│   ├── stats-section.tsx    # Animated statistics counters
│   ├── skills-progress.tsx  # Skill proficiency bars
│   ├── projects-section.tsx # Projects showcase
│   ├── about-section.tsx    # About me section
│   ├── contact-section.tsx  # Contact form
│   └── footer.tsx           # Footer component
└── README.md               # This file
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Accent**: Orange (#f97316)
- **Text**: White/Zinc gradients
- **Cards**: Zinc-900/800 gradients
- **Borders**: Zinc-700/600

### Typography
- **Font**: Inter (system font fallback)
- **Headings**: Gradient text effects
- **Body**: Zinc color variations

### Animations
- **Entrance**: Fade up with stagger
- **Hover**: Subtle scale and glow effects
- **Carousel**: Infinite horizontal scroll
- **Counters**: Animated number counting
- **Progress**: Animated bar filling

## 🔧 Customization Guide

### Updating Personal Information

1. **Contact Email**: Update in `components/contact-section.tsx` and `components/footer.tsx`
2. **Social Links**: Modify LinkedIn/GitHub URLs in `components/footer.tsx`
3. **Professional Background**: Edit content in `components/about-section.tsx`
4. **Hero Section**: Update name and tagline in `components/hero-section.tsx`
5. **Projects Section**: Update project details in `components/projects-section.tsx`
6. **Statistics Section**: Update statistics in `components/stats-section.tsx`

### Modifying Tech Stack

Edit the `techStack` array in `components/tech-stack-section.tsx`:

\`\`\`typescript
const techStack = [
  { 
    name: "Technology Name", 
    icon: IconComponent, 
    color: "from-color-400 to-color-500" 
  },
  // Add more technologies...
]
\`\`\`

### Updating Projects

Modify the `projects` array in `components/projects-section.tsx`:

\`\`\`typescript
const projects = [
  {
    title: "Project Title",
    description: "Project description...",
    tech: ["Tech1", "Tech2", "Tech3"],
    icon: IconComponent,
    image: "/path/to/image.jpg",
    liveUrl: "https://live-demo.com",
    githubUrl: "https://github.com/username/repo",
  },
  // Add more projects...
]
\`\`\`

### Customizing Statistics

Update the `stats` array in `components/stats-section.tsx`:

\`\`\`typescript
const stats = [
  {
    icon: IconComponent,
    label: "Metric Label",
    value: 1000,
    suffix: "+",
    color: "from-color-400 to-color-500",
  },
  // Add more stats...
]
\`\`\`

### Adjusting Skills

Modify the `skills` array in `components/skills-progress.tsx`:

\`\`\`typescript
const skills = [
  { 
    name: "Skill Name", 
    level: 95, 
    color: "from-color-400 to-color-500" 
  },
  // Add more skills...
]
\`\`\`

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in:

- `tailwind.config.ts`: Update theme colors and other configurations
- `app/globals.css`: Update global styles and custom CSS

## 🎯 Animation Configuration

### Carousel Speed
Adjust carousel speed in `components/tech-stack-section.tsx`:
\`\`\`typescript
transition={{
  duration: 25, // Increase for slower, decrease for faster
  ease: "linear",
}}
\`\`\`

### Counter Animation
Modify counter duration in `components/stats-section.tsx`:
\`\`\`typescript
<AnimatedCounter value={stat.value} duration={2000} />
\`\`\`

### Hover Effects
Customize hover animations throughout components:
\`\`\`typescript
whileHover={{ scale: 1.05, y: -5 }}
transition={{ type: "spring", stiffness: 400, damping: 25 }}
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Optimization

Update metadata in `app/layout.tsx`:
\`\`\`typescript
export const metadata: Metadata = {
  title: "Your Name - Data Analyst",
  description: "Your professional description...",
}
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build: `npm run build`
2. Deploy the `out` folder

## 🐛 Common Issues

### Carousel Performance
If carousel stutters:
- Reduce particle count in background animations
- Adjust `will-change` properties in CSS

### Animation Lag
For better performance:
- Use `transform3d(0,0,0)` for GPU acceleration
- Reduce motion on mobile devices

### Contact Form
The contact form opens the default email client. For server-side handling:
1. Add API route in `app/api/contact/route.ts`
2. Update form submission in `components/contact-section.tsx`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## Acknowledgments

- Design inspired by modern portfolio trends
- Icons from [Lucide React](https://lucide.dev/)

---

**Built with ❤️ for data professionals**
