import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";

export const publicRoutes = [
    {
        path: "/",
        component: Home,
      },

      {
        path:"/cart",
        component: Cart,
      },
      {
        path:"/wishlist",
        component: Wishlist,
      }
];