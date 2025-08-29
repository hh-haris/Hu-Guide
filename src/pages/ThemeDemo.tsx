import { motion } from 'framer-motion';
import Header from '../../Header';
import { AnimatedThemeToggler } from '@/components/ThemeToggle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/hooks/use-theme';

const ThemeDemo = () => {
  const { theme, actualTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Dark Mode Demo
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience seamless theme switching with proper accessibility, smooth transitions, and system preference support.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Badge variant="secondary">
                  Current Theme: {actualTheme}
                </Badge>
              </div>
            </motion.div>

            {/* Theme Toggle Demo */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    Animated Theme Toggle
                    <AnimatedThemeToggler />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Simple sun/moon toggle that smoothly transitions between light and dark themes.
                    Shows sun icon in light mode, moon icon in dark mode.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>✅ Simple light/dark toggle (no system option)</li>
                    <li>✅ Sun icon for light mode</li>
                    <li>✅ Moon icon for dark mode</li>
                    <li>✅ Smooth Framer Motion animations</li>
                    <li>✅ Standard button styling with hover states</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Color Showcase */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Color System</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="w-full h-16 bg-background border rounded-lg"></div>
                      <p className="text-xs text-center">Background</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-16 bg-foreground rounded-lg"></div>
                      <p className="text-xs text-center">Foreground</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-16 bg-muted rounded-lg"></div>
                      <p className="text-xs text-center">Muted</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-16 bg-accent rounded-lg"></div>
                      <p className="text-xs text-center">Accent</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-16 bg-primary rounded-lg"></div>
                      <p className="text-xs text-center">Primary</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-16 bg-secondary rounded-lg"></div>
                      <p className="text-xs text-center">Secondary</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-16 bg-brand-orange rounded-lg"></div>
                      <p className="text-xs text-center">Brand Orange</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-16 bg-brand-blue rounded-lg"></div>
                      <p className="text-xs text-center">Brand Blue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Component Examples */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Component Examples</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Buttons</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="default">Default Button</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Badges</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge>Default Badge</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Text Hierarchy</h3>
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold text-foreground">Heading 1</h1>
                      <h2 className="text-2xl font-semibold text-foreground">Heading 2</h2>
                      <h3 className="text-xl font-medium text-foreground">Heading 3</h3>
                      <p className="text-foreground">Regular paragraph text with proper contrast</p>
                      <p className="text-muted-foreground">Muted text for secondary information</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features List */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Theme System Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-brand-orange">🎨 Design Features</h3>
                      <ul className="space-y-2 text-sm">
                        <li>✅ CSS custom properties for theming</li>
                        <li>✅ WCAG AA compliant color contrast</li>
                        <li>✅ Smooth transitions between themes</li>
                        <li>✅ System color-scheme property</li>
                        <li>✅ Brand color preservation</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-brand-blue">⚙️ Technical Features</h3>
                      <ul className="space-y-2 text-sm">
                        <li>✅ LocalStorage persistence</li>
                        <li>✅ prefers-color-scheme detection</li>
                        <li>✅ System preference change listener</li>
                        <li>✅ React Context state management</li>
                        <li>✅ TypeScript type safety</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-green-600">♿ Accessibility Features</h3>
                      <ul className="space-y-2 text-sm">
                        <li>✅ Proper ARIA labels</li>
                        <li>✅ Keyboard navigation</li>
                        <li>✅ Focus indicators</li>
                        <li>✅ Screen reader support</li>
                        <li>✅ High contrast support</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-purple-600">🚀 Performance Features</h3>
                      <ul className="space-y-2 text-sm">
                        <li>✅ Efficient re-renders</li>
                        <li>✅ CSS-based transitions</li>
                        <li>✅ Minimal JavaScript overhead</li>
                        <li>✅ Optimized animations</li>
                        <li>✅ No layout shifts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ThemeDemo;

