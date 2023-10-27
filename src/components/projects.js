import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";

function OpenDatLyricSearcherModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Lyrics Searcher
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Built with NextJs and Tailwind CSS utilizing Genius API</h5>
                <p>
                    Music is an integral part of my life. I am almost always listening to music. Deciding on what my next project should be,
                    I wanted it to be something that would be of use to me. Sometimes when I'm listening to songs, the lyrics are drowned out by
                    the beats and so I decided to take the liberty upon myself to create an app that can find the lyrics for you.
                    Just search for an artist or a song's name and the top 12 most popular results will show in a card-like format.
                    Click on one and your lyrics are handed to you!
                </p>
                <p>
                    Using Genius' API, I did run into some problems. Since their API doesn't provide lyrics for you,
                    I had to do extensive research on how to web scrape. I guess I learned a new skill! To do  this,
                    I had to set up a proxy server (in order to bypass CORS) that would take in a song's lyrics URL from Genius and then it would send
                    all the data back to the front-end. That's where the front-end would work its magic and scrape the lyrics to provide it for you!
                </p>
                <p>
                    Anyways, I yap too much. To run this, you will need to run the proxy server first and then the front end.
                    Here is the github repos for both of them!
                </p>
                <p>
                    <a className="proj-link" href="https://github.com/ElhamNawabi/lyrics-searcher">Lyrics Searcher</a> and
                    <a className="proj-link" href="https://github.com/ElhamNawabi/proxy-server">Proxy Server</a>
                </p>
            </Modal.Body>
        </Modal>
    );
}

function Projects() {

    const [lyricModal, setLyricModal] = useState(false);

    return (
        <div className="proj-container">
            <h1 className="proj-header">Projects</h1>

            <div className="lyricModal" onClick={() => setLyricModal(true)}>
                <div className="flex-proj">
                    <h2 className="lyric-header">Lyrics Searcher</h2>
                    <p className="lyric-date">2023</p>
                </div>
                <p className="details">Click for more details!</p>
            </div>
            <OpenDatLyricSearcherModal show={lyricModal} onHide={() => setLyricModal(false)} className="custom-modal" />
        </div>
    )
}

export default Projects