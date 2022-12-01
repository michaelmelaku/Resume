//import { useEffect } from "react";
import Input from "../Input";
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./auth.css";
import { loginUser, registerUser } from "../../redux/apiCalls/userApiCalls";
import { handleSwith } from "../../redux/reducers/user";


const Auth = () => {
    const [user, setUser] = useState("");
    const isSignUp = useSelector((state) => state.user.isSignUp);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setUser((prev) => {
           return{...prev,  [e.target.name]:e.target.value}
        });
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        if(isSignUp){
            registerUser(dispatch, user);
        }
        else {
            loginUser(dispatch, user);
        }
    }
    const switchHandler=(e) => {
        dispatch(handleSwith());
    }

    return (
        <div className="authForm">
            <div className='homeLeft'>
                <h1>The CV that gets the job done</h1>
                <h3>Standing Out.Proffesional. Recruiter-approved</h3>
                <p>Ready in minutes with our step-by-step builder</p>
            </div>
            <div className="auth">
                <h1>{isSignUp ? 'Sign Up': 'Sign In'}</h1>
                {isSignUp && (<Input type="text" name="username" value={user.username} handleChange={handleChange} label="Username"/>)}
                <Input type="email" name="email"label="Email" value={user.email} handleChange={handleChange}/>
                <Input type="password" name="password" value={user.password} label="Password" handleChange={handleChange}/>
                {isSignUp && (<Input type="password" value={user.confirmPassword} name="confirmPassword"label="Confirm Password" handleChange={handleChange}/>)}
                <button  className="signButton" onClick={handleSubmit}>{isSignUp ? 'Sign Up': 'Login'}</button>
                <button className="switchButton" onClick={switchHandler}>{isSignUp ? "Already have an Account? Login": "Don't have an account? Sign Up"}</button>
            </div>
        </div>
    )
}

export default Auth;
