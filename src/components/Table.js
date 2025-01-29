import TableContent from "./TableContent";

function Table({ queryData, found }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>ID</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Actions</th>
        </tr>
      </thead>
      {found ? (
        <tbody>
          {queryData.map((item, i) => {
            return <TableContent item={item} index={i} key={item.id} />;
          })}
        </tbody>
      ) : (
        <p>No results found...</p>
      )}
    </table>
  );
}

export default Table;
