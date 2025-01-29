import ButtonLink from "./ButtonLink";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "./../components/Loader";

function Card() {
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
  return (
    <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="card bg-light w-100">
        <div className="card-body d-flex justify-content-around shadow">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div>
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="w-100 h-100 border rounded"
                />
              </div>

              <div>
                <h3 className="mb-3">Employee Details</h3>

                <p>
                  <span className="text-uppercase">
                    <strong>ID: </strong>
                  </span>
                  {employee.id}
                </p>
                <p>
                  <span className="text-uppercase">
                    <strong>Name: </strong>
                  </span>
                  {employee.name}
                </p>
                <p>
                  <span className="text-uppercase">
                    <strong>Email: </strong>
                  </span>
                  {employee.emailId}
                </p>
                <p>
                  <span className="text-uppercase">
                    <strong>Mobile: </strong>
                  </span>
                  {employee.mobile}
                </p>
                <p>
                  <span className="text-uppercase">
                    <strong>District: </strong>
                  </span>
                  {employee.district}
                </p>
                <p>
                  <span className="text-uppercase">
                    <strong>State: </strong>
                  </span>
                  {employee.state}
                </p>
                <p>
                  <span className="text-uppercase">
                    <strong>Country: </strong>
                  </span>
                  {employee.country}
                </p>

                <p>
                  <span className="text-uppercase">
                    <strong>Created At: </strong>{" "}
                  </span>
                  {employee.createdAt}
                </p>
                <div className="d-flex justify-content-around">
                  <ButtonLink
                    path={`/update-employee/${employee.id}`}
                    classes="btn btn-primary me-2"
                  >
                    Edit
                  </ButtonLink>

                  <ButtonLink
                    path={`/delete/${employee.id}`}
                    classes="btn btn-danger me-2"
                  >
                    Delete
                  </ButtonLink>

                  <ButtonLink path="/" classes="btn btn-primary">
                    Back
                  </ButtonLink>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
