/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from './firebase/Firestore';
import './newnotes.css';
import close from '../img/closep.png';

export default function NewNotes() {
  const initialState = {
    title: '',
    note: '',
  };
  // state variables
  const [values, setValues] = useState(initialState);

  // Function to go back to the main page
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/main/notes');
  };
  // Functions to save the title and the body of the note
  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(values);
    goToMainPage();
  };
  return (
        <section id='new-note-page'>
          <img id='close' src={close} alt='Close new note' onClick={goToMainPage}/>
          <form id='new-note' onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder='Title' id='new-note-title'
            onChange={handleNoteChange} className='form-control'/>
            <textarea name="note" id='your-note' placeholder='Write your new note here!'
            onChange={handleNoteChange} className='form-control'/>
            <button id='new-note-button' className='btn btn-primary'>New note!</button>
            </form>
        </section>
  );
}
