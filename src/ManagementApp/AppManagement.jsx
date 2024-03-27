import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Goals from "./pages/Goals";
import Signin from "./pages/Signin";
import Department from "./components/Department";
import Settings from "./pages/Settings";
import HomeManagement from "./pages/HomeManagement";

function AppManagement() {
  return (
    <BrowserRouter>
      <Routes element={<Layout />}>
        <Route element={<Layout />}>
          <Route index path="dashboard" element={<Home />} />
          <Route path="departments" element={<Departments />} />
          <Route path="departments/:department_id" element={<Department />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="goals" element={<Goals />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppManagement;
