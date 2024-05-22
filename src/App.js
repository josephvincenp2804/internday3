import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './Components/StateBasics';
import Counter from './Components/Counter';
import UseButton from './UseButton';
import ListMap from './Components/ListMap';
import Mapping from './Components/Mapping';
import Api from './Components/Api';
import CardView from './Components/CardView';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/s" element={<StateBasics/>}/>
       <Route path="/c" element={<Counter/>}/>
       <Route path="/u" element={<UseButton/>}/>
       <Route path="/l" element={<ListMap/>}/>
       <Route path="/m" element={<Mapping/>}/>
       <Route path="/a" element={<Api/>}/>
       <Route path="/card" element={<CardView/>}/>
    </Routes>
   
    
    </div>
  );
}

export default App;
