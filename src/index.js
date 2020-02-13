import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import Footer from './Component/Footer';
import Header from './Component/Header';

function Employee(props){
    return  <div>
    <h1>Hi Employee welcome to NTTDATA UK .</h1>
    <h1>your name : {props.name}</h1>
    <h1>your empId : {props.empId}</h1>

    
    
    </div>

}


ReactDOM.render(<Employee name="Sunil Chander" empId="tv0001" />,document.getElementById("root"));