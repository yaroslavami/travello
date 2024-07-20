import React, { useState, useEffect} from 'react';
import '../styles/main.css';
import '../styles/hotels.css';
import hotels from './hotelData.js';
import axios from 'axios';

function Hotels() {
    const [country, setCountry] = useState('');
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [error, setError] = useState(null);
    const [photo, setPhoto] = useState(null);

    const handleSearch = () => {
        setFilteredHotels([]);
        setError(null);

        try {
            const results = hotels.filter(hotel => 
                hotel.country.toLowerCase().includes(country.toLowerCase()) || country === ''
            );
            setFilteredHotels(results);
        } catch (error) {
            console.error('Error filtering hotel data:', error);
            setError('Error filtering hotel data. Please try again.');
        }
    };
    useEffect(() => {
        const fetchRandomPhoto = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random', {
            headers: {
                Authorization: 'Client-ID k3Bb9_xzhlYIVV3A5z8imtyqsGVhNA3Q_aLzarVqMGo'
            },
            params: {
                count: 1 
            }
            });
            setPhoto(response.data[0]);
        } catch (error) {
            console.error('Error fetching random photo from Unsplash:', error);
        }
        };

        fetchRandomPhoto();
    }, []); 

    return (
        <div>
            <header className="hotels-header">
                <div className="text">
                    <h2>A wonderful place to find your perfect hotel!</h2>
                </div>
            </header>
            <main>
                <div className="search-container">
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Country"
                    />
                    <button onClick={handleSearch}>Find Hotels</button>
                </div>

                {error && <p className="error">{error}</p>}

                {filteredHotels.length > 0 ? (
                    <div className="hotel-list">
                        <h3>Available Hotels:</h3>
                        <ul>
                            {filteredHotels.map((hotel, index) => (
                                <li key={index} className="hotel-item">
                                    <h4>{hotel.name}</h4>
                                    <p>Address: {hotel.address}</p>
                                    <p>Country: {hotel.country}</p>
                                    <p>Star Rating: {hotel.starRating}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No hotels available for the selected location.</p>
                )}
                <div className="gallery-container">
                    <h3>Bonus plus, wonderful photos to encourage you to travel</h3>
                    {photo ? (
                        <img
                        src={photo.urls.small}
                        alt={photo.alt_description}
                        className="photo"
                        />
                    ) : (
                        <p className="loading">Loading...</p>
                    )}
                    <button className="button" onClick={() => window.location.reload()}>Get New Photo</button>
                </div>
            </main>
        </div>
    );
}

export default Hotels;
