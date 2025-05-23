import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../libs/firebase";
import type { Project } from "../types/Project";

export function useRead(): [Project[], boolean] {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const c = collection(db, "projects");
    const q = query(c);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const project = doc.data() as Omit<Project, "id">;
        return { id: doc.id, ...project };
      });
      setProjects(data);
      setLoading(false);
    });

    // Limpieza del listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  return [projects, loading];
}
