import ProjectCard from "../components/ProjectCard";
import { useRead } from "../hooks/useRead";

function App() {
  const [projects, loading] = useRead();
  if (loading) return <p>Loading projects...</p>;

  return (
    <div className="grid grid-cols-4 gap-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          repourl={project.repourl}
          siteurl={project.siteurl}
          id={project.id}
        />
      ))}
    </div>
  );
}

export default App;
