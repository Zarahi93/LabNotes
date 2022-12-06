/* eslint linebreak-style: ["error", "windows"] */
import { UserAuth } from '../../context/AuthContext';
import './main.css';
import logo from './img/notasc.png';

export default function Main() {
  const { logOut } = UserAuth();

  const handleSingOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
<main id="mainpage">
    <header id="yournotes">
    <img src={logo} id='mainlogo'/>
        <h1 id="maintitle">Your notes</h1>
    </header>
    <section id='mainsection'>
<article id='new-notes'>
  <p id='new-note-p'>Write a new note</p>
</article>
    </section>
    <footer id='mainfooter'>
        <button onClick={handleSingOut} id='log-out'></button>
    </footer>
</main>
  );
}
