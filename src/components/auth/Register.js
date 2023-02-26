
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAPIRequest } from "../../api/register.api";

export default function RegisterPage() {

    // initiate usenavigate
    const navigate = useNavigate();

    // initiate usestate
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirmation, setPasswordConfirmation ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");

    // handle form input depending on target name
    const handleFormInput = (e) => {

        // handle form changes
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        } else if (e.target.name === "passwordConfirmation") {
            setPasswordConfirmation(e.target.value);
        } else if (e.target.name === "firstName") {
            setFirstName(e.target.value);
        } else if (e.target.name === "lastName") {
            setLastName(e.target.value);
        } 
    }


    // handle submit
    const handleSubmit = async () => {

    }

    // if the user is already loged in, redirect to todos
    if (window.localStorage.getItem("isLoggedIn")=='true' && window.localStorage.getItem("webToken")) {
        navigate("/todos");

    } else {

        
        return (
            <main className="w-screen flex flex-col gap-5 flex-nowrap text-center content-evenly my-24">

                <h1 className="text-2xl">
                    Register
                </h1>

                <section className="">
                    <form className="flex flex-col gap-4 justify-between " onSubmit={() => handleSubmit}>
                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">First Name:</label>
                            <input type="text" name="firstName" className="border-2 border-sky-700 rounded-lg" value={firstName} onClick={(e) => handleFormInput(e)}></input>
                        </div>

                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">Last Name: </label>
                            <input type="text" name="lastName" className="border-2 border-sky-700 rounded-lg" value={lastName} onClick={(e) => handleFormInput(e)}></input>
                        </div>

                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">Email:</label>
                            <input type="email" name="email" className="border-2 border-sky-700 rounded-lg" value={email} onClick={(e) => handleFormInput(e)}></input>
                        </div>

                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">Password:</label> 
                            <input type="password" name="password" className="border-2 border-sky-700 rounded-lg" value={password} onClick={(e) => handleFormInput(e)}></input>
                        </div>

                        <div className="flex flex-col w-60 mx-auto justify-between gap-2">
                            <label className="text-left">Password Confirmation:</label> 
                            <input type="password" name="passwordConfirmation" className="border-2 border-sky-700 rounded-lg" value={passwordConfirmation} onClick={(e) => handleFormInput(e)}></input>
                        </div>

                        <div >
                            <button type="submit" className="bg-sky-700 w-32 p-3 text-white font-semibold rounded-xl my-12"
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