import React from 'react'
import Male from './images/maleProfile.jpg'
import Female from './images/femaleProfile.jpg'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function Employee() {
    const {employInfo} = useContext(GlobalContext)

    const Employees = employInfo.map(employ => {
        return <div style={{cursor: "pointer"}} >
                <img  src={employ.gender === 'male' ? Male : Female} alt=''/>
            <p className='p1'>Full Name: {employ.name}</p>
            <p className='p2'>Designation: {employ.job}</p>
            <p className='p2'>Task: {employ.job}</p>
            <p className='p2'>Status: {employ.job}</p>
            </div>
            
    })
    
    return (
        <div className='employee-box'>
            {Employees}
        </div>
        
    )
}


