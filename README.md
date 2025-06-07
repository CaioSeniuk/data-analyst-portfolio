# Data Analyst Portfolio Website

A modern, interactive portfolio website built with Next.js, React, and Framer Motion, specifically designed for data analysts and business intelligence professionals.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Professional black theme with orange accent colors
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Elements**: Hover effects, particle animations, and micro-interactions
- **Contact Form**: Functional contact form with email integration

### Sections
1. **Hero Section**: Animated typing effect with compelling headline
2. **Tech Stack Carousel**: Infinite scrolling carousel of technologies
3. **Statistics Section**: Animated counters showing impact metrics
4. **Skills Progress**: Animated progress bars for skill proficiency
5. **Projects Showcase**: Featured projects with live demo links
6. **About Section**: Professional background and competencies
7. **Contact Form**: Interactive form with validation and animations

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

---

**Built with ❤️ for data professionals**
