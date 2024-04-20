"use client";

import { usePrevious } from "@/hooks";
import { SLIDES } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FRONT_ANIMATIONS = [
  "animate-panRight",
  "animate-panLeft",
  "animate-enterRight",
  "animate-enterLeft",
  "animate-exitRight",
  "animate-exitLeft",
  "z-10",
  "-z-10",
];

const PARALLAX_ANIMATIONS = ["animate-parallaxLeft", "animate-parallaxRight"];

const FADE_ANIMATIONS = ["animate-fadeIn"];

const EXIT_ANIMATIONS = ["animate-fromBottom"];

function Carousel() {
  const first = useRef<HTMLDivElement>(null);
  const second = useRef<HTMLDivElement>(null);
  const third = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const callToAction = useRef<HTMLAnchorElement>(null);
  const [current, setCurrent] = useState(0);
  const prev = usePrevious(current);
  const front = useRef(true);
  const direction = prev !== undefined && prev < current;
  const currentSlide = SLIDES[current];
  const prevSlide = SLIDES[prev !== undefined ? prev : 0];
  const firstSlide = front.current ? currentSlide : prevSlide;
  const secondSlide = !front.current ? currentSlide : prevSlide;

  const handleBullet = (bullet: number) => () => {
    title.current?.classList.remove(...FADE_ANIMATIONS);
    callToAction.current?.classList.remove(...EXIT_ANIMATIONS);
    setCurrent(bullet);
  };

  useEffect(() => {
    const directionName = direction ? "Left" : "Right";
    const exit = `animate-exit${directionName}`;
    const enter = `animate-enter${directionName}`;
    const pan = `animate-pan${directionName}`;
    const parallax = `animate-parallax${directionName}`;
    const currentFront = !front.current ? first : second;
    const currentBack = front.current ? first : second;
    currentFront.current?.classList.remove(...FRONT_ANIMATIONS);
    currentFront.current?.classList.add(exit, "z-10");
    currentBack.current?.classList.remove(...FRONT_ANIMATIONS);
    currentBack.current?.classList.add(enter, "-z-10");
    third.current?.classList.remove(...PARALLAX_ANIMATIONS);
    third.current?.offsetLeft;
    third.current?.classList.add(parallax);
    title.current?.classList.remove(...FADE_ANIMATIONS);
    title.current?.classList.add("animate-fadeIn");
    callToAction.current?.classList.add("animate-fromBottom");

    front.current = !front.current;
    const timeoutId = setTimeout(() => {
      currentBack.current?.classList.replace(enter, pan);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [current, direction]);

  return (
    <section className="h-screen w-screen overflow-hidden">
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute left-20 top-[50%] z-30 flex select-none flex-col gap-2 overflow-hidden">
          <h2
            ref={title}
            className="pr-1 font-mono text-6xl font-black uppercase tracking-tighter text-zinc-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]"
          >
            {currentSlide.title}
          </h2>
          <Link
            ref={callToAction}
            className="animate-fromBottom block w-max border border-zinc-100 bg-zinc-100 px-5 py-2 text-center font-sans text-xs font-thin uppercase leading-tight tracking-tight text-zinc-700 duration-500 hover:bg-zinc-700 hover:bg-opacity-75 hover:text-zinc-100"
            href={currentSlide.href}
          >
            {currentSlide.callToAction}
          </Link>
        </div>
        <div
          ref={first}
          className="animate-panLeft absolute top-0 h-full w-full"
        >
          <Image
            src={firstSlide.src}
            alt="Slider 1"
            sizes="50vw"
            width={firstSlide.width}
            height={firstSlide.height}
            className="h-full origin-right scale-[125%] object-cover"
          />
        </div>
        <div ref={second} className="absolute top-0 h-full w-full">
          <Image
            src={secondSlide.src}
            alt="Slider 2"
            sizes="50vw"
            width={secondSlide.width}
            height={secondSlide.height}
            className="h-full origin-right scale-[125%] object-cover"
          />
        </div>
        <div
          ref={third}
          className="absolute top-0 z-20 inline-grid h-full w-full grid-rows-[125%]"
        >
          <Image
            src={currentSlide.src}
            alt="Slider Parallax"
            sizes="50vw"
            width={currentSlide.width}
            height={currentSlide.height}
            className="h-full w-auto origin-left scale-[125%] object-cover brightness-[45%]"
          />
        </div>
        <ul className="absolute bottom-8 left-[50%] z-30 flex gap-1">
          {Array.from({ length: SLIDES.length }, (_, i) => i).map((bullet) => {
            const color =
              current === bullet ? "bg-opacity-100" : "bg-opacity-30";

            return (
              <li
                className={`h-4 w-4 cursor-pointer rounded-full border-2 border-white bg-white duration-500 ${color}`}
                key={`carousel-bullet-${bullet}`}
                onClick={handleBullet(bullet)}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Carousel;
