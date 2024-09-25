import React from "react";
import { Tooltip } from "../ui/Tooltip";
import MagicButton from "../ui/MagicButton";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { socialIcons } from "@/data";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full pt-48 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading text-white">
          Ready to take{" "}
          <span className="text-purple">
            digital presence to the next level?
          </span>
        </h1>
        I
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Tooltip />
        <a href="mailto:sameedh41@gmail.com">
          <MagicButton
            title="Let's get in touch"
            position="right"
            icon={<FaLocationCrosshairs />}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-white text-sm md:font-normal font-light">
          Copyright © 2024 - Syed Sameed Hasan
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialIcons.map((info) => (
            <div key={info.id}>
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
