import React, { useEffect, useState } from 'react';
import "./header.scss"
import AppIcon from "../../assets/icons/ck_icon.png";
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';

export default function Header() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("home")
    const { currentUser, logout } = useAuth()

    useEffect(() => {
        const { pathname } = location;
        if (pathname === "/tools") {
            setActiveTab("tools")
        } else if (pathname === "/profile") {
            setActiveTab("profile")
        } else if (pathname === "/signup") {
            setActiveTab("signup")
        } else if (pathname === "/login") {
            setActiveTab("login")
        }
    }, [location.pathname, location])

    return (
        <header id="header" className="header">
            <nav className="navbar navbar-expand-lg container header-container">
                <div className="container-fluid header-container-fluid">
                    <a className="navbar-brand" href="/"><img src={AppIcon} height="80" alt="app-icon" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            {
                                currentUser?.uid ?
                                    <>
                                       
                                        <li className={`nav-item ${activeTab === 'tools' ? 'active' : ''}`}>
                                            <Link className="nav-link" to="/tools">Tools</Link>
                                        </li>
                                      
                                        <li className={`nav-item ${activeTab === 'report' ? 'active' : ''}`}>
                                            <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className={`nav-item ${activeTab === 'login' ? 'active' : ''}`}>
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className={`nav-item ${activeTab === 'signup' ? 'active' : ''}`}>
                                            <Link className="nav-link" to="/signup">Register</Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}
