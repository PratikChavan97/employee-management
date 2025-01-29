import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import axios from "axios";
import Loader from "./Loader";

function Homepage({ setLastId }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [found, setFound] = useState(true);

  let queryData;
  if (query) {
    queryData = data.filter((item) => item.id === query);
  } else {
    queryData = data;
  }

  useEffect(() => {
    async function getEmployees() {
      try {
        setIsLoading(true);
        const res = await axios.get(
          "https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee"
        );
        setData(res.data);
        setLastId(res.data[res.data.length - 1].id * 1);
      } catch (err) {
        if (err) throw new Error("Data fetching failed");
      } finally {
        setIsLoading(false);
      }
    }
    getEmployees();
  }, [setLastId]);

  function handleQuery(id) {
    setQuery(id);
    setFound((found) =>
      data.map((item) => (Number(item.id) === Number(query) ? true : false))
    );
  }

  console.log(found);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light w-100">
      <>
        <Header query={query} handleQuery={handleQuery} />

        <div className="w-100 rounded bg-white border shadow p-4">
          {isLoading ? (
            <Loader />
          ) : (
            <Table queryData={queryData} found={found} />
          )}
        </div>
      </>
    </div>
  );
}

export default Homepage;
