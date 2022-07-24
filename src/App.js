import './App.scss';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import { Routes, Route } from 'react-router-dom';
import Tour from './views/Tour';
import TourDetails from './views/TourDetails';
import PrivateRoutes from './authentication/PrivateRoutes';
import AdminRoutes from './authentication/AdminRoutes';
import TourHistory from './views/TourHistory';
import AddEditTours from './views/AddEditTours';
import Profile from './views/Profile';
import UpdateProfile from './views/UpdateProfile';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tour/:id" element={<Tour />} />
        <Route path="/tourdetails/:id" element={<TourDetails />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route element={<PrivateRoutes />}></Route>
        <Route element={<AdminRoutes />}>
          {/* <Route path='/admin/dashboard' element={AdminDashboard} /> */}
          {/* <Route path='/admin/dashboard' element={AdminDashboard} /> */}
          {/* <Route path='/admin/dashboard' element={AdminDashboard} /> */}
        </Route>
        <Route path="/addTour" element={<AddEditTours />} />
        <Route path="/addTour/:id" element={<AddEditTours />} />
        <Route path="/tourHistory" element={<TourHistory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
