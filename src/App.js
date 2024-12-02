import "bootstrap/dist/css/bootstrap.min.css";
import UserTable from "./Component/tables";
import LoginComponent from "./Component/Login";
import Signup from "./Component/signup";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path="/Login" element={<LoginComponent />} />
          <Route path="/SignUp" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
