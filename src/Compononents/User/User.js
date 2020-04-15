import React, { useState, useEffect } from 'react';
import './user.css'
import Person from '../person/Person';
import Salary from '../Salary/Salary';


const User = () => {
   const [users,setUsers]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(data => setUsers(data))
   },[]
   )
   const [salary,setSalary] = useState([]);
   

   
   const addSalary = (user) =>{
       console.log("salary added",user)
       const newSalary = [...salary,user];
       setSalary(newSalary);

   }
    
    return (
        <div className="person">
            <div className="person-details">
            {
          users.map(user=> <Person 
            addSalary = {addSalary}
            user={user}></Person> )
             }  
            </div>
            <div className="salary">
              <Salary salary={salary}></Salary>
            </div>
            
          
    
   </div>
    );
};

export default User;