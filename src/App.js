import logo from './logo.svg';
import './App.css';

function App() {

  const userLogged = "achmad akbar";
  const userLoggedJSX = <strong>Achmad akbar</strong>;


  return (
    <div className="App">
      {userLogged}
      {userLoggedJSX}
    </div>
  );
}

export default App;
