import { json } from "react-router-dom";
import axios from "axios";

import { API_BASE_URL } from "../constants/API.Constants";


export async function loginAPIRequest(email, password) {


    // send login request to our server
    const response = await axios.post(API_BASE_URL+"/auth/login", 
        {
            email: email,
            password: password
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )

    return response.data

    // const response = await fetch("http://localhost:8080/api/v1/auth/login",  {

    //     method: "POST",
    //     mode: "cors",
    //     cache: "no-cache",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: {
    //         email: email,
    //         password: password
    //     }
    // });



    // return response.json();
} 