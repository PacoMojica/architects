import { sourceSans } from "@/utils/fonts";
import { ReactNode } from "react";

interface BodyProps {
  className?: string;
  children: ReactNode;
  indent?: boolean;
}

function Body({ children, className = "", indent = false }: BodyProps) {
  return (
    <p
      className={
        `text-pretty text-lg font-light leading-relaxed ${sourceSans.className} ${indent ? "indent-8" : ""} ` +
        className
      }
    >
      {children}
    </p>
  );
}

export default Body;
