import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ElementType } from "react";

type PrimaryButtonProps = {
  icon?: ElementType;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function PrimaryButton({ children, icon: Icon, className, ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`bg-gray-800 dark:bg-blue-500  text-gray-50 flex gap-2 items-center justify-center font-semibold px-4 py-2 rounded-lg hover:contrast-120 transition cursor-pointer ${className}`}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  );
}

export default PrimaryButton;
