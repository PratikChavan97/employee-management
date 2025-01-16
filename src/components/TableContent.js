import ButtonLink from "./ButtonLink";

function TableContent({ item, index }) {
  console.log(item.avatar);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.id}</td>

      <td>{item.name}</td>
      <td>{item.mobile}</td>

      <td>
        <ButtonLink path={`view/${item.id}`} classes="btn btn-sm btn-info me-2">
          View
        </ButtonLink>
        <ButtonLink
          path={`update-employee/${item.id}`}
          classes="btn btn-sm btn-primary me-2"
        >
          Edit
        </ButtonLink>

        <ButtonLink path={`delete/${item.id}`} classes="btn btn-sm btn-danger">
          Delete
        </ButtonLink>
      </td>
    </tr>
  );
}

export default TableContent;
