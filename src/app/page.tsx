import Carousel from "@/components/Carousel";
import Divider from "@/components/Divider";
import Grid from "@/components/Grid";
// import { useTransition } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
// import { useRef } from "react";

export default function Home() {
  // const left = useRef<HTMLImageElement>(null);
  // const right = useRef<HTMLImageElement>(null);
  // const contact = useRef<HTMLImageElement>(null);

  // useTransition(left, "fromLeft");
  // useTransition(right, "fromRight");
  // useTransition(contact, "fadeIn");

  return (
    <main>
      <Carousel />
      <div className="flex flex-col items-center justify-center gap-20 px-12 pt-20">
        <Grid />
        <Divider />
        <section className="flex w-full gap-2">
          <Image
            src="/images/pexels-gdtography-911758.jpg"
            alt="Proyect 1"
            className="h-auto w-1/2"
            width={6016}
            height={4016}
            sizes="50vw"
            // ref={left}
          />
          <Image
            src="/images/pexels-gdtography-911738.jpg"
            alt="Proyect 2"
            className="h-auto w-1/2"
            width={6016}
            height={4016}
            sizes="50vw"
            // ref={right}
          />
        </section>
        <Divider />
      </div>
      {/* <div ref={contact} className="relative h-96 w-full overflow-hidden"> */}
      <div className="relative h-96 w-full overflow-hidden mt-20">
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-zinc-900/35 backdrop-blur-sm">
          <Link
            className="block w-max select-none border-2 border-zinc-100 bg-zinc-700 bg-opacity-75 px-20 py-6 text-center font-sans text-sm font-extralight uppercase leading-tight tracking-tight text-zinc-100 duration-500 hover:bg-zinc-100 hover:bg-opacity-100 hover:text-zinc-700"
            href="/contact"
          >
            More Info
          </Link>
        </div>
        <Image
          src="/images/pexels-alex-staudinger-1732414.jpg"
          alt="Contact"
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>
    </main>
  );
}
