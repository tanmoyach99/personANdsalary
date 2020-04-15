import React from 'react';

const Salary = (props) => {
    const salary=props.salary
    
    let total =0;
    for(let i=0; i<salary.length; i++){
        const user = salary[i];
        total = total+parseInt(user.salary);
    }
    return (
        <div>
           <p> <b>Person Added: </b>{salary.length}</p>
            <p><b>Total Annual Salary: </b>{total}</p>
        </div>
    );
};

export default Salary;