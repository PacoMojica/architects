"use client";

import Image from "next/image";
import { useState } from "react";

function Compare() {
  const [percentage, setPercentage] = useState(50);
  const clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
  return (
    <section>
      <div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          // const y = e.clientY - rect.top;

          setPercentage(Math.ceil((x / rect.width) * 100));
        }}
        className="relative mb-20 h-screen w-full overflow-hidden"
      >
        <Image
          src="/compare/download.png"
          alt="drawing"
          width={985}
          height={656}
          className="absolute h-auto w-full"
        />
        <Image
          src="/compare/pexels-binyamin-mellish-106399.jpg"
          alt="real"
          width={5408}
          height={3605}
          className="absolute h-auto w-full"
          style={{ clipPath }}
        />
      </div>
    </section>
  );
}

export default Compare;
