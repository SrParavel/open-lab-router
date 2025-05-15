import { LuGithub, LuGlobe, LuImage, LuTrash } from "react-icons/lu";
import type { Project } from "../types/Project";
import LinkButton from "./buttons/LinkButton";
import IconButton from "./buttons/IconButton";
import { useDelete } from "../hooks/useDelete";
import Authenticate from "./auth/Authenticate";

function ProjectCard({ id, title, description, repourl, siteurl }: Project) {
  const { deleteProject, loading, error } = useDelete();

  async function handleDelete(id: string) {
    const success = await deleteProject(id);
    if (success) {
      console.log("Proyecto eliminado exitosamente");
    } else {
      console.error("Error al eliminar el proyecto:", error);
    }
  }

  return (
    <article className="flex flex-col aspect-square bg-gray-50 dark:bg-gray-800 rounded-2xl shadow overflow-hidden hover:shadow-md transition">
      <div className="grow bg-gray-400 dark:bg-gray-500 flex items-center justify-center">
        <LuImage className="size-12 text-gray-200"></LuImage>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-50">{title}</h4>
        <p className="text-gray-600 dark:text-gray-100 line-clamp-2 min-h-[3rem]">{description}</p>
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2">
            <LinkButton className="bg-gray-200" icon={LuGithub} href={repourl} target="_blank" />
            <LinkButton className="bg-gray-200" icon={LuGlobe} href={siteurl} target="_blank" />
          </div>
          <Authenticate>
            <IconButton
              className="bg-gray-200 text-red-400 "
              icon={LuTrash}
              onClick={() => handleDelete(id)}
            ></IconButton>
          </Authenticate>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
