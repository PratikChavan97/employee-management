import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

function Form({ lastId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    emailId: "",
    mobile: "",
    district: "",
    state: "",
    country: "",
    createdAt: "",
  });

  const [countries, setCountries] = useState([]);

  console.log(employee);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(
          `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`
        )
        .then((res) => setEmployee(res.data));
    }

    async function getCountries() {
      try {
        setIsLoading(true);
        const res = await axios.get(
          "https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/country"
        );
        setCountries(res.data);
      } catch (err) {
        if (err) throw new Error("Can't get countries");
      } finally {
        setIsLoading(false);
      }
    }
    getCountries();
  }, [id]);

  function handleAdd(e) {
    e.preventDefault();

    if (
      !employee.name ||
      !employee.emailId ||
      !employee.mobile ||
      !employee.district ||
      !employee.state ||
      !employee.country
    )
      return;

    const newEmployeeDetails = {
      name: employee.name,
      emailId: employee.emailId,
      mobile: employee.mobile,
      district: employee.district,
      state: employee.state,
      country: employee.country,
      createdAt: new Date().toISOString(),
    };

    axios.post(
      `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee`,
      newEmployeeDetails
    );
    navigate("/");
  }

  function handleUpdate(e) {
    e.preventDefault();

    const updatedEmployeeDetails = {
      name: employee.name,
      emailId: employee.emailId,
      mobile: employee.mobile,
      district: employee.district,
      state: employee.state,
      country: employee.country,
      createdAt: new Date().toISOString(),
    };

    axios.put(
      `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${employee.id}`,
      updatedEmployeeDetails
    );

    navigate("/");
  }

  return (
    <div className="fluid-container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">{id ? "Update User" : "Create User"}</h1>
      <form className="w-75 d-flex flex-column justify-content-center shadow rounded px-3 py-3">
        <div className="form-group row">
          <label className="">
            Name:
            <input
              type="text"
              placeholder="Employee Name"
              className="w-75 form-control mb-3 col"
              required
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </label>
        </div>

        <div className="form-group row">
          <label>
            Email:
            <input
              type="email"
              placeholder="Email"
              className="w-75 form-control mb-3 col"
              required
              value={employee.emailId}
              onChange={(e) =>
                setEmployee({ ...employee, emailId: e.target.value })
              }
            />
          </label>
        </div>

        <div className="form-group row">
          <label>
            Mobile:
            <input
              type="text"
              placeholder="Mobile"
              className="w-75 form-control mb-3 col"
              required
              value={employee.mobile}
              onChange={(e) =>
                setEmployee({ ...employee, mobile: e.target.value })
              }
            />
          </label>
        </div>

        <div className="form-group row">
          <label>
            District:
            <input
              type="text"
              placeholder="District"
              className="w-75 form-control mb-3 col"
              required
              value={employee.district}
              onChange={(e) =>
                setEmployee({ ...employee, district: e.target.value })
              }
            />
          </label>
        </div>

        <div className="form-group row">
          <label>
            State:
            <input
              type="text"
              placeholder="State"
              className="w-75 form-control mb-3 col"
              required
              value={employee.state}
              onChange={(e) =>
                setEmployee({ ...employee, state: e.target.value })
              }
            />
          </label>
        </div>

        <div className="form-group row">
          <label>
            Country:
            {isLoading ? (
              <Loader />
            ) : (
              <select
                className="w-75 form-control mb-3 col"
                value={employee.country}
                required
                onChange={(e) =>
                  setEmployee({ ...employee, country: e.target.value })
                }
              >
                {countries.map((country) => {
                  return (
                    <option key={country.id} value={country.country}>
                      {country.country}
                    </option>
                  );
                })}
              </select>
            )}
          </label>
        </div>

        <div className="d-flex justify-content-start gap-5">
          <button
            className="btn w-25 btn-success"
            onClick={(e) => (id ? handleUpdate(e) : handleAdd(e))}
          >
            {id ? "Update" : "Create"}
          </button>

          <button
            className="btn btn-primary ms-3 w-25"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
