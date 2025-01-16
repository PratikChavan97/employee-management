import TableContent from "./TableContent";

function Table({ data }) {
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
        {data.map((item, i) => {
          return <TableContent item={item} index={i} key={item.emailID} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
