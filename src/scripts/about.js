import React from 'react';
import '../styles/main.css';
import '../styles/about.css';

function About() {
    return (
        <div>
            <header className="about-header">
                <div className="text">
                    <h2>A wonderful place to find your perfect hotel!</h2>
                </div>
            </header>
            <main>
                <section className="info-card">
                    <div className="card">
                        <p>By : Yaroslava Mishchenko</p>
                        <p>Group: AFE-34</p>
                        <div>
                            <a href="https://github.com/yaroslavami">GitHub</a>
                            <a href="https://trello.com/invite/b/RmdYtMmw/ATTI448acc8dce1b857f86fa6c575b2265e606A276DF/mishchenko-yaroslava-afe34-final-project">Trello</a>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="title">
                        <h3>Author.</h3>
                        <h3>Idea.</h3>
                        <h3>Exploration.</h3>
                    </div>
                    <p>The author of this wonderful service is a student of AFE-34 group at Ampli teen accelerator. The idea was brought by Yaroslava because of her own desire to travel around the world. Exploring different opportunities is great, even better when you can find hotel that fits your needs.</p>
                </section>
            </main>
        </div>
    );
}

export default About;
