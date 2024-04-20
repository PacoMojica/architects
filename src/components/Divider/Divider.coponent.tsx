interface DividerProps {
  className?: string;
}

function Divider({ className = "" }: DividerProps) {
  return (
    <div className={"w-full " + className}>
      <hr className="border-1 border-zinc-400" />
    </div>
  );
}

export default Divider;
