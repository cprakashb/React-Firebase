import React from 'react';
import { useAuth } from '../../provider/AuthContext';
import './profile.scss'
export default function Profile() {
    const { currentUser } = useAuth()

    return (
        <section id="profile-page" className="container d-flex justify-content-center mt-5">
            <div className="card " style={{ width: "30rem" }}>
                <div className="card-body">
                    <h5 className='text-center'><b>User profile</b></h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>Email Id</td>
                                <td>{currentUser.email}</td>
                            </tr>
                            <tr>
                                <td>Last Login Time</td>
                                <td>{currentUser.metadata.lastSignInTime}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )

}