import Link from "next/link";
import Image from "next/image";
import { bluredDataURLs, PROJECT_COVERS } from "@/utils/constants";

function Page() {
  return (
    <main className="h-screen w-screen">
      <div className="relative flex h-full w-full flex-col items-center justify-between lg:flex-row">
        {PROJECT_COVERS.map(({ label, src }, i) => (
          <div
            key={`project-category-${label}`}
            className="relative flex h-full w-full items-center justify-center"
          >
            <Link
              href={`/portfolio/${label}`}
              className="group relative flex h-full w-full items-center justify-center pr-1 font-mono text-6xl font-black uppercase tracking-tighter text-zinc-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            >
              <Image
                src={src}
                blurDataURL={bluredDataURLs[src.replace(".", "-blur.")]}
                placeholder="blur"
                alt={src}
                fill
                sizes="50vw"
                className={`${i % 2 === 0 ? "animate-fromLeft lg:animate-fromBottom" : "animate-fromRight lg:animate-fromTop"} -z-10 object-cover brightness-90 duration-500 group-hover:brightness-50`}
              />
              {label}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
