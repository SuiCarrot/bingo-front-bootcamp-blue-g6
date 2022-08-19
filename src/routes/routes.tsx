import GamePage from "pages/Game";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import { RoutesPath } from "./Paths";
import Cartela from "components/cartela";
import PlayerModal from "components/Modals/PlayerModal";

const Routers = () => {
  return useRoutes([
    {
      path: RoutesPath.HOME,
      element: <Home />,
    },
    {
      path: RoutesPath.CAPYBARA_GAME,
      element: <GamePage />,
    },
    {
      path: RoutesPath.CREATE_PLAYER,
      element: <PlayerModal />
    }
  ]);
};

export default Routers;
