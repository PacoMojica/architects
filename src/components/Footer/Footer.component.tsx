import Image from "next/image";
import NLink from "next/link";
import { FOOTER_ICON_SIZE, FOOTER_LINKS } from "@/utils/constants";

interface LinkProps {
  href: string;
  src: string;
  alt: string;
}

function Link({ href, src, alt }: LinkProps) {
  return (
    <li>
      <NLink href={href} target="_blank">
        <Image
          src={src}
          alt={alt}
          width={FOOTER_ICON_SIZE}
          height={FOOTER_ICON_SIZE}
          unoptimized
        />
      </NLink>
    </li>
  );
}

function Footer() {
  return (
    <footer className="my-4">
      <div className="flex h-14 w-full items-center justify-center px-12 py-2">
        <span className="w-2/4 text-zinc-700">© 2024 Mojica Bricks</span>
        <ul className="flex w-2/4 items-center justify-end gap-2">
          {FOOTER_LINKS.map((link, i) => (
            <Link key={`footer-link-${i}`} {...link} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
