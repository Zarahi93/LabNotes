import './main.css';
import logo from './img/notasc.png';

export default function Main() {
  return (
<main id="mainpage">
    <header id="yournotes">
    <img src={logo} id='mainlogo'/>
        <h1 id="maintitle">Your notes</h1>
    </header>
    <section id='mainsection'>

    </section>
    <footer id='mainfooter'>
        <button id='logout'></button>
    </footer>
</main>
  );
}
