import { type HTMLAttributes } from "react";
import Logo from "../Logo";
import IconButton from "../buttons/IconButton";
import { LuPanelsTopLeft } from "react-icons/lu";
import Profile from "../auth/Profile";
import Authenticate from "../auth/Authenticate";
import AsideNav from "./AsideNav";
import AsideFooter from "./AsideFooter";
import NewProjectButton from "../buttons/NewProjectButton";
import Authentication from "./Authentication";

function Aside({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <aside {...props} className={`p-4 bg-gray-50 flex flex-col gap-4 ${className ?? ""} dark:bg-gray-800`}>
      <div className="flex justify-between gap-4 items-center ">
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
        <Authentication />
      </Authenticate>

      <AsideFooter />
    </aside>
  );
}

export default Aside;
