import { useRoutes } from "react-router";
import Benefits from './benefits';
import Voting from "./voting";
import Badges from './badges';

const MemberHubRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Benefits /> },
        { path: "/voting", element: <Voting /> },
        { path: "/badges", element: <Badges /> },
    ]);
    return routes;
};
export default MemberHubRoutes;