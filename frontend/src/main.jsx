import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  {createBrowserRouter , RouterProvider} from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import AdminDashboard from './pages/AdminDashBoard.jsx';
import AdminAllNotice from './pages/AdminAllNotice.jsx';
import AddNotice from './pages/AddNotice.jsx';
import AddComplaint from './pages/AddComplaint.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AddLostOrFound from './pages/AddLostOrFound.jsx';
import CommunityRulePage from './pages/CommunityRulePage.jsx';
import AllComplaint from './pages/AllComplaint.jsx';



const appRouter = createBrowserRouter([
  {
    path : "/" , 
    element  : <LandingPage/>
  },
  
  {
    path : "/user-login" , 
    element  : <Login/>
  },
  {
    path : "/sign-up" , 
    element  : <SignUp/>
  },
  {
    path : "/user-dashboard" , 
    element  : <UserDashboard/>
  },
  {
    path : "/admin-dashboard" , 
    element  : <AdminDashboard/>
  },
  {
    path : "/allNotice" , 
    element  : <AdminAllNotice/>
  },
  {
    path : "/addNotice" , 
    element  : <AddNotice/>
  },
  {
    path : "/addComplaint" , 
    element  : <AddComplaint/>
  },
   {
    path : "/contact" , 
    element  : <ContactPage/>
  },
   {
    path : "/report" , 
    element  : <AddLostOrFound/>
  },
   {
    path : "/rules&guidelines" , 
    element  : <CommunityRulePage/>
  },
  {
    path : "/allComplaint" , 
    element  : <AllComplaint/>
  },
  
  
])

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router = {appRouter}/>
  
)
