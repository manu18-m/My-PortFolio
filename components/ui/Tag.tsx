import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "cyan" | "muted";
  className?: string;
}

export default function Tag({
  children,
  variant = "default",
  className,
}: TagProps) {
  const variants = {
    default: "bg-surface-2 text-muted-2 border-border",
    accent: "bg-accent-glow text-accent-2 border-accent/30",
    cyan: "bg-cyan-glow text-cyan border-cyan/30",
    muted: "bg-surface text-muted border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
