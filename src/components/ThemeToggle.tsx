import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { actualTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const next = actualTheme === 'dark' ? 'light' : 'dark';
    setTheme(next as 'light' | 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 hover:bg-brand-light-gray dark:hover:bg-gray-800"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      {actualTheme === 'dark' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
}