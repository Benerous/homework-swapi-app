import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FilmListItem from './FilmListItem';

export default function FilmList(props) {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/')
            .then((res) => {
                setFilms(res.data.results);
            }
        );

        return () => {
            // cleanup
        };
    }, []);

    const toFilms = useCallback((film, index) => <FilmListItem title={film.title} id={film.url.replace(/[^0-9]/g, '')} key={index + 1} />);

    return (
        <div>
            <Link to="/">Back</Link>
            <button onClick={props.toggleTheme}>Change Theme</button>
            <div>{ films.map(toFilms) }</div>
        </div>
    );
}