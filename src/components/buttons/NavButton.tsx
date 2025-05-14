import { NavLink } from "react-router";
import IconButton from "./IconButton";
import type { ElementType, ReactNode } from "react";

interface LinkButtonProps {
  children?: ReactNode;
  to: string;
  icon?: ElementType;
}

function NavButton({ children, to, icon }: LinkButtonProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <IconButton className="w-full" isActive={isActive} icon={icon}>
          {children}
        </IconButton>
      )}
    </NavLink>
  );
}

export default NavButton;
