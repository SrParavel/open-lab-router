import type React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
// import ImageLoader from "../forms/ImageLoader";
import TextArea from "../forms/TextArea";
import TextField from "../forms/TextField";
import { LuGithub, LuLink } from "react-icons/lu";
import { useState } from "react";
import { description, repourl, siteurl, title } from "../../config/fields";
import { useCreate } from "../../hooks/useCrate";

interface NewProjectModalProps {
  onClose: () => void;
}

function NewProjectModal({ onClose }: NewProjectModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    repourl: "",
    siteurl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { createProject, loading, error } = useCreate();

  async function handleSubmit() {
    await createProject(formData).then(onClose);
  }

  if (error) return <h1>{error.message}</h1>;

  return (
    <form className="bg-gray-50 rounded-lg p-6 flex flex-col gap-2 w-lg">
      {/* <ImageLoader></ImageLoader> */}
      <TextField value={formData.title} onChange={handleChange} {...title} />
      <TextField value={formData.repourl} onChange={handleChange} icon={LuGithub} {...repourl} />
      <TextField value={formData.siteurl} onChange={handleChange} icon={LuLink} {...siteurl} />
      <TextArea value={formData.description} onChange={handleChange} rows={4} {...description} />
      <div className="flex flex-row-reverse justify-between">
        <PrimaryButton type="button" onClick={handleSubmit}>
          Crear Proyecto
        </PrimaryButton>
        <SecondaryButton type="button" onClick={onClose}>
          Cancelar
        </SecondaryButton>
      </div>
    </form>
  );
}

export default NewProjectModal;
