import { LuCompass, LuLayoutDashboard } from "react-icons/lu";
import Authenticate from "../auth/Authenticate";
import NavButton from "../buttons/NavButton";

function AsideNav() {
  return (
    <nav className="grow">
      <ul className="flex flex-col gap-2 items-stretch">
        <li>
          <NavButton to="/explore" icon={LuCompass}>
            Explorar
          </NavButton>
        </li>
        <Authenticate>
          <li>
            <NavButton to="/projects" icon={LuLayoutDashboard}>
              Mis Proyectos
            </NavButton>
          </li>
        </Authenticate>
      </ul>
    </nav>
  );
}

export default AsideNav;
