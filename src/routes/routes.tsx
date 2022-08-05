import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import { RoutesPath } from "./Paths";

const Routers = () => {
  return useRoutes([
    {
      path: RoutesPath.HOME,
      element: <Home />,
    },
  ]);
};

export default Routers;