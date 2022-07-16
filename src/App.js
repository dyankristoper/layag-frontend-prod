import { Routes , Route } from 'react-router-dom'
import "./App.scss";
import Login from '../src/components/Home Component/Login'
import Home from "./views/Home";

const App = () => {
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element ={<Login/>}/>
        <Route path="/Signup"/>
      </Routes>
      
    </div>
  );
}

export default App;
