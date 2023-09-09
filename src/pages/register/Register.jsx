import React from "react";
import { Link } from "react-router-dom";
import './register.scss'

function Register() {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>iSmile :)</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                        explicabo recusandae, eaque saepe minus debitis dolore soluta nulla
                        iusto magnam. Distinctio quae ut, laborum cupiditate assumenda ea
                        neque aut dolor.
                    </p>
                    <span>Don have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>

                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="PNameassword" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
