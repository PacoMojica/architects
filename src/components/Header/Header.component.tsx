"use client";

import Image from "next/image";
import NLink from "next/link";
import { HEADER_LINKS } from "@/utils/constants";
import { useState } from "react";

interface LinkProps {
  href: string;
  label: string;
}

function Link({ href, label }: LinkProps) {
  return (
    <li className="w-full border-b-2 p-1 tracking-widest lg:w-max lg:border-b-0">
      <NLink href={href}>
        <span className="border-b border-transparent duration-500 hover:border-zinc-700 hover:text-yellow-800">
          {label}
        </span>
      </NLink>
    </li>
  );
}

function Header() {
  const [hidden, setHidden] = useState(true);

  return (
    <header className="grid w-full grid-cols-[1fr_1fr] grid-rows-[auto_auto] bg-zinc-100/20 backdrop-blur [grid-template-areas:'logo_burger''menu_menu'] lg:grid-cols-[1fr_4fr] lg:grid-rows-[1fr] lg:[grid-template-areas:'logo_menu']">
      <div className="relative h-full w-full [grid-area:logo]">
        <a href="/" className="relative block h-20 w-full">
          <Image
            src="/logo.svg"
            alt="Mojica Bricks"
            fill
            priority
            unoptimized
          />
        </a>
      </div>
      <Image
        className="h-20 w-auto justify-self-end p-4 [grid-area:burger] lg:hidden"
        onClick={() => setHidden((prev) => !prev)}
        src="/burger.svg"
        alt="burger icon"
        width={100}
        height={100}
        priority
        unoptimized
      />
      <nav
        className={`h-auto w-full px-4 pb-4 [grid-area:menu] lg:block lg:pb-0 ${hidden ? "hidden" : ""}`}
      >
        <ul className="flex w-full flex-col gap-4 lg:h-full lg:flex-row lg:items-center lg:justify-end">
          {HEADER_LINKS.map(({ href, label }, i) => (
            <Link key={`link-${i}`} href={href} label={label} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
