import First from "./components/first"
import Vip from "./components/vip"
import Shop from "./components/shop"
import User from "./components/myInfo"
const routers = [
    {
        path:'/first',
        name:"首页",
        component:First,
        exact:false,
    },
    {
        path:'/vip',
        name:"会员",
        component:Vip,
        exact:false,
    },
    {
        path:'/shop',
        name:"购物车",
        component:Shop,
        exact:false,
    },
    {
        path:'/user',
        name:"我的",
        component:User,
        exact:false,
    },
]
export default routers;