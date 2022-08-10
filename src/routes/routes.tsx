import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import { RoutesPath } from "./Paths";
import Sidebar from "components/sidebar";

const Routers = () => {
  return useRoutes([
    {
      path: RoutesPath.HOME,
      // element: <Home />,
      element: <Sidebar />,

    },
  ]);
};

export default Routers;