import { loginAPIRequest } from "../../api/login.api";
import { useState } from "react";
import { redirect } from "react-router-dom";

export default function LoginPage() {

    // initiate usestate
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    // handlesubmit
    const handleSubmit = (e) => {

        let response = loginAPIRequest(email, password);

        // in case of error
        

        response.
            then(data => {
                window.localStorage.setItem("webToken", data.token);
                window.localStorage.setItem("isLoggedIn", true);
                console.log("request-success");
            })

            .catch(error => {
                window.localStorage.removeItem("webToken");
                window.localStorage.setItem("isLoggedIn", false);
                console.log("request-fail");
                
            })
            
    }

    const handleFormInput = (e) => {

        // handle form changes
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }
    // console.log(window.localStorage.getItem("isLoggedIn"))
    // check if user is logged in to redirect to todos
    if (window.localStorage.getItem("isLoggedIn")=='true') {
        window.location.href = "/todos";

    } else {
        
        return (
            <main className="w-screen flex flex-col gap-5 flex-nowrap text-center content-evenly my-24">

                <h1 className="text-2xl">
                    Login
                </h1>

                <section className="">
                    <form className="flex flex-col gap-4 justify-between" onSubmit={(e) => handleSubmit(e)}>

                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">Email:</label>
                            <input type="email" name="email" value={email} autoComplete="email" onChange={(e) => handleFormInput(e)} className="border-2 border-sky-700 rounded-lg"></input>
                        </div>

                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">Password:</label> 
                            <input type="password" name="password" autoComplete="password" value={password} onChange={(e) => handleFormInput(e)} className="border-2 border-sky-700 rounded-lg"></input>
                        </div>

                        <div >
                            <button type="submit"
                                className="bg-sky-700 w-32 p-3 text-white font-semibold rounded-xl my-12"
                                >
                                Submit
                            </button>
                        </div>

                    </form>
                </section>
            
            </main>
        )
    }
}