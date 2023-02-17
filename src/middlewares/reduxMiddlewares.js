// import constant
import { API_BASE_URL } from "../constants/API.Constants"

export const apiDelayedActionMiddleware = todos => next => action => {
    if (action.type === "todos/fetchTodos") {
        // make an api call to get the todos from the server 
        fetch(API_BASE_URL+"/todos", {
            method: "get",
            headers: {
                "Authentication": localStorage.getItem("webToken")
            }
        }).then(todosResponse => {
            // Dispatch an action with the todos we received
            todos.dispatch(replaceTodos(todosResponse.todos))
        })
    }

    return next(action)
}