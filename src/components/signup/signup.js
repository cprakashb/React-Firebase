import React, { useState } from 'react';
import "./signup.scss"
import { useAuth } from "../../provider/AuthContext"
import { useNavigate } from "react-router-dom";
export default function SignUpPage() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailAddressHelperText, setEmailAddressHelperText] = useState("");
    const [passwordHelperText, setPasswordHelperText] = useState("");
    const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState("");


    const [emailAddressError, setEmailAddressError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const navigate = useNavigate();
    const { signUp } = useAuth()

    // on change of email Adress - validation is done & updates emailAdress
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
    // on change of password - validation is done & updates password
    const handlePassword = (event) => {
        setPassword(event.target.value)

        if (event.target.value.length > 0) {
            setPasswordHelperText("")
            setPasswordError(false)
            if (confirmPassword === event.target.value && confirmPassword.length > 0) {
                setConfirmPasswordHelperText("")
                setConfirmPasswordError(false)
            }
        } else {
            setPasswordHelperText("Enter your password")
            setPasswordError(true)
        }
    }
    // on change of confirmPassword - validation is done & updates confirmPassword
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
        if (password === event.target.value) {
            setConfirmPasswordHelperText("")
            setConfirmPasswordError(false)
        } else {
            setConfirmPasswordHelperText("Passwords do not match")
            setConfirmPasswordError(true)
        }
    }

    // on click of sign up - invoked firebase api through useAuth hook 
    const handleSignUp = async (event) => {
        event.preventDefault()
        if (emailAddress.length > 0 && !emailAddressError && password.length > 0 && !passwordError && confirmPassword.length > 0 && !confirmPasswordError) {
            // firebase signup
            await signUp(emailAddress, password).then(data => {
                navigate("/home");
            }).catch(err => {
                let error = err.toString()
                if (error.includes('auth/email-already-in-use')) {
                    setEmailAddressHelperText("Email Address already in use")
                } else if (error.includes('auth/weak-password')) {
                    setPasswordHelperText("Password should be at least 6 characters ")
                }
            })
        }
    }

    return (
        <section id="signup-page" className="signup-page mt-3 mt-md-5 d-flex justify-content-center">
            <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                    <h5 className="text-center">Register</h5>
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
                        <div className="form-group mt-3 mb-3">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`} id="confirmPassword" aria-describedby="confirmPasswordHelp" placeholder="Confirm Password" onChange={handleConfirmPassword} />
                            <small id="confirmPasswordHelp" className="form-text text-danger">{confirmPasswordHelperText}</small>

                        </div>
                        <div className="form-group mt-4 d-flex justify-content-center" >
                            <button type="submit" className="btn btn-primary text-center signup-button" onClick={handleSignUp}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>

        </section>
    )

}