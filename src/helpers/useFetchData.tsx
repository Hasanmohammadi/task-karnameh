import { useEffect, useState } from "react";
import { QuestionI } from "../interfaces/interfaces";

interface useFetchDataI {
  url: string;
  method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  body?: any;
}

const useFetchData = ({ url, method, body }: useFetchDataI) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      setLoading(true);
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body,
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    })();

    setRefetch(false);
  }, [refetch]);

  return {
    data,
    loading,
    error,
    setRefetch,
  };
};

export default useFetchData;
