import { API_BASE_URL } from "../../constants/API.Constants"

// import reducers
import { replaceTodos } from "../../reduxFiles/todosSlice"
import { useDispatch } from "react-redux"

// export const fetchTodos = (dispatch) => {
//     // this attempts to get todos from the server
//     return (
//         // make an api call to get the todos from the server 
//         fetch(API_BASE_URL+"/todos", {
//             method: "get",
//             headers: {
//                 "Authorization": localStorage.getItem("webToken")
//             }
//         })
//             .then(response => {
//                 console.log("response:",response.status)
//                 return response.text()
//             })
//             .then(data => {
//                 // Dispatch an action with the todos we received
//                 console.log("data:",data)
//                 // dispatch(replaceTodos(data))
//             })
//             .catch(error => {
//                 console.error("error:",error.message)
//             })

//     )
// }

const getTodosData = async () => {
    const response = await fetch(API_BASE_URL+"/todos", {
        method: "get",
        headers: {
            "Authorization": localStorage.getItem("webToken")
        }
    })

    return response.json()
}

export const fetchTodos = (dispatch) => {
    
    const response = getTodosData()
    response.then(data => {
        dispatch(replaceTodos(data.todos))
    })
    
}