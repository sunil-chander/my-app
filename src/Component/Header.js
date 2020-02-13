import React from 'react';
import logo from './my_pic.jpg';
import './Style.css'

function Header(){
return(
    <div>
    <img src={logo} alt="logo" />
    <h2 className="title"> Sunil Chander Online tutorials..</h2>
    </div>
);

}

export default Header;