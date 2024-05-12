import {createBrowserRouter, redirect} from "react-router-dom"
import Login from "../views/Login"
import {toast} from "react-toastify"
import BaseLayout from "../views/BaseLayout"
import Products from "../views/Products"
import AddProduct from "../views/AddProduct"
import EditProduct from "../views/EditProducts"
import EditImageProduct from "../views/EditImageProduct"
import Categories from "../views/Categories"
import AddUser from "../views/AddUser"

const router = createBrowserRouter([
    {
        path: "/",
        loader: () => {
            if(!localStorage.getItem('access_token')){
                toast.error('Pleasre login first', {position: 'bottom-right'})
                redirect('/login')
            }
            return redirect('/products')
        }
    },
    {
        path: "/login",
        element: <Login />,
        loader: () => {
            if(localStorage.getItem('access_token')){
                toast.error('You already logged in', {position: 'bottom-right'})
                return redirect('/products')
            }

            return null
        }
    },
    {
        element:<BaseLayout/>,
        loader:()=> {
            if (!localStorage.getItem('access_token')){
                toast.error('Please login first', {position: 'bottom-right'})
                return redirect('/login')
            }

            return null
        },
        children:[
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/add/products",
                element: <AddProduct />
            },
            {
                path: "/edit/products/:id",
                element: <EditProduct/>
            },
            {
                path: "/edit/products/:id/image",
                element: <EditImageProduct/>
            },
            {
                path: "/categories",
                element: <Categories/>
            },
            {
                path: "/add/user",
                element: <AddUser/>
            }
        ]
    }
])

export default router