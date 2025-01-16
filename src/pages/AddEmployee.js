import Form from "../components/Form";

function AddEmployee({ lastId }) {
  return (
    <div>
      <Form lastId={lastId} />
    </div>
  );
}

export default AddEmployee;
