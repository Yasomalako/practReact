import "./adduser.css";
import React from "react";
import {useState} from 'react'
function AddUser() {
  const[addUser,setAdUser]= useState({
    firstName:"",
    lastName:"",
    age:"",
    email:"",
    password:"",
    passwordOne:""
});
const handelFirstName =(event)=>{
  setAdUser({...addUser,firstName:event.target.value})
}
const handelLastName=(event)=>{
  setAdUser({...addUser,lastName:event.target.value})
}
const handelAge=(event)=>{
  setAdUser({...addUser,age:event.target.value})
}
const handelEmail=(event)=>{
  setAdUser({...addUser,email:event.target.value})
}
const handelPassword=(event)=>{
  setAdUser({...addUser,password:event.target.value})
}
const handelPsswordtow=(event)=>{
  setAdUser({...addUser,passwordOne:event.target.value})
}
const[submit,setSubmit]= useState(false)
  return (
    <div className="adduser">
      <h1>adduser</h1>
      <form onClick={setSubmit}>
        <input placeholder="first name" type="text" onChange={handelFirstName}/><br></br>
        <input  placeholder="last name" type="text" onChange={handelLastName}/><br></br>
        <input  placeholder="age" type="text" onChange={handelAge}/><br></br>
        <input  placeholder="email" type="text" onChange={handelEmail}/><br></br>
        <input  placeholder="password" type="text" onChange={handelPassword}/><br></br>
        <input  placeholder="password " type="text" onChange={handelPsswordtow}/><br></br>
        <button onClick={setSubmit}>Submit</button>
      </form>

      <table>
        <thead>
          <td>first name</td>
          <td>last name</td>
          <td>age</td>
          <td>E-mail</td>
          <td>password</td>
          <td>password-validation</td>
        </thead>
        <tbody>
          <tr>
            <td>{addUser.firstName}</td>
            <td>{addUser.lastName}</td>
            <td>{addUser.age}</td>
            <td>{addUser.email}</td>
            <td>{addUser.password}</td>
            <td>{addUser.passwordOne}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddUser;
