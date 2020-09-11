import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PersonListItem from './PersonListItem';

export default function PersonList(props) {
    const [people, setPeople] = useState([]);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?search=${searchString}`)
            .then((res) => {
                setPeople(res.data.results);
            }
        );
        return () => {
            // cleanup
        };
    }, [searchString]);

    const handleChange = e => {
        setSearchString(e.target.value);
    };

    const toPerson = useCallback((person, index) => <PersonListItem name={person.name} id={person.url.replace(/[^0-9]/g, '')} key={index + 1} />);

    return (
        <div>
            <Link to="/">Back</Link>
            <button onClick={props.toggleTheme}>Change Theme</button>
            <div>
                <input type="text" placeholder="Search by name" onChange={handleChange} />   
            </div>
            <div>{ people.map(toPerson) }</div>    
        </div>
    );
}