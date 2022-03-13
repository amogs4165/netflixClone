import react from 'react'
import './App.css'
import {originals,action} from './url'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Nav/NavBar';
import RowPost from './Components/RowPost/rowPost';


function App() {
  return (
 
      <div >
     
         <NavBar/>
         <Banner/>
         <RowPost url = {originals} title = 'Netfilx Originals'/>
         <RowPost url = {action} title = 'Action' isSmall/>
 
      </div>
      
 
  );
}

export default App;
