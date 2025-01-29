import ButtonLink from "./ButtonLink";
import { useNavigate } from "react-router-dom";

function Header({ query, handleQuery }) {
  const navigate = useNavigate();

  function handleSearch() {
    if (!query) return;
    navigate(`view/${query}`);
  }

  return (
    <header className="my-3">
      <h1>Employee Details</h1>

      <div className="w-100 d-flex justify-content-around gap-5 my-4">
        <div className="d-flex justify-content-around gap-2">
          <input
            type="search"
            placeholder="search by id"
            className="form-control"
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
          />
          <button className="btn btn-outline-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div>
          <ButtonLink path="create-employee" classes="btn btn-primary">
            Create a new employee
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
