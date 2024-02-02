import { createContext, useState } from 'react';
import Employ from '../components/employeeInfo.js'


 const GlobalContext = createContext()
 export const GlobalProvider = ({children}) => {
   
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      // Implement authentication logic and set isLoggedIn to true
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      // Implement logout logic and set isLoggedIn to false
      setIsLoggedIn(false);
    };

    const [employInfo, setEmployInfo] = useState(Employ)
   
    
   

    return (
        <GlobalContext.Provider value={{isLoggedIn, handleLogin, handleLogout, employInfo}}> {children} </GlobalContext.Provider>
    );
}

export default GlobalContext