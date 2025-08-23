import * as React from "react";
import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

const Switch = ({ children, className, ...props }: AriaSwitchProps) => (
  <AriaSwitch
    className={composeRenderProps(className, (className) =>
      cn(
        "group inline-flex items-center gap-2 text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        <div
          className={cn(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
            "group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2 group-data-[focus-visible]:ring-offset-background",
            "group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50",
            "bg-input group-data-[selected]:bg-primary",
            "group-data-[readonly]:cursor-default",
            "focus-visible:outline-none"
          )}
        >
          <div
            className={cn(
              "pointer-events-none block size-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
              "translate-x-0 group-data-[selected]:translate-x-5"
            )}
          />
        </div>
        {children}
      </>
    ))}
  </AriaSwitch>
);

export function ThemeSwitch() {
  const { actualTheme, setTheme } = useTheme();
  const isDark = actualTheme === "dark";

  return (
    <Switch
      aria-label="Toggle dark mode"
      isSelected={isDark}
      onChange={(selected) => setTheme(selected ? "dark" : "light")}
      className="h-8"
    />
  );
}

export { Switch };

