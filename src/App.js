import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/noauth/Login';
import Main from './components/auth/Main';

function App() {
  //const [user, setUser] = useState(undefined);
  // return (
  //  <div className="App">
  //   {user ? <Main/> : <Login/>}
  //   </div>
  // );
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Routes>
  );
}

export default App;
