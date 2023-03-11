
import React, { useState, useEffect } from 'react';
import "./dashboard.scss"
import axios from 'axios';

export default function NewsFeed() {

    const [newsFeed, setNewsFeed] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c204b267b57341fcb9d614a43f2eed26").then((response) => {
            setNewsFeed(response.data.articles)
        })
    }, [])

    return (
        <section id="landing-page" className="landing-page d-flex justify-content-center">
            <div className='container'>
                <div className=' d-flex flex-row flex-wrap  justify-content-center' style={{gap:"10px"}}>
                    {
                        newsFeed && newsFeed.map(feed => {
                            return (
                                <div className="card " style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <p className="card-text"><b> {feed.title}</b></p>
                                        <p style={{ overflow: "hidden" }}>{feed.description}</p>
                                        <p style={{ textAlign: "right" }}> - {feed.author}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}