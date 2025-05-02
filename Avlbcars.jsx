
import Layout from './/..//..//components/Layout/Layout';
import cars from './CarsList';
import './AvlbCars.css';
import { useLocation } from 'react-router-dom';
import RequestForm from '../Home Page/requestForm';
import { Link } from 'react-router-dom';


function useQuery(){
     return new URLSearchParams(useLocation().search);
}

const AvlbCarsList = () => {
   const query = useQuery();
   const selectedLocation = query.get('location');

   const filteredCars = cars.filter(car => car.location.toLowerCase() === selectedLocation?.toLowerCase());
    return (
        <Layout>
            <div className='AvlbCars'>
                <h1>Available Cars in {selectedLocation}</h1>
        
               <div id="car-grid">
                {filteredCars.map((car) => (
                   <div key={car.id} className='car-card'>
                    
                    <div id="carimg"><img src={car.image} alt={`${car.name} ${car.model}`} />
                    </div>
                    <div id="cardetails">
                    <h2>{car.name}  ,  Model:{car.model}   ,  Color:{car.color} </h2>
                    <p>Year:{car.year} </p>
                    <p>Fuel Effifiency : {car.fuelEfficiency}</p>

                    <button>Show More Details</button>
                  
                    
                    </div>
                    </div>
                ))}
                  
                  <div className='request-car'>
                <p>Could not find the car you were looking for? Request a car and we will get back to you as soon as possible.</p>
                <Link to="./requestForm">
                <button>Request a Car</button>
                </Link>
            </div>
                
               </div>

            </div>
        </Layout>
    );
}

export default AvlbCarsList;