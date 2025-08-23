import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <TooltipProvider>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-brand-light-gray dark:hover:bg-gray-800 transition-all duration-200 focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 dark:focus:ring-offset-gray-900 hover:scale-105 active:scale-95 hover:shadow-lg dark:hover:shadow-gray-800/50 border border-transparent hover:border-brand-orange/20 dark:hover:border-brand-orange/30"
                aria-label="Toggle theme"
              >
                {actualTheme === 'dark' ? (
                  <Moon className={`h-4 w-4 transition-all duration-300 ${theme === 'system' ? 'animate-pulse' : ''}`} />
                ) : (
                  <Sun className={`h-4 w-4 transition-all duration-300 ${theme === 'system' ? 'animate-pulse' : ''}`} />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-background/95 backdrop-blur-sm border border-border/50">
              <p>Toggle theme (Ctrl+T)</p>
            </TooltipContent>
          </Tooltip>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40 bg-background/95 backdrop-blur-sm border border-border/50">
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={`cursor-pointer transition-all duration-200 hover:bg-brand-light-gray dark:hover:bg-gray-800 hover:translate-x-1 rounded-md ${
            theme === 'light' ? 'bg-brand-orange/10 dark:bg-brand-orange/20' : ''
          }`}
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={`cursor-pointer transition-all duration-200 hover:bg-brand-light-gray dark:hover:bg-gray-800 hover:translate-x-1 rounded-md ${
            theme === 'dark' ? 'bg-brand-orange/10 dark:bg-brand-orange/20' : ''
          }`}
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={`cursor-pointer transition-all duration-200 hover:bg-brand-light-gray dark:hover:bg-gray-800 hover:translate-x-1 rounded-md ${
            theme === 'system' ? 'bg-brand-orange/10 dark:bg-brand-orange/20' : ''
          }`}
        >
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
}