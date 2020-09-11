import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Person(props) {
    const [person, setPerson] = useState();
    const [films, setFilms] = useState([]);
    let { personId } = useParams();
  
    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/${personId}/`)
        .then((res) => {
          setPerson(res.data);
          let filmTitleList = [];
          res.data.films.forEach((film, index) => {
            axios.get(`${film.replace('http', 'https')}`)
              .then((response) => {
                filmTitleList.push({
                  title: response.data.title, 
                  numberOfEpisode: film.replace(/[^0-9]/g, '')
                });
                if (index === res.data.films.length - 1) {
                  setFilms(filmTitleList);
                }
              });
          });
        });
      return () => {
        // cleanup
      };
    }, []);
  
    if (!person) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <Link to="/persons/">Back</Link>
        <button onClick={props.toggleTheme}>Change Theme</button>
        <div><b>Name:</b> <i>{ person.name }</i></div>
        <div><b>Gender:</b> <i>{ person.gender }</i></div>
        <div><b>Height:</b> <i>{ person.height }</i></div>
        <div><b>Hair:</b> <i>{ person.hair_color }</i></div>
        <div><b>Films:</b> 
          <ul>
            { 
              films.map((film, index) => 
                <li key={index}>
                  <i><Link to={`/films/${film.numberOfEpisode}`}>
                    { film.title }
                  </Link></i>
                </li>
              ) 
            }
          </ul>
        </div>
      </div>
    );
}