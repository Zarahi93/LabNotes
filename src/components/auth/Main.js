/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
// import { getNote } from './firebase/Firestore';
import './main.css';
import logo from '../img/notasc.png';

export default function Main() {
  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSingOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const goToNewNote = () => {
    navigate('/notes');
  };
  // useEffect(() => {
  //   getNote();
  // }, []);
  return (
<main id="mainpage">
    <header id="yournotes">
    <img src={logo} id='mainlogo'/>
        <h1 id="maintitle">Your notes</h1>
    </header>
    <section id='mainsection'>
<article id='new-notes' onClick={goToNewNote}>
  <p id='new-note-p'>Write a new note</p>
</article>
<section id='notes-section'>

</section>
    </section>
    <footer id='mainfooter'>
        <button onClick={handleSingOut} id='log-out'></button>
    </footer>
</main>
  );
}
