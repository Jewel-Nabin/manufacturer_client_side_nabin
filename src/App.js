import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import RequireAuth from './Pages/LogIn/RequireAuth';
import SignUp from './Pages/LogIn/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Review from './Pages/Dashboard/Review';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="purchase" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='review' element={<Review />}></Route>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path='users' element={<Users />}></Route>
        </Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
