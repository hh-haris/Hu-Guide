import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const isDark = actualTheme === 'dark';

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-yellow-500" />
      <Switch
        checked={isDark}
        onCheckedChange={handleThemeChange}
        aria-label="Toggle theme"
        className="data-[state=checked]:bg-brand-orange"
      />
      <Moon className="h-4 w-4 text-blue-500" />
    </div>
  );
}