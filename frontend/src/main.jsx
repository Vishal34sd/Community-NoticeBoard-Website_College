import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  {createBrowserRouter , RouterProvider} from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import UserDashboard from './pages/UserDashboard.jsx';



const appRouter = createBrowserRouter([
  {
    path : "/" , 
    element  : <LandingPage/>
  },
  {
    path : "/admin-login" , 
    element  : <AdminLogin/>
  },
  {
    path : "/login" , 
    element  : <Login/>
  },
  {
    path : "/sign-up" , 
    element  : <SignUp/>
  },
  {
    path : "/user-dashboard" , 
    element  : <UserDashboard/>
  }
])

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router = {appRouter}/>
  
)
