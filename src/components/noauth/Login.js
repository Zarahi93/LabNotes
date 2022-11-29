import logo from './notasc.png';
import './login.css';
export default function Login() {
return(
  <section className='login'>
<img id='logo' src={logo} alt='Logo' />  
<h1 id='title'>Your notes</h1>
<button className='button'></button>
</section>
)
};