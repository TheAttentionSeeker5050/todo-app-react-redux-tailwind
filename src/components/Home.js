import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
// import { increment, decrement } from "../reduxFiles/testSlice"


// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheck } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-free/js/solid"


export default function HomePage() {
    // const count = useSelector((state) => state.test.value)
    // const dispatch = useDispatch()
    
    return (
        <main className="w-screen flex flex-col gap-5 flex-nowrap text-center content-evenly my-24">

            <h1 className="text-2xl">
                Todo Application <FontAwesomeIcon icon="fa-solid fa-check " size="2xl" color="#0369A1"/>
            </h1>

            
            <p>To Do gives you focus, from work to play.</p>
            <button className="bg-sky-700 w-36 mx-auto p-3 text-white font-semibold rounded-xl my-12"><Link to={"/register"}>Get started</Link></button>
            <p className="text-slate-800 font-semibold text-lg"><Link to={"#"}>Learn more</Link></p>
        </main>
    )
}