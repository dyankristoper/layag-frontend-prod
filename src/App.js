import './App.scss';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import { Routes, Route } from 'react-router-dom';
import Tour from './views/Tour';
// import TourDetails from "./views/TourDetails"
import PrivateRoutes from './authentication/PrivateRoutes';
import AdminRoutes from './authentication/AdminRoutes';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/destination/:id" element={<Tour />} />
        {/* <Route path="/tourdetails/:id" element={<TourDetails />} /> */}
        <Route element={<PrivateRoutes />}>
          {/* <Route path='/user/dashboard' element={Dashboard} />  */}
          {/* <Route path='/profile/:userId' element={Profile} /> */}
          <Route />
        </Route>
        <Route element={<AdminRoutes />}>
          {/* <Route path='/admin/dashboard' element={AdminDashboard} /> */}
          {/* <Route path='/admin/dashboard' element={AdminDashboard} /> */}
          {/* <Route path='/admin/dashboard' element={AdminDashboard} /> */}
          {/* <Route path='/admin/dashboard' element={AdminDashboard} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
