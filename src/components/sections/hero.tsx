import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { SparklesPreview } from "../ui/SparklesPreview";
import MagicButton from "../ui/MagicButton";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Image from "next/image";
type Props = {};

export default function Hero({}: Props) {
  return (
    <section id="home" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 left-10 md:left-32 md:-top-20 h-screen"
          fill="pink"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-28 left-80" fill="blue" />
        {/* Background Grid */}
        <div className="w-full absolute z-50 left-0 -top-72 min-h-96 ">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Sparkles  */}
          <SparklesPreview />
          {/* Magic Button  */}
          <div className="mt-9">
            <a href="#about">
              <MagicButton
                title="Show My Skills"
                position="right"
                icon={<FaLocationCrosshairs />}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
