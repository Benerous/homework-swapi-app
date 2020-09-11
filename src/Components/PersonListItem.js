import React from "react";
import { Link } from "react-router-dom";

export default function PersonListItem({name, id}) {
    return (
        <Link to={`/persons/${id}`} key={id}>
            <p>{name}</p>
        </Link>
    );
}