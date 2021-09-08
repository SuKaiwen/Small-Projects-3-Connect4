import logo from './logo.svg';
import './App.css';
import Connect4 from './Components/Connect4';
import Header from './Components/Header';

function App() {
  return (
    <div style = {{backgroundColor:"#100c08"}}>
        <Header />
        <div className="container d-flex p-2 justify-content-center align-items-center" style = {{height:"100vh", alignItems:"center"}}>
          <Connect4 />
        </div>
    </div>
  );
}

export default App;
