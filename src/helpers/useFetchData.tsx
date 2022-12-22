import { useEffect, useState } from "react";

interface useFetchDataI {
  url: string;
  method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  body?: any;
}

const useFetchData = ({ url, method, body }: useFetchDataI) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
