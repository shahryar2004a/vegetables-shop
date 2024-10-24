import Home from "./pages/Home/Home"
import AboutUs from "./pages/AboutUs/AboutUs"
import ContactUs from "./pages/ContactUs/ContactUs"
import Cart from "./pages/Cart/Cart"
import Blogs from "./pages/Blogs/Blogs"
import Blog from "./pages/Blog/Blog"
import WishList from "./pages/WishList/WishList"
import ProductPage from "./pages/ProductPage/ProductPage"
import Shop from "./pages/Shop/Shop"

let routes=[
    {path:'/',element:<Home/>},
    {path:'/aboutUs',element:<AboutUs/>},
    {path:'/contactUs',element:<ContactUs/>},
    {path:'/cart',element:<Cart/>},
    {path:'/shop',element:<Shop/>},
    {path:'/blogs',element:<Blogs/>},
    {path:'/blog',element:<Blog/>},
    {path:'/wishlist',element:<WishList/>},
    {path:'/product/:id',element:<ProductPage/>},

]

export default routes;