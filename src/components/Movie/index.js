import React from "react";
import { MovieCardImg } from "../../assets/images";
import './styles.css';

const MovieCard = ({item}) => {
    return (
        <div className="movie-card">
            <div className="movie-img">
                <img src={MovieCardImg} alt="Movie Card" className="movieImage" />
            </div>
            <div className="movie-title">
                {item.title}
            </div>
            <div className="movie-subtitle">
                {item.subtitle}
            </div>
        </div>
    )

}
export default MovieCard;