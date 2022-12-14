/* eslint linebreak-style: ["error", "windows"] */
import menu from '../img/elipsispurple.png';
import './noteitem.css';

export default function NoteItem() {
  return (
<main id="main-note-item">
<section id="note-item">
    <article id="note-title">Title note</article>
    <article id="note-body">Note body</article>
    <article id="note-menu">
    <img id='img-menu' src={menu} alt='Notes menu' />
    </article>

</section>
</main>
  );
}
