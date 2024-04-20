import Divider from "@/components/Divider";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}
function Title({ className = "", children }: TitleProps) {
  return (
    <div className={"w-full " + className}>
      <h1 className="pb-4 text-5xl font-thin text-zinc-600">{children}</h1>
      <Divider />
    </div>
  );
}

export default Title;
