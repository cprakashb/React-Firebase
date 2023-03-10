import React, { useState } from 'react';
import { useAuth } from '../../provider/AuthContext';
import { useNavigate } from "react-router-dom";
import "./login.scss"

export default function LoginPage() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const [emailAddressHelperText, setEmailAddressHelperText] = useState("");
    const [passwordHelperText, setPasswordHelperText] = useState("");

    const [emailAddressError, setEmailAddressError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    const navigate = useNavigate();
    const { signIn } = useAuth()

    const handleEmailAddress = (event) => {

        let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (event.target.value.length > 0) {
            if (regex.test(event.target.value)) {
                setEmailAddress(event.target.value)
                setEmailAddressHelperText("")
                setEmailAddressError(false)
            } else {
                setEmailAddressHelperText("Email not valid")
                setEmailAddressError(true)
            }
        } else {
            setEmailAddressHelperText("")
            setEmailAddressError(false)
        }
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)

        if (event.target.value.length > 0) {
            setPasswordHelperText("")
            setPasswordError(false)
        } else {
            setPasswordHelperText("Enter your password")
            setPasswordError(true)
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        if (emailAddress.length > 0 && !emailAddressError && password.length > 0 && !passwordError) {
            await signIn(emailAddress, password).then(data => {
                navigate("/")
            }).catch(err => {
                let error = err.toString()
                if (error.includes('auth/user-not-found')) {
                    alert("User not found")
                } else if (error.includes('auth/wrong-password')) {
                    alert("Invalid Password")
                }
            })
        }
    }

    return (
        <section id="login-page" className="login-page mt-3 mt-md-5 d-flex justify-content-center">
            <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                <h5 className="text-center">Login</h5>
                    <form>
                        <div className="form-group mt-3 mb-3">
                            <label htmlFor="emailAddress">Email address</label>
                            <input type="email" className={`form-control ${emailAddressError ? 'is-invalid' : ''}`} id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleEmailAddress} />
                            <small id="emailHelp" className="form-text text-danger">{emailAddressHelperText}</small>
                        </div>
                        <div className="form-group mt-3 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className={`form-control ${passwordError ? 'is-invalid' : ''}`} id="password" aria-describedby="passwordhelp" placeholder="Password" onChange={handlePassword} />
                            <small id="passwordhelp" className="form-text text-danger">{passwordHelperText}</small>

                        </div>

                        <div className="form-group mt-4 d-flex justify-content-center" >
                            <button type="submit" className="btn btn-primary text-center login-button" onClick={handleLogin}>Login</button>
                        </div>

                    </form>
                </div>
            </div>


        </section>
    )


}