import { useParams }  from "react-router-dom";
import axios from 'axios'
import { useState,useEffect } from 'react'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '1c42e391d8bb.294aa2a8646f9f8c5d02';

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({})


    useEffect(() => {
        axios(`${URL_BASE}/${detailId}?key=${API_KEY}`).then(({ data }) => {
           if (data.id) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId]);

    return(
        <div>
        <h2>{character.name}</h2>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin?.name}</p>
        <img src={character.image}/>
        </div>
    )
}

export default Detail;