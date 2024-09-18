import React from "react";
import { Button } from "../ui/MovingBorder";
import { workExperiences } from "@/data";
import { BiBorderRadius } from "react-icons/bi";

type Props = {};

export default function Experience({}: Props) {
  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading text-white">
        <span className="text-purple">Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-3 grid-cols-1 gap-10">
        {workExperiences.map((card) => {
          return (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
              style={{
                background: "rgb(0,0,0)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 text-white"
            >
              <div className="flex flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-16 text-center"
                />
                <div className="lg:mt-5">
                  <h1 className="text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
