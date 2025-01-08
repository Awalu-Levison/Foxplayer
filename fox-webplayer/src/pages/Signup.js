import React from "react";

const Signup = () => {
    return (
    <div>
        <form>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                
                <label htmlFor="username" required><b>Username</b></label>
                <input type="text" placeholder="username" name="username" id="username" />

                <label htmlFor="email" required><b>Email</b></label>
                <input type="text"placeholder="Enter Email" name="email" id="email" />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter password" name="pswd" id="pswd" required />

                <label htmlFor="pswd-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat your password" name="pswd-repeat" id="pswd-repeat" required />

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="submit" className="registerbtn">register</button>
            </div>
            <div className="container signin">
                <p>Already have an account? <a href="#">Login in</a>.</p>
            </div>

        </form>

    </div>
    );
};
/**
 *  return <div>
        <form>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                
                <label htmlFor="username" required><b>Username</b></label>
                <input type="text" placeholder="username" name="username" id="username" />

                <label htmlFor="email" required><b>Email</b></label>
                <input type="text"placeholder="Enter Email" name="email" id="email" />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter password" name="pswd" id="pswd" required />

                <label htmlFor="pswd-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat your password" name="pswd-repeat" id="pswd-repeat" required />
                </hr>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="submit" className="registerbtn">Submit</button>
            </div>
            <div className="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>

        </form>

    </div>
};
 */

export default Signup;