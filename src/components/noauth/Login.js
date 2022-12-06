/* eslint linebreak-style: ["error", "windows"] */
import GoogleButton from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';
import logo from './notasc.png';
import './login.css';

export default function Login() {
  const { googleSingIn } = UserAuth();
  const handleGooleSingIn = async () => {
    try {
      await googleSingIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='login'>
      <img id='logo' src={logo} alt='Logo' />
      <h1 id='title'>Your notes</h1>
      <GoogleButton type='light' className='google-button' onClick={handleGooleSingIn}/>
      </section>
  );
}
