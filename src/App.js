
import './App.css'
import React  from 'react';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/NavBar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {Action,Originals} from './urls'


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={Action} title='Action' isSmall={true} />
    </div>
  );
}

export default App;
