/* eslint linebreak-style: ["error", "windows"] */
import './newnotes.css';

export default function NewNotes() {
  return (
        <section id='new-note'>
            <input type='text' placeholder='Title' id='note-title' />
            <textarea name="textarea" id='your-note' placeholder='Write your new note here!'/>
            <button id='new-note-button'>New note!</button>
        </section>
  );
}
