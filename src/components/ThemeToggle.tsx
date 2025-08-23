import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-brand-light-gray dark:hover:bg-gray-800 focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200"
          aria-label="Toggle theme"
          aria-expanded={false}
          aria-haspopup="true"
        >
          {actualTheme === 'dark' ? (
            <Moon className="h-4 w-4 text-brand-orange dark:text-brand-orange" />
          ) : (
            <Sun className="h-4 w-4 text-brand-orange" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-40 bg-background border border-border shadow-lg dark:shadow-2xl"
        sideOffset={8}
      >
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className="cursor-pointer hover:bg-brand-light-gray dark:hover:bg-gray-800 focus:bg-brand-light-gray dark:focus:bg-gray-800 transition-colors duration-200"
          aria-label="Switch to light theme"
        >
          <Sun className="mr-2 h-4 w-4 text-brand-orange" />
          <span className="font-medium">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className="cursor-pointer hover:bg-brand-light-gray dark:hover:bg-gray-800 focus:bg-brand-light-gray dark:focus:bg-gray-800 transition-colors duration-200"
          aria-label="Switch to dark theme"
        >
          <Moon className="mr-2 h-4 w-4 text-brand-orange" />
          <span className="font-medium">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className="cursor-pointer hover:bg-brand-light-gray dark:hover:bg-gray-800 focus:bg-brand-light-gray dark:focus:bg-gray-800 transition-colors duration-200"
          aria-label="Use system theme preference"
        >
          <Monitor className="mr-2 h-4 w-4 text-brand-orange" />
          <span className="font-medium">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}