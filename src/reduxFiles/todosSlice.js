import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

import { API_BASE_URL } from '../constants/API.Constants';

const initialState = {
    value: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null
}


// async thunk for fetching todos with server
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    
    try {
        const response = await axios.get(API_BASE_URL+"/todos",  {
            headers: {
                Authorization: window.localStorage.getItem("webToken")
            }
        });

        console.log(response)
        
        return response.data.todos
    } catch (err) {
        console.log("error")
        return err.message;
    }
})

// renew todos on server
export const updateTodos = createAsyncThunk("todos/updateTodos", async (todos) => {
    
    try {
        const response = await axios.post(API_BASE_URL+"/todos", {
            todos: todos
        }, {
            headers: {
                Authorization: window.localStorage.getItem("webToken")
            }
        });
        return response.data;
    } catch (err) {
        return err.message;
    }
})



export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            try {
                state.value.push(action.payload)
            } catch {
                state.value = [action.payload]
            }
        },
        deleteTodo: (state, action) => {
            // to delete the element we will filter the values of the arrays by not being the payload string
            const newArray = state.value.filter((element) => {
                return element != action.payload
            })

            state.value = newArray
        },
        replaceTodos: (state, action) => {
            state.value = action.payload
        }
        
    }, 
    extraReducers(builder) {
        // builder param object that let us define additional case reducers 
        // that run in response to actions that run outside this slice
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                // adding the todos from the server to loaded todos var
                // const loadedTodos = action.payload
                

                // replacing the current state value with the  fetch todos from server
                // state.value = action.payload
                state.value = action.payload
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(updateTodos.fulfilled, (state,action) => {
                // there is no preparation needed here. Will leave it blank for now. 
                // In future iterations I may add extra data to the model.
            })

    }
})

// export selectors


export const selectAllTodos = (state) => state.todos.value;
export const getTodosStatus = (state) => state.todos.status;
export const getTodosError = (state) => state.todos.error;

// export reducer actions
export const { addTodo, deleteTodo, replaceTodos } = todosSlice.actions

// export store reducer
export default todosSlice.reducer
