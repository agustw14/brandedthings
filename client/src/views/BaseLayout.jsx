import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar"

export default function BaseLayout(){
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}