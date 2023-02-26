import { useNavigate } from "react-router";


export default function LogoutRedirect() {
    // use navigate for redirecting to login page
    const navigate = useNavigate();

    window.localStorage.removeItem("webToken");
    window.localStorage.removeItem("isLoggedIn");

    navigate("/login")
}