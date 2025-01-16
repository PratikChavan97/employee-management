import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "./../components/Loader";
import Card from "../components/Card";

function ViewEmployee() {
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState({
    name: "",
    emailId: "",
    mobile: "",
    district: "",
    state: "",
    country: "",
    createdAt: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function getEmployee() {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`
        );
        setEmployee(res.data);
      } catch (err) {
        if (err) throw new Error("Employee doesn't exist");
      } finally {
        setIsLoading(false);
      }
    }

    getEmployee();
  }, [id]);

  return <>{isLoading ? <Loader /> : <Card employee={employee} />}</>;
}

export default ViewEmployee;
