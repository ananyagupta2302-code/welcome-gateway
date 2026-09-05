import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  hideLabel?: boolean;
}

export const AuthField = forwardRef<HTMLInputElement, AuthFieldProps>(
  function AuthField({ label, hideLabel = false, icon: Icon, type = "text", id, ...props }, ref) {
    const isPassword = type === "password";
    const [visible, setVisible] = useState(false);
    const inputType = isPassword ? (visible ? "text" : "password") : type;

    return (
      <div>
        <label
          htmlFor={id}
          className={cn("mb-1.5 block text-sm font-medium", hideLabel && "sr-only")}
        >
          {label}
        </label>
        <div className="relative">
          <Icon
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            ref={ref}
            id={id}
            type={inputType}
            aria-label={hideLabel ? label : undefined}
            {...props}
            className={cn(
              "w-full rounded-lg border border-input bg-ocean-deep/60 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70",
              "outline-none transition-colors focus:border-ocean-glow focus:ring-2 focus:ring-ocean-glow/30",
              isPassword && "pr-11"
            )}
          />
          {isPassword ? (
            <button
              type="button"
              onClick={() => setVisible((v) => !v)}
              aria-label={visible ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </button>
          ) : null}
        </div>
      </div>
    );
  }
);
