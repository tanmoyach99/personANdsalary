import React from 'react';
import './person.css'

const Person = (props) => {
    console.log(props.user)
    const {img,name,email,phone,salary} = props.user;
    return (
        <div className="user-details">
            <div>
                 <img src={img} alt=""/>
            </div>
            <div className= "everything">
            <h4> <b>Name: </b> {name}</h4>
            <h4> <b>E-mail: </b>{email} </h4>
            <h4> <b>Cell-no: </b> {phone} </h4>
            <h4> <b>Salary: </b> ${salary} </h4>
            <button onClick = {()=> props.addSalary(props.user)}> Added salary </button>
            </div>
        </div>
    );
};

export default Person;