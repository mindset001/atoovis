import React from "react";
import '../../styles/auth/signin.css'

const SignIn = () => {
    return(
        <div className="sign">
           <div className="wel">
           <h1> Welcome!</h1>
           <p>Sign-in to get access to great shopping
            deals from trusted vendors</p>
           </div>
            <form action="">
               <div className="signin">
               <div className="new">
                    <label htmlFor="">Email Address</label>
                    <input type="text" />
                </div>
                <div className="new2">
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
               </div>
                <div className="forgot">
                    <div><input type="checkbox" /> <span>Remember me</span></div>
                    <div>
                        <p>Forgot password?</p>
                    </div>
                </div>

                <button className="btn1">Sign In</button>
                <div className="or">
                    <p>OR</p>
                </div>
                <button className="btn2">
                    <img src="" alt="" />
                    <p>Sign in with google</p>
                </button>
            </form>
            <div className="account">
                <p>Don’t have an account?<a href=""> Sign up</a></p>
            </div>
        </div>
    )
}

export default SignIn