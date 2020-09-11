import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Person(props) {
    const [film, setFilm] = useState();
    const [characters, setCharacters] = useState([]);
    let { filmId } = useParams();
  
    useEffect(() => {
      axios.get(`https://swapi.dev/api/films/${filmId}/`)
        .then((res) => {
          setFilm(res.data);
          let characterList = [];
          res.data.characters.forEach((character, index) => {
            axios.get(`${character.replace('http', 'https')}`)
              .then((response) => {
                characterList.push({
                  name: response.data.name,
                  numberOfCharacter: character.replace(/[^0-9]/g, '')
                });
                if (index === res.data.characters.length - 1) {
                  setCharacters(characterList);
                }
              });
          });
        });
    }, []);
  
    if (!film) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <Link to="/films/">Back</Link>
        <button onClick={props.toggleTheme}>Change Theme</button>
        <div><b>Title:</b> <i>{ film.title }</i></div>
        <div><b>Episode:</b> <i>#{ film.episode_id }</i></div>
        <div><b>Opening Crawl:</b> <i>{ film.opening_crawl }</i></div>
        <div><b>Director:</b> <i>{ film.director }</i></div>
        <div><b>Release Date:</b> <i>{ film.release_date }</i></div>
        <div><b>Characters:</b> 
          <ul>
            { 
              characters.map((character, index) => 
                <li key={index}>
                  <i><Link to={`/persons/${character.numberOfCharacter}`}>
                    { character.name }
                  </Link></i>
                </li>
              ) 
            }
          </ul>
        </div>
      </div>
    );
}