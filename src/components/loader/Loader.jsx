import React from 'react';
import './loader.css'
import { loader } from '../../assets/index';


const Loader = () => {
  return (
    <div className='loader'>
       <img src={loader} alt="" /> 
       <a href='/' className="loader__LogoLink">
       loading...
        </a>
    </div>
  )
}

export default Loader