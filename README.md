# Portfolio Website - React + Vite

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features theme toggle, multi-language support (English/Thai), smooth scroll animations, and a beautiful design.

## Features

- ✨ Modern UI with smooth animations and scroll reveals
- 🌙 Dark/Light theme toggle
- 🌐 Bilingual support (English/Thai)
- 📱 Fully responsive design
- ⚡ Built with Vite for fast development and optimized builds
- 🎨 Clean, component-based architecture
- 🔧 Easy customization

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── context/            # React Context for state management
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── hooks/              # Custom React hooks
│   └── useScrollReveal.ts
├── App.tsx
├── main.tsx
└── index.css           # Global styles
```

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Customization

### Update Personal Information

Edit the content in each component file (`src/components/`) to add your own:
- Name and title in `Hero.tsx`
- Bio and info cards in `About.tsx`
- Skills and tech stack in `Skills.tsx`
- Projects in `Projects.tsx`
- Work experience in `Experience.tsx`
- Certificates in `Certificates.tsx`
- Contact links in `Contact.tsx` and `Footer.tsx`

### Modify Colors

Update the CSS variables in `src/index.css` under `:root` and `[data-theme="dark"]`:

```css
:root {
  --primary: #7C9DFF;
  --secondary: #A8DADC;
  --accent: #FFD6A5;
  /* ... more colors */
}
```

### Add Translations

The language switching is handled by the `LanguageContext`. To add more translations, update the label objects in each component:

```tsx
const label = { en: 'English text', th: 'ข้อความไทย' }
```

## Dependencies

- **react** - UI library
- **react-dom** - React DOM renderer
- **typescript** - Type safety
- **vite** - Build tool and dev server
- **@vitejs/plugin-react** - React plugin for Vite

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Supports dark mode preference via `prefers-color-scheme` media query

## Performance

- Intersection Observer for efficient scroll animations
- CSS-based animations for smooth 60fps performance
- Optimized asset loading with Vite

## License

Feel free to use this template as a base for your own portfolio!

## Notes

- Replace placeholder links (GitHub, LinkedIn, email) with your own
- Update the resume PDF link in `Contact.tsx` and `Hero.tsx`
- Customize the color scheme in `src/index.css`
- Add your own project details and descriptions
