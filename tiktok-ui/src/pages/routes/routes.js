import DefaultLayoutHomeFollowing from "../DefaultLayoutHomeFollowing/DefaultLayoutHomeFollowing";
import Following from "../DefaultLayoutHomeFollowing/Following/Following"
import Home from "../DefaultLayoutHomeFollowing/Home/Home"
import Uploading from "../Uploading/Uploading";
import RouteConfig from "../../routeConfig/routes";

const PublicRouter = [
    {path:RouteConfig.home, element:Home, defaultElement:DefaultLayoutHomeFollowing},
    {path:RouteConfig.following, element:Following, defaultElement:DefaultLayoutHomeFollowing}, 
    {path:RouteConfig.upload, element:Uploading}
]
const PrivateRouter = [];
export {PublicRouter, PrivateRouter}