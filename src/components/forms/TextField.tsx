import type { ElementType } from "react";
import type React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ElementType;
}

function TextField({ label, icon: Icon, id, ...props }: TextFieldProps) {
  return (
    <label htmlFor={id} className="text-md font-semibold flex flex-col gap-2">
      <div className="flex items-center px-4 gap-2">
        {Icon && <Icon className="size-5" />}
        {label && <span>{label}</span>}
      </div>
      <input
        {...props}
        type="text"
        className="border-2 border-gray-300 rounded-lg px-4 text-sm font-normal py-2 outline-none ring-blue-500 focus:ring transition"
      />
    </label>
  );
}

export default TextField;
