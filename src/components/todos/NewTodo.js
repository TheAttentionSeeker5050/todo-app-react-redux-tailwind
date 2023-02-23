// redux imports
import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "../../reduxFiles/todosSlice"



// 3rd party hooks
import { useState } from "react"


// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/js/solid";
import { useNavigate } from "react-router-dom";

import { updateTodos, selectAllTodos } from "../../reduxFiles/todosSlice";



export default function NewTodoComponent() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    // create new state variable
    const [newTodoText, setNewTodoText] = useState("") 
    const [addRequestStatus, setAddRequestStatus] = useState("idle");
    

    // handle new todo text change
    const handleNewTodoChange = (event) => {
        setNewTodoText(event.target.value)
    }

    let allTodos = useSelector(selectAllTodos)

    const handleCreateNewTask = async (event) => {
        try {
            dispatch(addTodo(newTodoText));
            setAddRequestStatus("pending");
            dispatch(updateTodos(allTodos)).unwrap();
        } catch (error) {

        } finally {
            navigate("/todos");
        }

        // dispatch(addTodo(newTodoText))
        
        // delete the searcch bar and change the focus
        // setNewTodoText("")
        // document.getElementById("search-bar").focus()
    }

    const handlePressEnter = (event) => {
        // we also want wo execute the new task event on pressing enter
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            handleCreateNewTask(event)
        }
    }

    return (
        <div className="rounded-2xl border-2 w-60 mx-auto border-slate-300 active:border-sky-700  focus-within:border-sky-700 ">
            <input id="search-bar" type="text" placeholder="New Todo" className="p-2 focus-within:border-0 " value={newTodoText} 
            onChange={(event) => {handleNewTodoChange(event)}} onKeyDown={(event) => handlePressEnter(event)}/>
            <button  onClick={(event) => handleCreateNewTask(event)}><FontAwesomeIcon icon="fa-solid fa-circle-plus" size="xl" color="#0369A1" /></button>
        </div>
    )
}