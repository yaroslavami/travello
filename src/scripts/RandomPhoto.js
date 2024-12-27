import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/hotels.css';

function RandomPhoto(){
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchRandomPhoto = async () => {
        try {
            setLoading(true);  
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
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchRandomPhoto();
    }, []);

    return (
        <div className="gallery-container">
            <h3 className="gallery-title">Bonus plus, wonderful photos to encourage you to travel</h3>
            <div className="photo-container">
                {loading ? 
                    (<p className="loading-text">Loading...</p>) : 
                    photo ? 
                        (<img src={photo.urls.small} alt={photo.alt_description} className="photo"/>) : 
                        (<p className="error-text">Something went wrong, try again later.</p>)
                }
            </div>
            <button className="fetch-button" onClick={fetchRandomPhoto}>Get New Photo</button>
        </div>
    );
};

export default RandomPhoto;
