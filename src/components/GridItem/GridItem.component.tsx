// import { useTransition } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
// import { useRef } from "react";

interface ItemProps {
  name: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
}

function GridItem({ name, cover, coverWidth, coverHeight }: ItemProps) {
  // const item = useRef<HTMLLIElement>(null);

  // useTransition(item, "fadeIn");

  return (
    // <li ref={item} className="w-[32%]">
    <li className="w-[32%]">
      <Link
        href={`/project/${name}`}
        className="group relative flex h-full w-full items-end justify-start overflow-hidden duration-700 after:block after:pb-[100%] after:content-[''] hover:bg-zinc-900/35"
      >
        <Image
          src={cover}
          alt={`cover-${name}`}
          className="absolute -z-10 h-full w-full object-cover brightness-90 duration-500 group-hover:scale-105 group-hover:brightness-100"
          width={coverWidth}
          height={coverHeight}
          sizes="33vw"
        />
        <span className="w-full bg-zinc-800/60 px-4 py-2 text-zinc-100 duration-500 group-hover:bg-zinc-800 group-hover:py-3">
          {name}
        </span>
      </Link>
    </li>
  );
}

export default GridItem;
