import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        value: ["Walk the walk", "talk the talk"]
    },
    reducers: {
        addTodo: (state, action) => {
            // console.log(action.payload)
            state.value.push(action.payload)
        },
        deleteTodo: (state, action) => {
            // to delete the element we will filter the values of the arrays by not being the payload string
            const newArray = state.value.filter((element) => {
                return element != action.payload
            })

            state.value = newArray
        },
        editTodo: (state, action) => {},
        completeTodo: (state, action) => {},
        
    }
})

export const { addTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer
