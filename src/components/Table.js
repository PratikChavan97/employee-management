import TableContent from "./TableContent";

function Table({ query, queryData }) {
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

      <tbody>
        {queryData.map((item, i) => {
          return <TableContent item={item} index={i} key={item.id} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
