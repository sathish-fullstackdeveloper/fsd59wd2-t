import { Link } from "react-router-dom";

const Register = () => {
  return (
      <div>
          <h1>Register</h1>
          <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <br />
                <button type="submit">Register</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Register;