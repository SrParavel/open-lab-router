import type React from "react";

interface ModalProps {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, open, onClose, children }: ModalProps) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible pointer-events-none"}
      `}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={`
         transition-all bg-gray-50 rounded-lg overflow-hidden
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        {title && <h2 className="p-6 text-lg text-gray-800 font-bold border-b border-b-gray-300">{title}</h2>}
        {children}
      </section>
    </div>
  );
}
