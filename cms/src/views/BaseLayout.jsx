import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar";

const BaseLayout =() => {
    return (
        <>
            <Navbar/>
            <section className="container-fluid" id="home-section">
                <div className="row">
                <Sidebar />
                <Outlet />
                </div>
            </section>
        </>
    )
}

export default BaseLayout
