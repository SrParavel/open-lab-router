import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { LuPlus } from "react-icons/lu";
import Modal from "../modals/Modal";
import NewProjectModal from "../modals/NewProjectModal";

function NewProjectButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal title="Creando nuevo proyecto" open={open} onClose={() => setOpen(false)}>
        <NewProjectModal onClose={() => setOpen(false)} />
      </Modal>
      <PrimaryButton icon={LuPlus} onClick={() => setOpen(true)}>
        Nuevo Proyecto
      </PrimaryButton>
    </>
  );
}

export default NewProjectButton;
