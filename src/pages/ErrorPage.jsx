import { useRouteError } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const ErrorPage = () => {

    const error = useRouteError();

    let title = 'An Error !';
    let message = 'Something went wrong';

    if(error.status === 500){
        message = error.data.message
    }

    if(error.status === 404){
        message = 'Could not find a page !'
    }

return(
    <>
    <MainNavigation />
    <div style={{textAlign:'center' , marginTop:'30px'}}>
    <h1>{title}</h1>
    <p>{message}</p>
    </div>
    </>
)
}

export default ErrorPage;