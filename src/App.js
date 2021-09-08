import logo from './logo.svg';
import './App.css';
import Connect4 from './Components/Connect4';
import Header from './Components/Header';

function App() {
  return (
    <>
        <Header />
        <div className="container d-flex p-2 justify-content-center align-items-center" style = {{backgroundColor:"#100c08", height:"100vh", alignItems:"center"}}>
          <Connect4 />
        </div>
    </>
  );
}

export default App;
