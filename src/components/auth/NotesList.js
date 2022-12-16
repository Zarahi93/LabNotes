/* eslint linebreak-style: ["error", "windows"] */
import NoteItem from './NoteItem';
import './noteslist.css';

export default function NotesList() {
  const notes = [{ nota: 'algo', id: 13123 }, { nota: 'algo2', id: 34534 }, { nota: 'algo3', id: 45656765 }, { nota: 'algo3', id: 45646765 }, { nota: 'algo3', id: 4565675 }];
  return (
        <section className='notes-list'>
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
        </section>
  );
}
