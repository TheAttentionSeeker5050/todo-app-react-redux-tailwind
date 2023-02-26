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
import { selectAllTodos, getTodosError, getTodosStatus, fetchTodos, replaceTodos } from "../../reduxFiles/todosSlice"
import { selectAllCompletedTodos, getCompletedTodosError, getCompletedTodosStatus, fetchCompletedTodos, replaceCompletedTodos } from "../../reduxFiles/completedTodosSlice"

// import hooks
import { useEffect } from "react"



export default function ListTodos() {
    
    // use selectors
    const todos = useSelector(selectAllTodos);
    const todosError = useSelector(getTodosError);
    const todosStatus = useSelector(getTodosStatus);

    const completedTodos = useSelector(selectAllCompletedTodos);
    const completedTodosError = useSelector(getCompletedTodosError);
    const completedTodosStatus = useSelector(getCompletedTodosStatus);

    const dispatch = useDispatch();
    


    useEffect(() => {
        if (todosStatus === "idle") {
            dispatch(fetchTodos())
        } 
    }, [todosStatus, dispatch])

    useEffect(() => {
        if (completedTodosStatus === "idle") {
            dispatch(fetchCompletedTodos())
        } 
    }, [completedTodosStatus, dispatch])


    



    // populate the todo content
    let todoContent;
    if (todosStatus=== "loading") {
        todoContent = <p>loading...</p>
    } else if (todosStatus === "succeeded") {
        todoContent = todos.map((todo) => <TodoContainer todo={todo}/>)
    } else if (todosStatus === "failed") {
        todoContent = <div><p>Sorry... There was an error with loading your todos.</p><br/> <p>{todosError}</p></div>
    }

    // populate the todo content
    let completedTodoContent;
    if (completedTodosStatus === "loading") {
        completedTodoContent = <p>loading...</p>
    } else if (completedTodosStatus === "succeeded") {
        completedTodoContent = completedTodos.map((completedTodo) => <CompletedTasksContainer completedTodo={completedTodo}/>)
    } else if (completedTodosStatus === "failed") {
        completedTodoContent = <div><p>Sorry... There was an error with loading your todos.</p><br/> <p>{completedTodosError}</p></div>
    }


    
    return (
        <main className="w-screen flex flex-col gap-5 flex-nowrap text-center content-between my-4">

            <h1 className="text-2xl text-left mx-6">
                Todos 
            </h1>

            
            <NewTodoComponent />

            <section className="mx-auto  w-4/5">
                {todoContent}
                
            </section>

            <h2 className="text-xl text-left mx-6">
                Done <FontAwesomeIcon icon="fa-solid fa-check " size="2xl" color="#0369A1"/>
            </h2>

            <section className="mx-auto  w-4/5">
                {completedTodoContent}

            </section>
            
        </main>
    )
}