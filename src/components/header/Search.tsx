import type { HTMLAttributes } from "react";
import { LuFilter, LuListFilter, LuSearch } from "react-icons/lu";
import IconButton from "../buttons/IconButton";

function Search({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <header className={`bg-gray-50 p-2 m-4 rounded-lg items-center flex ${className}`} {...props}>
      <div className="flex gap-2 items-center grow">
        <LuSearch className="text-gray-800 size-5 stroke-3 m-2"></LuSearch>
        <input type="text" placeholder="Buscar proyectos..." className="w-full outline-none" />
      </div>
      <IconButton icon={LuFilter}>Filtrar</IconButton>
      <IconButton icon={LuListFilter}>Ordenar</IconButton>
    </header>
  );
}

export default Search;
