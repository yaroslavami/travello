import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../styles/main.css';
import Home from './home';
import About from './about';
import Hotels from './hotels';
import Contact from './contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ampliImage from '../images/ampli-logo.png'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="nav">
            <Link className="h1" to="/"><h1>Travello</h1></Link>
            <nav className="nav">
              <ul className="pages">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <div>
            <ul>
              <li><p>Phone</p><p>+1 226 998 7846</p></li>
              <li><p>Address</p><p>491 Merlin Crest Suite 963</p></li>
            </ul>
          </div>
          <div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4>Get in touch</h4>
              <p>Feel free to get in touch with us via email.</p>
              <p>yaroslavamishsce@gmail.com</p>
              <ul className="social-media">
                <li><a href="https://www.facebook.com/profile.php?id=100024052943416"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="https://www.instagram.com/yshk_mi/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://github.com/yaroslavami"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/in/yaroslava-mishchenko-513439286/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              </ul>
            </div>
          </div>
          <div>
            <a href="https://ampli.com.ua/en/"><img className="ampli-logo" alt="ampli-logo" src={ampliImage}></img></a>
            <Link to="/"><h2>Travello</h2></Link>
            <p>© 2024 Travello. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
