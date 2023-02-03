import React from "react";

const User = (props) => {
    const {name,age} = props.data;
    return (
        <div>
            <h1>  User Component</h1>
            <h4> Name : { name}</h4>
            <h4> Age :  {age}</h4>
        </div>
    );
}

export default User;