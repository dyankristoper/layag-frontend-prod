import "./SearchBar.scss";
import {useState, useRef, useEffect} from "react";

function SearchBar() {
  const [guest, setGuest] = useState(false);
  const [parent, setParent] = useState(1);
  const [child, setChild] = useState(0);
  const refone = useRef(null);
  const reftwo = useRef(null)

  useEffect (() =>{
    document.addEventListener("keydown",hiddenOnEscape, true);
    document.addEventListener("click",hideOnClickOutside,true );
  },[]);

  const hiddenOnEscape = (e) => {
    if(e.key === "Escape"){
      setGuest(false);
    }

  }

  console.log(guest);

  const hideOnClickOutside = (e) => {
    console.log(reftwo.current);

    if(refone.current && !refone.current.contains(e.target)){
        setGuest(guest => !guest); 
    }
  } 

  const minusParent = (e) => {
    e.preventDefault();
    if(parent > 1){
      setParent(parent => parent - 1);
    }
    else{
      setParent(1);
    }

  }
  
  const addParent = (e) => {
    setParent( parent => parent + 1);
  }

  const minusChild = (e) => {
    e.preventDefault();
    if(child > 0){
      setChild(child => child - 1);
    }
    else{
      setChild(0);
    }
  }

  const addChild = (e) => {
    setChild( parent => parent + 1);
  }

  return (
    <div className="SearchBar">
      <h3>Where to?</h3>

      <div className="SearchBar__options">
        <div className="searchForm">
          <label> Starting Location</label>
          <div className="searchForm__text">
            <img src="https://cdn-icons-png.flaticon.com/512/684/684809.png" alt="icon"/>
            <input type="text" placeholder="Where do you want to go?"/>
          </div>
          
        </div>

  
      {/*  Search Form */}
        <div className="searchForm">
          <label> Select Dates </label>
          <div className="searchForm__date">

            <div className="arrival"> 
              <img src="https://cdn-icons-png.flaticon.com/512/2838/2838779.png" alt="calendar" />
              <input type="text" placeholder="Arrival" readOnly/>
            </div>

            <p>|</p>
            
            <div className="arrival"> 
              <img src="https://cdn-icons-png.flaticon.com/512/2838/2838779.png" alt="calendar" />
              <input type="text" placeholder="Departure" readOnly/>
            </div>
          </div>

        </div>

        <div className="searchForm" >
          <label> Travelers </label>
          <div className="searchForm__guest" ref={reftwo}  onClick ={ e=> setGuest(true) } >
            <img src="https://cdn-icons-png.flaticon.com/512/681/681443.png" alt ="guest"/>
            <p>Add People</p>
            <img className="image2"src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="dropdown" />
          </div>
        </div>

        <div className="searchForm">
          <button> Search </button>
        </div>

      </div>

      {/* Modal */}

      {
        guest === true && 
        
        <div className="SearchBar__modal" ref={refone}>
            <div className="people"> 
              <p>Adults</p>
              <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={e => minusParent(e)} alt="minus"/>
              <p>{parent}</p>
              <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={e => addParent(e)} alt="add"/>
            </div>

            <div className="people"> 

              <p>Child</p>
              <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={e => minusChild(e)}  alt="minus"/>
              <p>{child}</p>
              <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={e => addChild(e)} alt="add"/>

            </div>
        </div>
      }

    </div>
  );
}

export default SearchBar;
