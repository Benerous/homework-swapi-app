import React from "react";
import { Link } from "react-router-dom";

export default function FilmListItem({title, id}) {
    return (
        <Link to={`/films/${id}`} key={id}>
            <p>{title}</p>
        </Link>
    );
}