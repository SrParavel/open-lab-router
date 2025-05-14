import { type HTMLAttributes } from "react";
import Logo from "../Logo";
import IconButton from "../buttons/IconButton";
import { LuPanelsTopLeft } from "react-icons/lu";
import Profile from "../auth/Profile";
import GithubLoginButton from "../auth/GithubLoginButton";
import Authenticate from "../auth/Authenticate";
import AsideNav from "./AsideNav";
import AsideFooter from "./AsideFooter";
import NewProjectButton from "../buttons/NewProjectButton";

function Aside({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <aside {...props} className={`p-4 bg-gray-50 flex flex-col gap-4 ${className ?? ""}`}>
      <div className="flex justify-between gap-4 items-center dark:bg-gray-800">
        <Logo />
        <IconButton icon={LuPanelsTopLeft} />
      </div>

      <Authenticate>
        <Profile />
      </Authenticate>

      <AsideNav />

      <Authenticate>
        <NewProjectButton />
      </Authenticate>

      <Authenticate type="guest">
        <GithubLoginButton />
      </Authenticate>

      <AsideFooter />
    </aside>
  );
}

export default Aside;
