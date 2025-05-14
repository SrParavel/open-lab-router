import type { JSX } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../libs/firebase";
import { Navigate } from "react-router";

function AuthRedirect({ children }: { children: JSX.Element }) {
  const [user] = useAuthState(auth);

  return user ? children : <Navigate to="/" replace />;
}

export default AuthRedirect;
