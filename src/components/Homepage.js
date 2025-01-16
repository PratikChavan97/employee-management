import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import axios from "axios";
import Loader from "./Loader";

function Homepage({ setLastId }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light w-100">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="w-100 rounded bg-white border shadow p-4">
            <Table data={data} />
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
