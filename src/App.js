
import "./App.scss";
import Home from "./views/Home";
import Login from "./views/Login"
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
