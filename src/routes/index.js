import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {
    Header,
    LoginPage,
    SignUpPage,
    Dashboard,
    Profile
} from "../components/index";
import Tools from "../components/tools/tools";
import { useAuth } from "../provider/AuthContext"

export default function AppRoutes() {
    const { currentUser } = useAuth()

    return (
        <Router>
            <Header />
            <Routes>
                {
                    // accessible routes if user logged in
                    currentUser?.uid ?
                        <>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/tools" element={<Tools />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path='*' element={<Navigate to="/" />} />
                        </> :
                        <>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignUpPage />} />
                            <Route path='*' element={<Navigate to="/login" />} />
                        </>
                }
            </Routes>
        </Router>
    );
}