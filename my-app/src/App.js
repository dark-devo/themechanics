import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/project/SignIn.js';
import Home from './components/project/Home.js'




//import Employee from "./components/employee.js";
//import Navbar from './components/navbar.js';
//import Header from './components/header.js';
//import EmployInfo from './components/employeeInfo.js'



const App= () => {
    return (
     <GlobalProvider>
        <Router>
                <Routes>
                    <Route exact path='/'
                    element={<SignIn />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                </Routes>         
        </Router>    
    </GlobalProvider>
    );           
};

export default App;

/*const [employInfo, setEmployInfo] = React.useState(EmployInfo)
    const [selectedTeam, setSelectedTeam] = React.useState("TeamA")

    function handleTeamSelection(event) {
        setSelectedTeam(event.target.value)
    }
    
    function handleEmployeeCardClick(event) {
        const transformedTeam = employInfo.map(employee => 
            employee.id === parseInt(event.currentTarget.id) ?
            (employee.teamName === selectedTeam ? {...employee, teamName: ''} : {...employee, teamName: {selectedTeam}}) :
            employee
        )
        setEmployInfo(transformedTeam)
        console.log(transformedTeam)
    }
    
    const membersElement = employInfo.map(employee =>  <Employee 
            name = {employee.fullName}
            job = {employee.designation}
            key = {employee.id}
            id = {employee.id}
            gender = {employee.gender}
            team = {employee.teamName}
            selectedTeam = {selectedTeam}
            handleTeamSelection = {handleTeamSelection}
            handleEmployee = {handleEmployeeCardClick}  
                />
            ) 

   return (
    <div>
        <Navbar />
        <div className='main-box'>
           <Header selectedTeam = {selectedTeam} handleTeamSelection = {handleTeamSelection}/>
        <section className='emp-box'>
            {membersElement}
        </section> 
        </div>
        
    </div>
   ) */