import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <h1>Welcome to our React Router App</h1>
            <p>Click on the below links to navigate to the respective pages</p>

            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    )
}

export default Home;