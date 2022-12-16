/* eslint linebreak-style: ["error", "windows"] */
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Login from './components/noauth/Login';
import Loading from './components/noauth/Loading';
import Main from './components/auth/Main';
import NewNotes from './components/auth/NewNote';
import Note from './components/auth/NoteItem';
import Notes from './components/auth/NotesList';
import Protected from './components/auth/Protected';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/main' element={<Protected> <Main /> </Protected>} />
        <Route path='/newnote' element={<Protected> <NewNotes /> </Protected>} />
        <Route path='/note' element={<Protected> <Note /> </Protected>} />
        <Route path='/notes' element={<Protected> <Notes /> </Protected>} />
      </Routes>
    </AuthContextProvider>

  );
}

export default App;
