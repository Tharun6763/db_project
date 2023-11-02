import './App.css';
import Login from './LOGIN/LOGIN';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Signup from './signup';
import Forgot from './fogotPassword';
import Navbar from './components/Navbar/navbar';
import  Admin  from './admin_dash/admin_dashboard';
import Student from './user_dash/user';
import Department from './services/department';
import Companies from './services/companies';
import Addcomp from './services/addcomp';
import UserStatusUpdate from './services/updateroles';
import DeleteComp  from './services/deletecomp';
import Changepassword from './services/changepassword';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<Forgot/>}/>
        <Route path="/admin_dashboard" element={<Admin />}/>
        <Route path="/dashboard" element={<Student/>}/>
        <Route path="/department" Component={Department}/>
        <Route path="/companies" Component={Companies}/>
        <Route path="/updateroles" Component={UserStatusUpdate}/>
        <Route path="/addcomp" element={<Addcomp/>}/>
        <Route path="/deletecomp"  element={<DeleteComp/>}/>
        <Route path="/changepassword" element={<Changepassword/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;
