// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-free/js/solid"

// import error hooks
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError()

    return (
        
        <div className="flex flex-col flex-nowrap gap-12 text-center my-20">
            <FontAwesomeIcon icon=" fa-triangle-exclamation" size="4x" color="rgb(250 204 21)"/>
            <h2 className="text-2xl font-semibold">Oops! some error occurred:</h2>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}