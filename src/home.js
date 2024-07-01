import './home.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="nav">
            <h1><a className="h1" href="/home">Travello</a></h1>
          <nav className="nav">
            <ul className="pages">
              <li><a href="/about">About</a></li>
              <li><a href="/availability">Availability</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="text">
          <h2>A wonderful place to find your perfect hotel!</h2>
          <p>Travello is a service that will help you find perfect hotel available to book right away by referring you to the hotel booking page.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
