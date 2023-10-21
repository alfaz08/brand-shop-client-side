import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {


  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  // // <div className={`App ${darkMode ? 'dark' : ''}`}>
  // //     <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
  // //     <p>This is a sample text.</p>
  // //   </div>
 

  return (
    <div className="container mx-auto">
     
      <Navbar></Navbar>
    
       
   <Outlet></Outlet>

    
      
      </div>
      
   
  );
};

export default MainLayout;