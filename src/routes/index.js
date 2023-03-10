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
} from "../components/index";
import Tools from "../components/tools/tools";
import { AuthProvider, useAuth } from "../provider/AuthContext"

export default function AppRoutes() {
    const { currentUser } = useAuth()

    return (
        <>
            <Router>
                <AuthProvider>
                    <Header />
                    <Routes>
                        {
                            currentUser?.uid ?
                                <>
                                    <Route path="/tools" element={<Tools />} />
                                    <Route path='*' element={<Navigate to="/tools" />} />
                                </> :
                                <>
                                    <Route path="/login" element={<LoginPage />} />
                                    <Route path="/signup" element={<SignUpPage />} />
                                    <Route path='*' element={<Navigate to="/login" />} />
                                </>
                        }
                    </Routes>
                </AuthProvider>
            </Router>
        </>
    );
}