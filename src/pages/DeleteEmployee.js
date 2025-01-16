import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteEmployee() {
  const { id } = useParams();
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  console.log(confirm);
  useEffect(() => {
    if (id && confirm) {
      axios.delete(
        `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`
      );
    }
  }, [id, confirm]);

  function handleConfirmYes() {
    setConfirm((confirm) => !confirm);
    navigate("/");
  }

  return (
    <div className="fluid-container vh-100 d-flex flex-column row justify-content-center justify-content-center align-items-center">
      <div className="col-lg-4 col-sm-3"></div>
      <div className="border p-3 bg-primary-subtle rounded col-sm-6 col-lg-4">
        <h2 className="mb-4">Do you really want to delete an employee data?</h2>

        <div className="d-flex justify-content-between">
          <button
            onClick={handleConfirmYes}
            className="btn btn-md w-25 btn-success"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setConfirm(false);
              navigate(-1);
            }}
            className="btn btn-md w-25 btn-danger"
          >
            No
          </button>
        </div>
      </div>
      <div className="col-lg-4 col-sm-3"></div>
    </div>
  );
}

export default DeleteEmployee;
