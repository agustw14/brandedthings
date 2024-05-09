import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Home from "../views/Home";
const url = 'https://phase2-aio.vercel.app'
import Detail from "../views/Detail";

const router = createBrowserRouter([
    {
        element: <BaseLayout/>,
        children:[
            {
                path: "/",
                element: <Home url={url}/>,
            },
            {
                path: "/viewDetail/:id",
                element: <Detail url={url}/>,
            }
        ]
    }
])

export default router