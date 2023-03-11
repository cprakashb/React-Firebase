
import React, { useEffect, useState } from 'react';

export default function QuoteGenerator() {

    const quoteGeneratorURL = "https://api.quotable.io/random"
    const [quotes, setQuotes] = useState([]);

    const getQuotes = () => {
        fetch(quoteGeneratorURL)
            .then((response) => response.json())
            .then((data) => setQuotes(data));
    }
    useEffect(() => {
        getQuotes()
    }, [])

    return (
        <section id="landing-page" className="landing-page d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <p className="card-text">{quotes.content}-<b>{quotes.author}</b></p>
                    <button href="#" className="btn btn-primary text-center" style={{ width: "fit-content" }} onClick={getQuotes}>Generate new Quote</button>
                </div>
            </div>

        </section>
    )
}