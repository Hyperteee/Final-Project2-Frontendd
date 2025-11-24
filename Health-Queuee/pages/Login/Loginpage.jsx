import React, { useState } from "react";
import './Loginpage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const Loginpage = () => {

    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (action === "Sign Up") {
            console.log("Submitting Sign Up Data:", { name, email, password });
            alert(`Sign Up Successful for: ${email}`);
        } else {
            console.log("Submitting Login Data:", { email, password });
            alert(`Attempting Login for: ${email}`);
        }
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input bi bi-person">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={action === "Sign Up"}
                        />
                    </div>
                )}

                <div className="input bi bi-envelope">
                    <input
                        type="email"
                        placeholder="Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input bi bi-lock">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>

            {action === "Sign Up" ? null : (
                <div className="forgot-password">Lost Password? <span>Click Here</span></div>
            )}

            <div className="submit-container">
                <div
                    className={action === "Login" ? "submit small gray" : "submit small"}
                    onClick={() => { setAction("Sign Up") }}
                >
                    Sign Up
                </div>
                <div
                    className={action === "Sign Up" ? "submit small gray" : "submit small"}
                    onClick={() => { setAction("Login") }}
                >
                    Login
                </div>
                <button type="submit" style={{ display: 'none' }}></button>
            </div>

            <button type="submit" className="submit-main">
                {action}
            </button>

            <button className="submit-large" onClick={(e) => { e.preventDefault(); handleSubmit(e); }}>Enter</button>
        </form>
    );
}

export default Loginpage;