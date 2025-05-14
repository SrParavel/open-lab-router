import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../libs/firebase";
import { useState } from "react";

export function useDelete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function deleteProject(id: string) {
    setLoading(true);
    setError(null);

    try {
      await deleteDoc(doc(db, "projects", id));
      setLoading(false);
      return true;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      return false;
    }
  }

  return { deleteProject, loading, error };
}
