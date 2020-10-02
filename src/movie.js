import React from "react";
import PropsTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return <h4>{title}</h4>
}

Movie.PropsTypes = {
    id: PropsTypes.number.isRequired,
    year: PropsTypes.number.isRequired,
    title: PropsTypes.string.isRequired,
    summary: PropsTypes.string.isRequired,
    poster: PropsTypes.string.isRequired 
}

export default Movie;