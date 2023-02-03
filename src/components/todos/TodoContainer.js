// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheck } from "@fortawesome/free-solid-svg-icons"
// import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"

// redux imports
import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "../../reduxFiles/todosSlice"
import { addCompletedTodo } from "../../reduxFiles/completedTodosSlice"



export default function TodoContainer(props) {
    const dispatch = useDispatch()
    
    return (
        <div className="flex flex-row gap-4 mx-auto my-4 justify-between w-4/5 mobile:max-w-48">
            <div className="my-auto">
                <FontAwesomeIcon icon="fa-regular fa-circle" size="lg" color="#0369A1" onClick={() => {
                    dispatch(addCompletedTodo(props.todo))
                    dispatch(deleteTodo(props.todo))
                }}/>
            </div>
            
            <div >
                <p>{props.todo}</p>
            </div>

            <div className="flex flex-row gap-4 my-auto">
                <FontAwesomeIcon icon="fa-regular fa-circle-xmark" size="lg" color="red" onClick={() => dispatch(deleteTodo(props.todo))}/>
                {/* <FontAwesomeIcon icon="fa-regular fa-pen-to-square" size="lg" color="#0369A1"/> */}
            </div>
        </div>
    )
}