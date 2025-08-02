import DefaultLayoutHomeFollowing from "../DefaultLayoutHomeFollowing/DefaultLayoutHomeFollowing";
import Following from "../DefaultLayoutHomeFollowing/Following/Following"
import Home from "../DefaultLayoutHomeFollowing/Home/Home"
import Uploading from "../Uploading/Uploading";

const PublicRouter = [
    {path:'/', element:Home, defaultElement:DefaultLayoutHomeFollowing},
    {path:'/following', element:Following, defaultElement:DefaultLayoutHomeFollowing}, 
    {path:'/uploading', element:Uploading}
]
const PrivateRouter = [];
export {PublicRouter, PrivateRouter}