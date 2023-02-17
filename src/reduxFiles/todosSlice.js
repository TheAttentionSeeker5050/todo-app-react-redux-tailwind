import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        value: ["Walk the walk", "talk the talk"]
    },
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
        
    }
})

export const { addTodo, deleteTodo, replaceTodos } = todosSlice.actions

export default todosSlice.reducer
