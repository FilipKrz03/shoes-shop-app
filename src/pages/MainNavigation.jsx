import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const MainNavigation = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default MainNavigation;
