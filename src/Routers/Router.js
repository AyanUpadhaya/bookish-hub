import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import SearchBooks from "../Pages/SearchBooks";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/searchbooks',
                element:<SearchBooks></SearchBooks>
            }
        ]
    }
])

export default router