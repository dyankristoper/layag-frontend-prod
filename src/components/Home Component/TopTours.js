import './TopTours.scss';
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function TopTours() {

    const places = [
        {
            name: "Puero Prinsesa",
            image: "https://www.leeabbamonte.com/wp-content/uploads/2015/02/IMG_1291-1024x1024.jpg"
        },
        {
            name: "Bohol",
            image: "http://www.traveltothephilippines.info/wp-content/uploads/2019/09/Bohol-Chocolate-Hills2.jpg"
        },
        {
            name: "Ilocos",
            image: "https://i.pinimg.com/736x/af/d3/dc/afd3dc3bbe8ee1cbda55cbbccb296780.jpg"
        },
        {
            name: "Bicol",
            image: "https://www.rappler.com/tachyon/2021/07/mayon-volcano-shutterstock-sq.jpg"
        },
        {
            name: "Coron",
            image: "https://fastly.4sqi.net/img/general/600x600/q57qLZktCiTMYo16RPkEHntgV8cZeO0d4k9IwuTD_yM.jpg"
        },
        {
            name: "El Nido",
            image: "https://i.pinimg.com/originals/bb/2d/45/bb2d456a64281dd35f738728e605fd7c.jpg"
        },
        {
            name: "Boracay",
            image: "https://pbs.twimg.com/media/E-Anmd7VQAA4fAB.jpg"
        },
        {
            name: "Cebu",
            image: "https://www.yourtravy.com/wp-content/uploads/2019/08/12.png"
        }
    ]

    const [destination, setDestination] = useState();

    useEffect(()=> {
        setDestination(places);
    },[])

    return (
        <>
            <h2> Top Tours In the <span>Philippines</span></h2>
            <div className="TopTours">


                <div className="TopTours__list">
                    {
                       destination &&  destination.map((destination) =>{

                        return(

                            <Link to={`/destination/${destination.name}`}>

                                <div className='entry'>
                                    <img className="entry__image" src={destination.image} alt={destination.name} />
                                    <h3>{destination.name}</h3>
                                </div>

                            </Link>
                        )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TopTours;