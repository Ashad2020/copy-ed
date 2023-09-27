import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
