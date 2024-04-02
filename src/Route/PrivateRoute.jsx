import { useContext } from "react";
import { AuthContext } from "../component/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    // set loading
    if(loading){
        return  <span className="loading loading-spinner loading-lg"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;