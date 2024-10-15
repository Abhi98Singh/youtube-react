import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = ({ sideBarState }) => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
