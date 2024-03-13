import { ChevronDown, ChevronRight } from "lucide-react";

interface TreeNodeProps {
  id: number;
  name: string;
  level?: number;
  isLeaft: boolean;
  checked?: boolean;
  expanded?: boolean;
  onExpand: () => void;
  onCheck: () => void;
}
export const TreeItem = ({
  id,
  name,
  level = 0,
  isLeaft,
  checked,
  expanded,
  onExpand,
  onCheck,
}: TreeNodeProps) => {
  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      className="group min-h-[27px] text-xl py-1 pr-3 w-full hover:bg-primary/5 flex gap-2 items-center text-muted-foreground font-medium"
      style={{
        paddingLeft: level ? `${level * 12 + 12}px` : "12px",
      }}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={checked}
        onChange={onCheck}
      />
      {name}
      {!!id && !isLeaft && (
        <ChevronIcon
          onClick={onExpand}
          className="h-4 w-4 shrink-0 text-muted-foreground/50 cursor-pointer"
        />
      )}
    </div>
  );
};
