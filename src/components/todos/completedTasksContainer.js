// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheck } from "@fortawesome/free-solid-svg-icons"
// import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"

// redux imports
import { useSelector, useDispatch } from "react-redux"
import { addCompletedTodo, deleteCompletedTodo } from "../../reduxFiles/completedTodosSlice"
import { addTodo } from "../../reduxFiles/todosSlice"



export default function CompletedTasksContainer(props) {
    const dispatch = useDispatch()
    
    return (
        <div className="flex flex-row gap-4 mx-auto my-4 justify-between w-4/5 mobile:max-w-48">
            <div className="my-auto">
                <FontAwesomeIcon icon="fa-solid fa-circle" size="lg" color="#0369A1" onClick={() => {
                    dispatch(addTodo(props.completedTodo))
                    dispatch(deleteCompletedTodo(props.completedTodo))
                }}
                className="hover:scale-110"
                />
            </div>
            
            <div >
                <p>{props.completedTodo}</p>
            </div>

            <div className="flex flex-row gap-4 my-auto">
                <FontAwesomeIcon icon="fa-regular fa-circle-xmark" size="lg" color="red" onClick={() => dispatch(deleteCompletedTodo(props.completedTodo))} className="hover:scale-110"/>
            </div>
        </div>
    )
}