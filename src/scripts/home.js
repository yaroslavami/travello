import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import spainImage from '../images/spain.png';
import parisImage from '../images/paris.png';
import romeImage from '../images/rome.png';
import londonImage from '../images/london.png';
import bernImage from '../images/bern.png';

function Home() {
    return (
        <div>
            <header className="home-header">
                <div className="text">
                <h2>A wonderful place to find your perfect hotel!</h2>
                <p>Travello is a service that will help you find the perfect hotel available to book right away by referring you to the hotel booking page.</p>
                </div>
            </header>
            <main className="home-main">
                <section className="info">
                    <div>
                        <p className="reason">What we do for you</p>
                        <h3>Explore.</h3>
                        <h3>Plan.</h3>
                        <h3>Travel.</h3>
                        <p>We help to explore the availability of hotels all around the world. We help to plan your trip by choosing the perfect available hotel in the place and time you need.</p>
                        <Link to="/about">Know more About us</Link>
                    </div>
                    <div>
                        <img alt="spain" src={spainImage} />
                        <p>Check availability in Spain.</p>
                        <p>RIGHT NOW!</p>
                    </div>
                </section>
                <section className="refering">
                    <h3>Find your perfect place to travel and explore the hotels nearby.</h3>
                    <div className="city">
                    <div className="france">
                        <img alt="paris" src={parisImage} />
                        <h4>Paris, France</h4>
                        <Link to="/availability">Explore more</Link>
                    </div>
                    <div className="italy">
                        <img alt="rome" src={romeImage} />
                        <h4>Rome, Italy</h4>
                        <Link to="/availability">Explore more</Link>
                    </div>
                    <div className="britain">
                        <img alt="london" src={londonImage} />
                        <h4>London, Britain</h4>
                        <Link to="/availability">Explore more</Link>
                    </div>
                    <div className="switzerland">
                        <img alt="bern" src={bernImage} />
                        <h4>Bern, Switzerland</h4>
                        <Link to="/availability">Explore more</Link>
                    </div>
                    </div>
                </section>
                <section className="action">
                    <h2>Let's find something amazing together.</h2>
                    <Link to="/availability">Let's get started</Link>
                </section>
            </main>
        </div>
  );
}

export default Home;
