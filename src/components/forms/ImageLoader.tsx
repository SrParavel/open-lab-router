import { useRef, useState, type ChangeEvent } from "react";
import IconButton from "../buttons/IconButton";
import { LuImage, LuUpload, LuX } from "react-icons/lu";

interface ImageUploaderProps {
  onChange?: (file: File | null) => void;
}

export default function ImageLoader({ onChange }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelect = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      onChange?.(file);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreview(null);
    onChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="h-32 border border-gray-300 bg-gray-50 shadow-md rounded-lg aspect-video flex items-center justify-center overflow-hidden">
        {preview ? (
          <img src={preview} alt="Vista previa" className="object-cover" />
        ) : (
          <LuImage className="text-gray-200 size-10"></LuImage>
        )}
      </div>

      <input type="file" accept="image/*" onChange={handleChange} ref={fileInputRef} className="sr-only" />

      <div className="flex flex-col gap-2">
        <IconButton type="button" icon={LuUpload} className="bg-gray-200" onClick={handleSelect}>
          Subir imagen
        </IconButton>
        <IconButton
          type="button"
          icon={LuX}
          className="bg-gray-200 disabled:bg-gray-200 disabled:text-gray-300"
          onClick={handleRemove}
          disabled={preview == null}
        >
          Eliminar imagen
        </IconButton>
      </div>
    </div>
  );
}
