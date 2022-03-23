import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useAnswerQuery(id) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const db = getDatabase();
      const dataRef = ref(db, `answers/${id}/questions`);
      const dataQuery = query(dataRef, orderByKey());

      try {
        setLoading(true);

        setError(false);

        const snapshot = await get(dataQuery);

        setLoading(false);

        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log('Answer not found!');
          setError(true);
        }
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }

    fetchData();
  }, [id]);

  return {
    loading,
    error,
    data,
  };
}
