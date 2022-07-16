import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*Index means default path*/}
          <Route index element={<EmployeeList />}></Route>

          <Route path="/" element={<EmployeeList />}></Route>

          <Route path="/employeeList" element={<EmployeeList />}></Route>

          <Route path="/addEmployee" element={<AddEmployee />}></Route>

          <Route path="/editEmployee/:id" element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
