import './App.css';
<<<<<<< Updated upstream
import Nav from '@routes/Nav';
import RootRoute from '@routes/RootRoute';
=======
import useLogin from '@hooks/useLogin';
>>>>>>> Stashed changes

function App() {
  const [loginData, login, logout] = useLogin();

  const handleClickLogin = () => login();
  const handleClickLogout = () => logout();

  return (
    <div className="App">
<<<<<<< Updated upstream
      <Nav />
      <RootRoute />
=======
      <div onClick={handleClickLogin}>login</div>
      <div onClick={handleClickLogout}>logout</div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
