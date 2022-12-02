import { useState } from 'react';
import Login from './components/noauth/Login';
import Main from './components/auth/Main';

function App() {
  const [user, setUser] = useState(undefined);
  return (
    <div className="App">
    {user ? <Main/> : <Login/>}
    </div>
  );
}

export default App;
