import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { testimonials } from "@/data";

type Props = {};

export default function Clients({}: Props) {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading text-white mb-16">
        Kind words from <span className="text-purple">satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[28vh] md:h-[18rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
