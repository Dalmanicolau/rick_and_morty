import './App.css';
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'


function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation(); 
   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
   const API_KEY = '1c42e391d8bb.294aa2a8646f9f8c5d02';
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'dnicolau@gmail.com';
   const PASSWORD = 'unapass13';

const login = (userData) => {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

const onSearch = (id) => {
   axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id) => {
   const characterFiltered = characters.filter(character =>
      character.id !== Number(id))
      setCharacters(characterFiltered)  

   }

   {pathname !== '/' && <Nav onSearch = {onSearch}/>}   

   return (
      <div className='App'>
         <Nav onSearch ={onSearch} />
        <Routes>
         <Route path='/home' 
               element={<Cards characters={characters} onClose={onClose}/>} />
         <Route path = "/about"
               element={<About />}/>
         <Route path = '/detail/:detailId'
               element = {<Detail />} />
         <Route path = '/'
               element = {<Form login={login}/>} />
       
        </Routes>
         
         
      </div>
   );

}
export default App;
