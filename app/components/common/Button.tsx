import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors
          ${variant === "default" ? "bg-primary-500 text-white hover:bg-primary-600" : ""}
          ${variant === "outline" ? "border border-input bg-background hover:bg-accent" : ""}
          ${variant === "ghost" ? "hover:bg-accent hover:text-accent-foreground" : ""}
          ${size === "sm" ? "h-8 px-3 text-xs" : ""}
          ${size === "md" ? "h-10 px-4 py-2" : ""}
          ${size === "lg" ? "h-11 px-8" : ""}
          ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
