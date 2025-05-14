import type { ReactNode } from "react";
import { useAuthUser } from "../../hooks/useAuthUser";

interface AuthenticateProps {
  children?: ReactNode;
  type?: "user" | "guest";
}

function Authenticate({ children, type = "user" }: AuthenticateProps) {
  const user = useAuthUser();
  if (type === "user") return user ? children : null;
  if (type === "guest") return !user ? children : null;
  return null;
}

export default Authenticate;
