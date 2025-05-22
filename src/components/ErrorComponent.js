import { useRouteError } from "react-router-dom";   
const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="error">
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}
export default ErrorComponent;