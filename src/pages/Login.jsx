import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div>
          <h1>Login</h1>
            <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <br />
              <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  )
}

export default Login;