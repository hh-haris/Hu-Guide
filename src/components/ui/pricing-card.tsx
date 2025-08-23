"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  items: string[];
}

interface PricingCardProps {
  title: string;
  description: string;
  price?: number;
  originalPrice?: number;
  features: Feature[];
  buttonText: string;
  onButtonClick: () => void;
  className?: string;
  popular?: boolean;
  current?: boolean;
  currency?: string;
  isFree?: boolean;
}

export function PricingCard({
  title,
  description,
  price,
  originalPrice,
  features,
  buttonText,
  onButtonClick,
  className,
  popular = false,
  current = false,
  currency = "PKR",
  isFree = false,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative w-full h-full flex flex-col",
        popular && "ring-2 ring-brand-orange shadow-lg",
        current && "ring-2 ring-brand-blue",
        className
      )}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange hover:bg-brand-orange/90">
          Most Popular
        </Badge>
      )}
      {current && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue hover:bg-brand-blue/90">
          Current Plan
        </Badge>
      )}

      <CardHeader className="pb-4">
        <CardTitle className="font-secondary text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        
        <div className="pt-4">
          {isFree ? (
            <div className="text-3xl font-bold text-foreground">Free forever</div>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">
                {currency} {price}
              </span>
              {originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {currency} {originalPrice}
                </span>
              )}
              {!isFree && (
                <span className="text-sm text-muted-foreground">one-time</span>
              )}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        {features.map((featureGroup, groupIndex) => (
          <div key={groupIndex} className="space-y-3">
            <h4 className="font-semibold text-foreground">{featureGroup.title}</h4>
            <ul className="space-y-2">
              {featureGroup.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>

      <CardFooter className="pt-6">
        <Button
          onClick={onButtonClick}
          className={cn(
            "w-full font-medium",
            popular 
              ? 'bg-brand-orange hover:bg-brand-orange/90 text-white' 
              : current
              ? 'bg-brand-blue hover:bg-brand-blue/90 text-white'
              : 'bg-secondary hover:bg-secondary/80'
          )}
          disabled={current}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}