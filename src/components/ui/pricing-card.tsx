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
        "relative w-full h-full flex flex-col shadow-sm border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden",
        popular && "ring-2 ring-brand-orange shadow-xl scale-105 lg:scale-110",
        current && "ring-2 ring-brand-blue shadow-lg",
        className
      )}
    >
      {popular && (
        <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-brand-orange hover:bg-brand-orange/90 text-white px-4 py-1 rounded-full text-xs font-semibold z-10">
          Most Popular
        </Badge>
      )}
      {current && (
        <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-1 rounded-full text-xs font-semibold z-10">
          Current Plan
        </Badge>
      )}

      <CardHeader className="text-center p-6 pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </CardDescription>
        
        <div className="mb-4">
          {isFree ? (
            <div className="text-4xl font-bold text-gray-900 dark:text-white">
              Free
              <span className="text-lg font-normal text-gray-500 ml-2">forever</span>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-sm text-gray-500 font-medium">{currency}</span>
                <span className="text-5xl font-bold text-gray-900 dark:text-white">
                  {price}
                </span>
                {originalPrice && (
                  <span className="text-xl text-gray-400 line-through ml-2">
                    {currency} {originalPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">one-time payment</p>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-6 pt-0">
        <div className="space-y-6">
          {features.map((featureGroup, groupIndex) => (
            <div key={groupIndex} className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                {featureGroup.title}
              </h4>
              <ul className="space-y-3">
                {featureGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-4">
        <Button
          onClick={onButtonClick}
          className={cn(
            "w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200",
            popular 
              ? 'bg-brand-orange hover:bg-brand-orange/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
              : current
              ? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600'
          )}
          disabled={current}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}