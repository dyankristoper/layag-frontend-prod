
import "./App.scss";
import Home from "./views/Home";
import Login from "./views/Login"
import SignUp from "./views/SignUp";
import { Routes, Route } from 'react-router-dom'
import Tour from "./views/Tour";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tour/:id" element={<Tour />} />
      </Routes>

    </div>
  );
}

export default App;
