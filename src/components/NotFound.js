import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-danger">
      <h1>Page Not Found</h1>
      <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </div>
  );
}

export default NotFound;
