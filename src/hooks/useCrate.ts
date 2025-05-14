import { collection, addDoc } from "firebase/firestore";
import { db } from "../libs/firebase";
import type { Project } from "../types/Project";
import { useState } from "react";

export function useCreate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function createProject(project: Omit<Project, "id">) {
    setLoading(true);
    setError(null);

    try {
      const docRef = await addDoc(collection(db, "projects"), project);
      setLoading(false);
      return docRef.id;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      return null;
    }
  }

  return { createProject, loading, error };
}
