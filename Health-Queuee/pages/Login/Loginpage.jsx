import React, { useState } from "react";
import './Loginpage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const Loginpage = () => {

    const [action,setAction] = useState("Sign Up")

    return ( 
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input bi bi-person">
                    <input type="text" placeholder="์Name" />
                </div>
                <div className="input bi bi-envelope">
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className="input bi bi-lock">
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here</span></div>
            <div className="submit-container">
                <div className={action === "Login"?"submit gray":"submit"}>Sign Up</div>
                <div className={action === "Sign Up"?"submit gray":"submit" }>Login</div>
            </div>
        </div>
     );
}
 
export default Loginpage   ;