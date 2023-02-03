import { createSlice } from '@reduxjs/toolkit'

// completed todos slice
export const completedTodoSlice = createSlice({
    name: "completedTodos",
    initialState: {
        value: ["Walk the walk", "talk the talk"],
    },
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
        
    }
})

// export modules
export const { addCompletedTodo, deleteCompletedTodo } = completedTodoSlice.actions

export default completedTodoSlice.reducer
