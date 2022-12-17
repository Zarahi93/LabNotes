/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
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
    navigate('/newnote');
  };
  // useEffect(() => {
  //   getNote();
  // }, []);
  return (
<main id="main-page">
    <header id="header-notes">
    <img src={logo} id='main-logo'/>
        <h1 id="main-title">Your notes</h1>
    </header>
    <section id='main-section'>
<article id='new-notes' onClick={goToNewNote}>
  <p id='new-note-p'>Write a new note</p>
</article>
<section id='notes-section'> <Outlet /> </section>
  </section>
    <footer id='main-footer'>
        <button onClick={handleSingOut} id='log-out'></button>
    </footer>
</main>
  );
}
