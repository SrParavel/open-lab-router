import { LuGithub, LuGlobe, LuImage } from "react-icons/lu";
import type { Project } from "../types/Project";
import LinkButton from "./buttons/LinkButton";

function ProjectCard({ id, title, description, repourl, siteurl }: Project) {
  return (
    <article className="flex flex-col aspect-square bg-gray-50 rounded-2xl shadow overflow-hidden hover:shadow-md transition">
      <div className="grow bg-gray-400 flex items-center justify-center">
        <LuImage className="size-12 text-gray-200"></LuImage>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 line-clamp-2 min-h-[3rem]">{description}</p>
        <div className="flex gap-2">
          <LinkButton className="bg-gray-200" icon={LuGithub} href={repourl} target="_blank" />
          <LinkButton className="bg-gray-200" icon={LuGlobe} href={siteurl} target="_blank" />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
