import { useState, useEffect } from "react";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date(),
        }))
      );
    });

    return unsubscribe;
  }, []);

  const addProject = async (title: string, description: string) => {
    await addDoc(collection(db, "projects"), {
      title,
      description,
      createdAt: serverTimestamp(),
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      owner: {
        name: "James Doe",
        avatar: "https://i.pravatar.cc/150?u=james",
      },
    });
  };

  return { projects, addProject };
}
