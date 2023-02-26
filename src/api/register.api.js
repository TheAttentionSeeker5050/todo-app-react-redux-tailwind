
import axios from "axios";

import { API_BASE_URL } from "../constants/API.Constants";


export async function registerAPIRequest(email, password, passwordConfirmation, firstName, lastName ) {


    // send login request to our server
    const response = await axios.post(API_BASE_URL+"/auth/register", 
        {
            email: email,
            password: password,
            confirmPassword: passwordConfirmation,
            firstName: firstName,
            lastName: lastName,

        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )

    return response.data

    
} 