import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ElementType } from "react";

export type IconButtonProps = {
  icon?: ElementType;
  children?: ReactNode;
  isActive?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function IconButton({ children, icon: Icon, isActive, className, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={`flex gap-2 items-center font-semibold py-2 px-4 rounded-lg ${
        isActive ? "text-gray-800" : "text-gray-500"
      } hover:bg-gray-300 transition cursor-pointer ${className}`}
    >
      {Icon && <Icon className="size-5" />}
      <span className="leading-none">{children}</span>
    </button>
  );
}

export default IconButton;
