import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const isDark = actualTheme === 'dark';

  return (
    <Switch
      checked={isDark}
      onCheckedChange={handleThemeChange}
      aria-label="Toggle theme"
      className="data-[state=checked]:bg-brand-orange"
    />
  );
}