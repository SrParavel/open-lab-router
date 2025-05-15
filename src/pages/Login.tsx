import GithubLoginButton from "../components/auth/GithubLoginButton";
import TextField from "../components/forms/TextField";
import Logo from "../components/Logo";

function Login() {
    return (
        <section className="bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center h-dvh">
            <div className="bg-gray-50 rounded-lg flex flex-col">
                <div className="p-4 flex flex-col gap-2 items-strech">
                    <Logo></Logo>
                    <GithubLoginButton />
                </div>
                <div className="flex flex-col border-t border-t-gray-200 gap-2 p-4">
                    <TextField label="Correo electrónico"></TextField>
                    <TextField label="Contraseña"></TextField>
                    <p className="text-center">¿No tienes cuenta? <span className="text-blue-500">Registrate</span></p>
                </div>
            </div>
        </section>
    );
}

export default Login;