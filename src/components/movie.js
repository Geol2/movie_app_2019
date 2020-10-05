import React from "react";
import PropsTypes from "prop-types";

import "./movie.css"

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres"> 
                    {genres.map((genres, index) => (
                        <li key={index} className="genres__genre">{genres}</li>
                    ))} 
                </ul>
                <p className="movie__summary">{summary.slice(0, 100)} ...</p>
            </div>
        </div>
    );
}

Movie.PropsTypes = {
    id: PropsTypes.number.isRequired,
    year: PropsTypes.number.isRequired,
    title: PropsTypes.string.isRequired,
    summary: PropsTypes.string.isRequired,
    poster: PropsTypes.string.isRequired,
    geres: PropsTypes.arrayOf(PropsTypes.string).isRequired
}

export default Movie;