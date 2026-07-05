import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#0077FF] text-white hover:bg-[#0055CC] active:scale-[0.98] shadow-lg shadow-[#0077FF]/20",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-[#0077FF] text-[#0077FF] bg-transparent hover:bg-[#0077FF] hover:text-white active:scale-[0.98]",
        "outline-white":
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#060E1D] active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        navy:
          "bg-[#060E1D] text-white border border-white/20 hover:bg-[#1A1208] active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-13 rounded-md px-8 text-base py-3",
        xl: "h-14 rounded-lg px-10 text-base py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
