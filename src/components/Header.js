import React from 'react';
import "../style/header.css";

function Header(props){
  return (
    <>
        <header className="header"> 
        <h1 className='display-5'><b>MY BLOG</b></h1>
        <p className=''>Welcome to the blog of <span className='tag'>unknown</span></p>
        </header>
    </>
  );
}

export default Header