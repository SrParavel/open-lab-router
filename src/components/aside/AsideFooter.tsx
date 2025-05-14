import { LuLogOut, LuSettings } from "react-icons/lu";
import Authenticate from "../auth/Authenticate";
import IconButton from "../buttons/IconButton";
import { auth } from "../../libs/firebase";

function AsideFooter() {
  return (
    <footer className="pt-2 flex flex-col gap-2 items-stretch border-t-2 border-gray-300">
      <Authenticate>
        <IconButton icon={LuLogOut} onClick={() => auth.signOut()}>
          Cerrar sesión
        </IconButton>
      </Authenticate>
      <IconButton icon={LuSettings}>Configuración</IconButton>
    </footer>
  );
}

export default AsideFooter;
