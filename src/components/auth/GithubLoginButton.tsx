import { FaGithub } from "react-icons/fa";
import { gitHubLogIn } from "../../libs/firebase";

const GithubLoginButton = () => {
  return (
    <button
      onClick={gitHubLogIn}
      className="flex items-center justify-center gap-2 px-4 py-2 text-gray-50 bg-gray-800 dark:bg-blue-500 rounded-lg hover:contrast-120 transition cursor-pointer"
    >
      <FaGithub className="text-xl" />
      Iniciar sesión
    </button>
  );
};

export default GithubLoginButton;
