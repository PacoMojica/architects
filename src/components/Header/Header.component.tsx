import Image from "next/image";
import NLink from "next/link";
import { HEADER_LINKS } from "@/utils/constants";

interface LinkProps {
  href: string;
  label: string;
}

function Link({ href, label }: LinkProps) {
  return (
    <li className="p-1 tracking-widest last:after:content-['']">
      <NLink href={href}>
        <span className="border-b border-transparent duration-500 hover:border-zinc-700 hover:text-yellow-800">
          {label}
        </span>
      </NLink>
    </li>
  );
}

function Header() {
  return (
    <header className="z-50 flex h-20 w-full select-none items-center justify-between bg-zinc-100/20 backdrop-blur">
      <div className="relative h-full w-1/4">
        <a href="/" className="relative block h-full w-full">
          <Image
            src="/logo.svg"
            alt="Mojica Bricks"
            fill
            priority
            unoptimized
          />
        </a>
      </div>
      <nav className="w-3/4 pr-8">
        <ul className="flex h-full items-center justify-end [&>li]:after:content-['_·']">
          {HEADER_LINKS.map(({ href, label }, i) => (
            <Link key={`link-${i}`} href={href} label={label} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
