import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
}

function GridContainer({ children }: GridContainerProps) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2">
      {children}
    </ul>
  );
}

export default GridContainer;
