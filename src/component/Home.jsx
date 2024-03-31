import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h3 className="text-3xl">{user.name}</h3>
        </div>
    );
};

export default Home;