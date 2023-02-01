import { Outlet } from "react-router-dom";

// import common layout elements
import Footer from "./Footer";
import Header from "./Header";

export default function Root() {
    return (
    <div className="min-h-screen flex flex-col content-around">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>)
}