import Home from './src/Home Page/Home'
import './App.css'
import { Routes , Route } from 'react-router-dom';
import Help from './src/Help/Help';
import CustomerReviews from './src/customerReviews';
import RequestForm from './src/Home Page/requestForm';

import AvlbCarsList from './src/AvlbCars/Avlbcars';

function App() {
  

  return (
    <>
    <div>
      
        
     
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Help" element={<Help/>}/>
    <Route path="/CustomerReviews" element={<CustomerReviews/>}/>
    <Route path="/requestForm"   element={<RequestForm/>}/>
   
    <Route path="/avlbcars"  element={<AvlbCarsList/>}/>
    </Routes>
    
    </div>
    
    </>
  );
}

export default App
