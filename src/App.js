import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';

let firstName="shoukat";
let lastName="malik";
function App() {
  return (
    <>
     <Navbar title="Maverik Dresses"/>
     {/* <TextForm/> */}
     <About/>
     </>
    
  );
}

export default App;
