import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignupForm from './Components/Signup';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/signup' element={<SignupForm/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
