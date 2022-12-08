/* eslint linebreak-style: ["error", "windows"] */
import { useNavigate } from 'react-router-dom';
import './newnotes.css';

export default function NewNotes() {
  const navigate = useNavigate();
  const goToViewNotes = () => {
    navigate('/main');
  };
  return (
        <section id='new-note'>
            <input type='text' placeholder='Title' id='note-title' />
            <textarea name="textarea" id='your-note' placeholder='Write your new note here!'/>
            <button id='new-note-button' onClick={goToViewNotes}>New note!</button>
        </section>
  );
}
