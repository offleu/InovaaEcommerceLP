import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inovaaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body tracking-wide uppercase",
  {
    variants: {
      variant: {
        primary: "bg-gold text-background shadow-button hover:shadow-lg hover:bg-gold-light rounded-sm",
        secondary: "bg-secondary text-foreground border border-border hover:border-gold/30 hover:text-gold rounded-sm",
        yellow: "bg-gold-dark text-foreground shadow-button hover:shadow-lg hover:bg-gold rounded-sm",
        outline: "border border-gold/40 text-gold bg-transparent hover:bg-gold hover:text-background rounded-sm",
      },
      size: {
        default: "h-12 px-8 py-3 text-sm font-semibold",
        sm: "h-9 px-5 text-xs",
        lg: "h-14 px-12 py-4 text-base font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface InovaaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof inovaaButtonVariants> {
  asChild?: boolean
}

const InovaaButton = React.forwardRef<HTMLButtonElement, InovaaButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(inovaaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
InovaaButton.displayName = "InovaaButton"

export { InovaaButton, inovaaButtonVariants }
