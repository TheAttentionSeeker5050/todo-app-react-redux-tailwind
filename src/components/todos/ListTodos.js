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

export default function ListTodos() {
    const todos = useSelector((state) => state.todos.value)
    const dispatch = useDispatch()



    
    return (
        <main className="w-screen flex flex-col gap-5 flex-nowrap text-center content-between my-4">

            <h1 className="text-2xl text-left mx-6">
                Todos 
            </h1>

            <NewTodoComponent></NewTodoComponent>

            <section className="mx-auto  w-4/5">
                {todos.map((todo) => {
                    return <TodoContainer todo={todo}/>
                })}
                
            </section>

            <h2 className="text-xl text-left mx-6">
                Done <FontAwesomeIcon icon="fa-solid fa-check " size="2xl" color="#0369A1"/>
            </h2>
            
        </main>
    )
}