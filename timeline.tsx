
import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineContextProps {
  defaultValue?: number
}

const TimelineContext = React.createContext<TimelineContextProps>({})

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & TimelineContextProps
>(({ className, defaultValue, ...props }, ref) => (
  <TimelineContext.Provider value={{ defaultValue }}>
    <div
      ref={ref}
      className={cn("relative space-y-8", className)}
      {...props}
    />
  </TimelineContext.Provider>
))
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { step: number }
>(({ className, step, ...props }, ref) => {
  const { defaultValue } = React.useContext(TimelineContext)
  const isActive = defaultValue ? step <= defaultValue : false
  
  return (
    <div
      ref={ref}
      className={cn("relative pb-8 last:pb-0", className)}
      data-step={step}
      data-active={isActive}
      {...props}
    />
  )
})
TimelineItem.displayName = "TimelineItem"

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-start gap-4", className)}
    {...props}
  />
))
TimelineHeader.displayName = "TimelineHeader"

const TimelineSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute left-[7px] top-8 bottom-0 w-px bg-border",
      "last:hidden",
      className
    )}
    {...props}
  />
))
TimelineSeparator.displayName = "TimelineSeparator"

const TimelineIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex h-4 w-4 items-center justify-center rounded-full",
        "bg-brand-orange border-2 border-white shadow-sm flex-shrink-0",
        className
      )}
      {...props}
    />
  )
})
TimelineIndicator.displayName = "TimelineIndicator"

const TimelineDate = React.forwardRef<
  HTMLTimeElement,
  React.HTMLAttributes<HTMLTimeElement>
>(({ className, ...props }, ref) => (
  <time
    ref={ref}
    className={cn("text-sm text-muted-foreground font-primary", className)}
    {...props}
  />
))
TimelineDate.displayName = "TimelineDate"

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-secondary font-semibold text-foreground", className)}
    {...props}
  />
))
TimelineTitle.displayName = "TimelineTitle"

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("ml-8 mt-2 text-sm text-muted-foreground font-primary", className)}
    {...props}
  />
))
TimelineContent.displayName = "TimelineContent"

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineSeparator,
  TimelineIndicator,
  TimelineDate,
  TimelineTitle,
  TimelineContent,
}
