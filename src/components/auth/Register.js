
import { useState } from "react";

export default function RegisterPage() {

    if (window.localStorage.getItem("isLoggedIn")) {
        window.location.href = "/todos";

    } else {

        
        return (
            <main className="w-screen flex flex-col gap-5 flex-nowrap text-center content-evenly my-24">

                <h1 className="text-2xl">
                    Register
                </h1>

                <section className="">
                    <form className="flex flex-col gap-4 justify-between " >
                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">First Name:</label>
                            <input type="text" name="firstName" className="border-2 border-sky-700 rounded-lg"></input>
                        </div>

                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">Last Name: </label>
                            <input type="text" name="lastName" className="border-2 border-sky-700 rounded-lg"></input>
                        </div>

                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">Email:</label>
                            <input type="email" name="email" className="border-2 border-sky-700 rounded-lg"></input>
                        </div>

                        <div className="flex flex-col w-60 mx-auto justify-between">
                            <label className="text-left">Password:</label> 
                            <input type="password" name="password" className="border-2 border-sky-700 rounded-lg"></input>
                        </div>

                        <div className="flex flex-col w-60 mx-auto justify-between gap-2">
                            <label className="text-left">Password Confirmation:</label> 
                            <input type="password" name="passwordConfirmation" className="border-2 border-sky-700 rounded-lg"></input>
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