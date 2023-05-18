import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </div>
  );
};

export default Main;