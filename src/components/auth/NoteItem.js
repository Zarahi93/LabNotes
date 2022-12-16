/* eslint linebreak-style: ["error", "windows"] */
import menu from '../img/elipsispurple.png';
import './noteitem.css';

export default function NoteItem() {
  return (
<section className='note-item'>
    <article id='note-title'>
      <h3 id='text-title'>Note title</h3>
    </article>
    <article id='note-body'>
      <p id='text-note'> Text of the note</p>
    </article>
    <article id='note-menu'>
    <img id='img-menu' src={menu} alt='Notes menu' />
    </article>

</section>
  );
}
