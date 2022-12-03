/* eslint linebreak-style: ["error", "windows"] */
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import Login from './components/noauth/Login';
import Main from './components/auth/Main';

function App() {
  //const [user, setUser] = UserAuth();
  // return (
  //  <div className="App">
  //   {user ? <Main/> : <Login/>}
  //   </div>
  // );

  

  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </AuthContextProvider>

  );
}

export default App;
