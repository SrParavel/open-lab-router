import { useNavigate } from "react-router";
import GithubLoginButton from "../auth/GithubLoginButton";
import PrimaryButton from "../buttons/PrimaryButton";

function Authentication() {

    let navigate = useNavigate()
    return (
        <div className="text-sm font-bold flex flex-col gap-2 items-strech">
            <p className="text-center">¿No tienes cuenta? <span className="text-blue-500">Registrate</span></p>
            <GithubLoginButton />
            <p className="font-normal text-xs text-center">O con email y contraseña</p>
            <PrimaryButton onClick={() => navigate("/login")}>Iniciar Sesión</PrimaryButton>
        </div>
    );
}

export default Authentication;