/* eslint linebreak-style: ["error", "windows"] */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';
import logo from '../img/notasc.png';
import './login.css';

export default function Login() {
  const { googleSingIn, user } = UserAuth();
  // console.log(user);
  const navigate = useNavigate();
  const handleGooleSingIn = async () => {
    try {
      await googleSingIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/main');
    }
  }, [user]);
  return (
    <section className='login'>
      <img id='logo' src={logo} alt='Logo' />
      <h1 id='title'>Your notes</h1>
      <GoogleButton type='light' className='google-button' onClick={handleGooleSingIn}/>
      </section>
  );
}
