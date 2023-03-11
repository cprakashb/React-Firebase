import React from 'react';
import QuoteGenerator from './quote-generator';
import NewsFeed from './news-feed';
import Weather from './weather';
import "./dashboard.scss"


export default function Dashboard() {

  return (
    <section id="dashboard-page" className="dashboard-page text-center container mt-5">
      <div className="accordion" id="APIdashboard">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingQuote">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQuote" aria-expanded="false" aria-controls="collapseQuote">
              Quote Generator API
            </button>
          </h2>
          <div id="collapseQuote" className="accordion-collapse collapse" aria-labelledby="headingQuote" data-bs-parent="#APIdashboard">
            <div className="accordion-body">
              <QuoteGenerator />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingWeather">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWeather" aria-expanded="false" aria-controls="collapseWeather">
              Open Weather API
            </button>
          </h2>
          <div id="collapseWeather" className="accordion-collapse collapse" aria-labelledby="headingWeather" data-bs-parent="#APIdashboard">
            <div className="accordion-body">
              <Weather />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNews">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNews" aria-expanded="true" aria-controls="collapseNews">
              News Feed API
            </button>
          </h2>
          <div id="collapseNews" className="accordion-collapse collapse" aria-labelledby="headingNews" data-bs-parent="#APIdashboard">
            <div className="accordion-body">
              <NewsFeed />
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}