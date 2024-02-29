// QueriesHandler.js
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const db = getFirestore();

export default function QueriesHandler() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchCategories = async () => {
      try {
        const categoriesRef = collection(db, "categorias");
        const orderedCategoriesQuery = query(categoriesRef, orderBy("priority"));
        const snapshot = await getDocs(orderedCategoriesQuery);
        const categoriesMap = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setCategories(categoriesMap);
        setLoading(false);
      } catch (error) {
        console.error("Error obteniendo las categorías:", error);
        setLoading(false);
      }
    };

    fetchCategories();

  }, []);

  return { categories, loading };
}
