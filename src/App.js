/* eslint linebreak-style: ["error", "windows"] */
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Login from './components/noauth/Login';
import Main from './components/auth/Main';
import NewNotes from './components/auth/NewNote';
import Protected from './components/auth/Protected';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Protected> <Main /> </Protected>} />
        <Route path='/notes' element={<Protected> <NewNotes /> </Protected>} />
      </Routes>
    </AuthContextProvider>

  );
}

export default App;
