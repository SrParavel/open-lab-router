import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { ElementType } from "react";

export type IconButtonProps = {
  icon?: ElementType;
  children?: ReactNode;
  isActive?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

function LinkButton({ children, icon: Icon, isActive, className, ...props }: IconButtonProps) {
  return (
    <a
      {...props}
      className={`flex gap-2 items-center font-semibold py-2 px-4 rounded-lg ${
        isActive ? "text-gray-800" : "text-gray-500"
      } hover:bg-gray-300 transition cursor-pointer ${className}`}
    >
      {Icon && <Icon className="size-5" />}
      {children && <span className="leading-none">{children}</span>}
    </a>
  );
}

export default LinkButton;
