# Dark Mode Theme Implementation

## Overview

This project implements a fully accessible dark mode website with all the requested features:

## ✅ Features Implemented

### 🎨 CSS Variables for Theming
- Complete CSS custom properties system in `src/index.css`
- Proper color contrast ratios (WCAG AA compliant)
- Both light and dark theme definitions
- Brand color preservation across themes

### 🔄 AnimatedThemeToggler Component
- **Location**: `src/components/magicui/animated-theme-toggler.tsx`
- **Demo Component**: `src/components/AnimatedThemeTogglerDemo.tsx` (as requested)
- Smooth Framer Motion animations
- Spring-based transitions
- Icon morphing between sun and moon
- Gradient background effects

### 🔧 Theme Management
- **Location**: `src/hooks/use-theme.tsx`
- React Context for state management
- TypeScript type safety
- Efficient re-renders

### 💾 Persistent User Preferences
- LocalStorage integration
- Preference key: `hungaricum-theme`
- Supports: `light`, `dark`, `system` modes

### 🖥️ System Preference Support
- `prefers-color-scheme` media query detection
- Real-time system preference change listener
- Automatic theme switching when set to "system"

### 🎭 Smooth Transitions
- Global CSS transitions on theme changes
- 0.3s cubic-bezier easing
- No layout shifts during theme switch
- Optimized for performance

### ♿ Accessibility Compliance
- ARIA labels and `role="switch"`
- Keyboard navigation (Enter/Space keys)
- Focus ring indicators
- Screen reader support
- High contrast support
- Descriptive tooltips

## 🚀 Usage

### Basic Usage
```tsx
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

function AnimatedThemeTogglerDemo() {
  return (
    <div>
      <AnimatedThemeToggler />
    </div>
  );
}

export default AnimatedThemeTogglerDemo;
```

### Access Theme State
```tsx
import { useTheme } from '@/hooks/use-theme';

function MyComponent() {
  const { theme, setTheme, actualTheme } = useTheme();
  
  return (
    <div>
      <p>Current setting: {theme}</p>
      <p>Active theme: {actualTheme}</p>
      <button onClick={() => setTheme('dark')}>
        Switch to Dark
      </button>
    </div>
  );
}
```

## 📁 File Structure

```
src/
├── components/
│   ├── magicui/
│   │   └── animated-theme-toggler.tsx    # Main toggle component
│   ├── AnimatedThemeTogglerDemo.tsx      # Demo component (as requested)
│   └── Header.tsx                        # Updated with theme toggle
├── hooks/
│   └── use-theme.tsx                     # Theme context and provider
├── pages/
│   └── ThemeDemo.tsx                     # Comprehensive demo page
├── index.css                             # CSS variables and transitions
└── App.tsx                               # Wrapped with ThemeProvider
```

## 🎨 Color Variables

### Light Theme
```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  --primary: 0 0% 0%;
  --secondary: 0 0% 96.1%;
  --muted: 0 0% 84.1%;
  --accent: 0 0% 96.1%;
  /* ... more variables */
}
```

### Dark Theme
```css
.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --secondary: 0 0% 14.9%;
  --muted: 0 0% 14.9%;
  --accent: 0 0% 14.9%;
  /* ... more variables */
}
```

## 🧪 Testing the Implementation

1. **Visit the Demo Page**: Navigate to `/theme-demo` to see all features
2. **Header Toggle**: Every page has the theme toggle in the header
3. **Keyboard Testing**: Tab to the toggle and use Enter/Space
4. **System Preference**: Change your OS theme to test automatic switching
5. **Persistence**: Refresh the page to verify preference saving

## 🔍 Technical Details

### Performance
- CSS-based transitions for optimal performance
- Minimal JavaScript overhead
- Efficient React Context updates
- No layout shifts during theme changes

### Browser Support
- Modern browsers with CSS custom properties support
- Graceful degradation for older browsers
- Respects user's motion preferences

### Standards Compliance
- WCAG 2.1 AA color contrast ratios
- Proper semantic HTML
- ARIA best practices
- Keyboard navigation standards

## 🎯 Key Features Summary

✅ CSS variables for theming with proper color contrast
✅ AnimatedThemeToggler component exactly as requested
✅ Persistent user preference storage (localStorage)
✅ prefers-color-scheme media query respect
✅ Smooth transitions between themes
✅ Theme toggle in header working exactly like the provided code
✅ Full accessibility compliance
✅ System preference change detection
✅ TypeScript type safety
✅ Comprehensive demo page

The implementation is production-ready and follows modern web development best practices!