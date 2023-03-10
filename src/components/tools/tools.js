import React from 'react';
import Notes from './notes';
import "./tools.scss"


export default function Tools() {
  
    return (
        <section id="tools-page" className="tools-page text-center">
            <h1 className='tools-heading'>Tools - Notes  </h1>
            <Notes />
        </section>
    )
}