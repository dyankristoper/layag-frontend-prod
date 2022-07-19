import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import './Tours.scss';
import Header from "../components/Header";

const Tour = () =>  {
    const [tours, setTours] = useState([]);
    const {id} = useParams();
  
    useEffect(()=> {
      
        const getTours =  async () => {
        try{
          const getData = await axios.get(`http://localhost:8000/api/v1/tours/destination/${id}`)
          setTours(getData.data.data.tours);
          console.log(getData.data.data);
        }catch(err){
            console.log(err);
            }
        } 
      
      
      getTours();
    },[id])
  
  
  
    return (
      <div className="Tour">
        <Header />
        <div className="Tour__hero">


        </div>
      </div>
    )
}

export default Tour