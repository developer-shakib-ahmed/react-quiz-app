import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function LessionQuery() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const db = getDatabase();
      const dataRef = ref(db, 'videos');
      const dataQuery = query(dataRef, orderByKey(), startAt('0'), limitToFirst(8));

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(dataQuery);

        setLoading(false);

        if (snapshot.exists()) {
          setData((prevData) => [...prevData, ...Object.values(snapshot.val())]);
        } else {
          console.log('Lession not found!');
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, []);

  return {
    loading,
    error,
    data,
  };
}
