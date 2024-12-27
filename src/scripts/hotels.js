import React, { useState, useEffect, useCallback } from 'react';
import '../styles/main.css';
import '../styles/hotels.css';
import hotels from './hotelData.js';
import { useLocation, Link } from 'react-router-dom';
import RandomPhoto from './RandomPhoto.js';

function Hotels() {
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); 

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const country = queryParams.get('country') || '';

    const handleSearch = useCallback(() => {
        setError(null);

        try {
            const results = hotels.filter(hotel =>
                (hotel.country.toLowerCase().includes(country.toLowerCase()) || country === '') &&
                (hotel.country.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '')
            );
            setFilteredHotels(results);
        } catch (error) {
            console.error('Error filtering hotel data:', error);
            setError('Error filtering hotel data. Please try again.');
        }
    }, [country, searchTerm]);

    useEffect(() => {
        handleSearch();
    }, [country, searchTerm, handleSearch]); 

    return (
        <div>
            <header className="hotels-header">
                <div className="text">
                    <h2>A wonderful place to find your perfect hotel!</h2>
                </div>
            </header>
            <main>
                <div className="search-container">
                    <h3>Filtered by: {country}</h3>
                    <input
                        type="text"
                        placeholder="Country . . ."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
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
                                    <h5>{hotel.description}</h5>
                                    <Link href={hotel.bookingUrl || '#'} target="_blank" rel="noopener noreferrer" className="book-now-link">Book Now!</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No hotels available for the selected location.</p>
                )}
                <RandomPhoto/>
            </main>
        </div>
    );
}

export default Hotels;
