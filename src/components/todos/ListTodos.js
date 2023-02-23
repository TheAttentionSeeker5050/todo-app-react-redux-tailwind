import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
// import { increment, decrement } from "../reduxFiles/testSlice"


// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheck } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-free/js/solid"

// import subComponents
import TodoContainer from "./TodoContainer"
import NewTodoComponent from "./NewTodo"
import CompletedTasksContainer from "./completedTasksContainer"

// import hooks
import { useEffect } from "react"



export default function ListTodos() {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        
    })
    

    const todos = useSelector((state) => state.todos.value)
    const completedTodos = useSelector((state) => state.completedTodos.value)




    
    return (
        <main className="w-screen flex flex-col gap-5 flex-nowrap text-center content-between my-4">

            <h1 className="text-2xl text-left mx-6">
                Todos 
            </h1>

            <NewTodoComponent todos={todos}></NewTodoComponent>

            <section className="mx-auto  w-4/5">
                { todos && todos.map((todo) => {
                    return <TodoContainer todo={todo}/>
                })}
                
            </section>

            <h2 className="text-xl text-left mx-6">
                Done <FontAwesomeIcon icon="fa-solid fa-check " size="2xl" color="#0369A1"/>
            </h2>

            <section className="mx-auto  w-4/5">
                {completedTodos.map((todo) => {
                    return <CompletedTasksContainer completedTodo={todo}/>
                })}
                
            </section>
            
        </main>
    )
}