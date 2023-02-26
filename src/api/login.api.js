
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

    console.log(response.data)

    return response.data

    
} 