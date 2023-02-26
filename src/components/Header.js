import { Link } from "react-router-dom"

export default function Header() {

    if (window.localStorage.getItem("isLoggedIn")=='true') {
        return (
            <nav className="w-screen">
                <ul className="flex flex-row gap-5 justify-end px-8 py-4 bg-sky-700 text-white mobile:justify-center mobile:gap-8">
                    <li><Link to={"/todos"}>Todos</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                    <li><Link to={"/logout"}>Logout</Link></li>
                </ul>
            </nav>
        )

    } else  {
        // if user is not logged in, display this header
        return (
            <nav className="w-screen">
                <ul className="flex flex-row gap-5 justify-end px-8 py-4 bg-sky-700 text-white mobile:justify-center mobile:gap-8">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                    <li><Link to={"/register"}>Register</Link></li>
                </ul>
            </nav>
        )
    }

}