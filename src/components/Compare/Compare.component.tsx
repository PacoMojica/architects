"use client";

import { bluredDataURLs } from "@/utils/constants";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

function Compare() {
  const [percentage, setPercentage] = useState(50);
  const auto = useRef<NodeJS.Timeout | null>(null);

  const clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;

  const createInterval = useCallback(
    () =>
      setInterval(
        () => setPercentage((prev) => (prev + 5 > 100 ? 0 : prev + 5)),
        300,
      ),
    [],
  );

  const handleOnMouseEnter = useCallback(() => {
    if (auto.current) clearInterval(auto.current);
  }, []);

  const handleOnMouseLeave = useCallback(() => {
    if (auto.current) clearInterval(auto.current);

    auto.current = createInterval();
  }, [createInterval]);

  useEffect(() => {
    auto.current = createInterval();

    return () => {
      if (auto.current) clearInterval(auto.current);
    };
  }, [createInterval]);

  return (
    <section className="h-max w-full">
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          // const y = e.clientY - rect.top;

          setPercentage(Math.ceil((x / rect.width) * 100));
        }}
        className="relative h-auto w-full overflow-hidden lg:mb-12"
      >
        <Image
          src="/compare/download.jpg"
          blurDataURL={bluredDataURLs["/compare/download-blur.jpg"]}
          placeholder="blur"
          alt="drawing"
          width={828}
          height={551}
          className="h-auto w-full"
          sizes="50vw"
        />
        <Image
          src="/compare/pexels-binyamin-mellish-106399.jpg"
          blurDataURL={
            bluredDataURLs["/compare/pexels-binyamin-mellish-106399-blur.jpg"]
          }
          placeholder="blur"
          alt="real"
          width={5408}
          height={3605}
          className="absolute top-0 h-auto w-full duration-100"
          style={{ clipPath }}
          sizes="50vw"
        />
      </div>
    </section>
  );
}

export default Compare;
