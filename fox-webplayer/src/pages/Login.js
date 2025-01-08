import React from "react";


const Login = () => {
    return (
    <div>
        <form>
            <div className="container">
                <h1>Login</h1>
                <p>Please login here.</p>
                <label htmlFor="email" required><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email"></input>

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter password" name="pswd" id="pswd" required></input>

                <p>By signing in you agree to our <a href="#">Terms & Privacy</a></p>
                <button type="submit" className="registerbtn">Login</button>
            </div>
            <div className="container signin">
                <p>Don't have an account? <a href="#">register</a>.</p>
            </div>

        </form>
    </div>
    );
};

export default Login;