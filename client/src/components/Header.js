import React, { Component } from 'react';
// import "../styles/Header.css";
import Button from './Button'


const Header = ({onAdd,showAdd}) => {
   
    return (
      <div className="header">
        <h1>Projects Directory</h1>
        <Button className='btn' color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add a Project'} onClick={onAdd} />
        
      </div>
    )
  }
export default Header
