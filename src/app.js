import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";
import { useState } from "react";
import ViewEmployee from "./pages/ViewEmployee";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  const [lastId, setLastId] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setLastId={setLastId} />} />
        <Route
          path="create-employee"
          element={<AddEmployee lastId={lastId} />}
        />
        <Route path="update-employee/:id" element={<EditEmployee />} />
        <Route path="delete/:id" element={<DeleteEmployee />} />
        <Route path="view/:id" element={<ViewEmployee />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
