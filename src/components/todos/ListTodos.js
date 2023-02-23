import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"


// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheck } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-free/js/solid"

// import subComponents
import TodoContainer from "./TodoContainer"
import NewTodoComponent from "./NewTodo"
import CompletedTasksContainer from "./completedTasksContainer"

// import from redux store slices
import { selectAllTodos, getTodosError, getTodosStatus, fetchTodos } from "../../reduxFiles/todosSlice"

// import hooks
import { useEffect } from "react"



export default function ListTodos() {
    
    // use selectors
    const todos = useSelector(selectAllTodos);
    const todosError = useSelector(getTodosError);
    const todosStatus = useSelector(getTodosStatus);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (todosStatus === "idle") {
            dispatch(fetchTodos)
        }
    }, [todosStatus, dispatch])
    

    // const todos = useSelector((state) => state.todos.value)
    const completedTodos = useSelector((state) => state.completedTodos.value)




    
    return (
        <main className="w-screen flex flex-col gap-5 flex-nowrap text-center content-between my-4">

            <h1 className="text-2xl text-left mx-6">
                Todos 
            </h1>

            <NewTodoComponent />

            <section className="mx-auto  w-4/5">
                {<>{todosStatus}</>}
                { todos && todos.map((todo) => {
                    return <TodoContainer todo={todo}/>
                })}

                {(todosStatus === "loading") && <p>Loading...</p>}

                {(todosStatus === "failed" && <div><p>Sorry... There was an error with loading your todos.</p><br/> <p>{todosError}</p></div>)}
                
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