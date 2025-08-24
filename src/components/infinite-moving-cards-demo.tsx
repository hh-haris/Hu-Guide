"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[22rem] w-full rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden px-4">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast" // faster + smoother scrolling
        loop={true}  // ensure infinite looping
        className="w-full max-w-sm sm:max-w-md md:max-w-2xl" // responsive sizing
        textAlign="right" // custom alignment prop (fallback handled inside component)
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The SHS scholarship changed my life completely. The experience of studying in Hungary has been incredible, and the education quality is world-class.",
    name: "Ahmad Hassan",
    title: "Computer Science, University of Debrecen",
  },
  {
    quote:
      "Living in Budapest as an SHS scholar has been amazing. The cultural diversity and academic opportunities are beyond what I expected.",
    name: "Fatima Khan",
    title: "Medical Studies, Semmelweis University",
  },
  {
    quote:
      "The scholarship not only covered my education but also opened doors to European opportunities I never imagined possible.",
    name: "Ali Raza",
    title: "Engineering, Budapest University of Technology",
  },
  {
    quote:
      "Hungary has become my second home. The support from the Pakistani community here and the quality of education make it worth every effort.",
    name: "Ayesha Malik",
    title: "Business Administration, Corvinus University",
  },
  {
    quote:
      "The USAT preparation was challenging, but the reward of studying in Europe through SHS made every hour of study worthwhile.",
    name: "Hassan Ahmed",
    title: "Arts & Humanities, University of Pécs",
  },
];
