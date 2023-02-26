import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

import { API_BASE_URL } from '../constants/API.Constants';

const initialState = {
    value: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null
}

// async thunk for fetching todos with server
export const fetchCompletedTodos = createAsyncThunk("completedTodos/fetchCompletedTodos", async () => {
    try {
        const response = await axios.get(API_BASE_URL+"/completed-todos", {
            headers: {
                Authorization: window.localStorage.getItem("webToken")
            }
        });
        return response.data.completedTodos;
    } catch (err) {
        return err.message;
    }
})

// renew todos on server
export const updateCompletedTodos = createAsyncThunk("completedTodos/updateCompletedTodos", async (completedTodos) => {
    try {
        const response = await axios.post(API_BASE_URL+"/completed-todos", {
            completedTodos: completedTodos
        }, {
            headers:{
                Authorization: window.localStorage.getItem("webToken")
            }
        });
        return response.data;
    } catch (err) {
        return err.message;
    }
})


// completed todos slice
export const completedTodoSlice = createSlice({
    name: "completedTodos",
    initialState,
    reducers: {
        addCompletedTodo: (state, action) => {
            // console.log(action.payload)
            state.value.push(action.payload)
        },
        deleteCompletedTodo: (state, action) => {
            // to delete the element we will filter the values of the arrays by not being the payload string
            const newArray = state.value.filter((element) => {
                return element != action.payload
            })

            state.value = newArray
        },
        replaceCompletedTodos: (state, action) => {
            state.value = action.payload
        }
        
    }, extraReducers(builder) {
        // builder param object that let us define additional case reducers 
        // that run in response to actions that run outside this slice
        builder
            .addCase(fetchCompletedTodos.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchCompletedTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                // adding the todos from the server to loaded todos var
                const loadedCompletedTodos = action.payload
                console.log(loadedCompletedTodos)

                // replacing the current state value with the  fetch todos from server
                state.value = loadedCompletedTodos
            })
            .addCase(fetchCompletedTodos.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(updateCompletedTodos.fulfilled, (state,action) => {
                // there is no preparation needed here. Will leave it blank for now. 
                // In future iterations I may add extra data to the model.
            })

    }
})


// export selectors
export const selectAllCompletedTodos = (state) => state.todos.value;
export const getCompletedTodosStatus = (state) => state.todos.status;
export const getCompletedTodosError = (state) => state.todos.error;


// export reducer actions
export const { addCompletedTodo, deleteCompletedTodo, replaceCompletedTodos } = completedTodoSlice.actions

// export store
export default completedTodoSlice.reducer
