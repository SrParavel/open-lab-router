import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ElementType } from "react";

type PrimaryButtonProps = {
  icon?: ElementType;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function SecondaryButton({ children, icon: Icon, className, ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`border bg-gray-50 border-gray-400 text-gray-400 flex gap-2 items-center justify-center font-medium px-4 py-2 rounded-lg hover:contrast-75 transition cursor-pointer ${className}`}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  );
}

export default SecondaryButton;
