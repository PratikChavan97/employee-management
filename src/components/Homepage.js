import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import axios from "axios";
import Loader from "./Loader";
import Pagination from "../features/Pagination";

function Homepage({ setLastId }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

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
  }

  const lastIndex = currentPage * entriesPerPage;
  const firstIndex = lastIndex - entriesPerPage;

  queryData = queryData.slice(firstIndex, lastIndex);

  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="bg-light col-md-10">
        <>
          <Header query={query} handleQuery={handleQuery} />

          <div className="rounded bg-white border shadow p-4">
            {isLoading ? (
              <Loader />
            ) : (
              <Table query={query} queryData={queryData} />
            )}
          </div>
          <Pagination
            total={data.length}
            entriesPerPage={entriesPerPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
}

export default Homepage;
