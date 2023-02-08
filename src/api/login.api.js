import { json } from "react-router-dom";

export async function loginAPIRequest(email, password) {

    // send login request to our server
    const response = await fetch("http://localhost:8080/api/v1/auth/login",  {

        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    return response.json();
} 