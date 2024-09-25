import React from "react";
import { LayoutGrid } from "../ui/LayoutGrid";

type Props = {};

export default function Gallery({}: Props) {
  return (
    <section id="gallery" className="h-screen py-10 w-full">
      <div>
        <h1 className="heading text-white my-16">
          <span className="text-purple">Gallery</span>
        </h1>
      </div>

      <LayoutGrid cards={cards} />
    </section>
  );
}

const SkeletonOne = ({ index }: { index: number }) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Gallery 0{index}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim natus
        sequi numquam officiis suscipit velit cum voluptatibus in! Harum aut
        illo blanditiis libero, consequatur sint explicabo doloribus optio
        tempore in facilis est nostrum doloremque laborum dicta voluptatibus
        molestiae distinctio vel alias assumenda deleniti. Aliquam nulla eos
        tempore nobis quis? Sunt!
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne index={1} />,
    className: "md:col-span-1",
    thumbnail: "/project-1.jpg",
  },
  {
    id: 2,
    content: <SkeletonOne index={2} />,
    className: "col-span-1",
    thumbnail: "/project-2.jpg",
  },
  {
    id: 3,
    content: <SkeletonOne index={3} />,
    className: "col-span-1",
    thumbnail: "/project-3.jpg",
  },
  {
    id: 4,
    content: <SkeletonOne index={4} />,
    className: "md:col-span-1",
    thumbnail: "/project-4.jpg",
  },
  {
    id: 5,
    content: <SkeletonOne index={5} />,
    className: "md:col-span-1",
    thumbnail: "/project-5.jpg",
  },
  {
    id: 6,
    content: <SkeletonOne index={6} />,
    className: "md:col-span-1",
    thumbnail: "/project-6.jpg",
  },
  {
    id: 7,
    content: <SkeletonOne index={7} />,
    className: "md:col-span-1",
    thumbnail: "/project-7.jpg",
  },
  {
    id: 8,
    content: <SkeletonOne index={8} />,
    className: "md:col-span-1",
    thumbnail: "/project-8.jpg",
  },
  {
    id: 9,
    content: <SkeletonOne index={9} />,
    className: "md:col-span-1",
    thumbnail: "/project-9.jpg",
  },
];
