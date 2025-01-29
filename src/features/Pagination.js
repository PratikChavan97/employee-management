function Pagination({ total, entriesPerPage, setCurrentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(total / entriesPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-2">
      {pages.map((page) => (
        <button
          key={page}
          className="border border-info rounded"
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
