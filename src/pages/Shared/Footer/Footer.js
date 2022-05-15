import React from 'react';
import footer from '../../../assets/images/footer.png';
const Footer = () => {
    return (
        <footer className=" p-10  text-neutral-content px-12" style={{
            background:`url(${footer})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'
        }}>
        
        <div className='footer'> 
        <div>
    <span className="footer-title items-center"> SERVICES </span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title items-center"> ORAL HEALTH </span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title"> OUR ADDRESS </span> 
    <a className="link link-hover"> New York - 101010 Hudson </a>
    
  </div>
        </div>
  
        <div className='mt-10 text-center'>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
    );
};

export default Footer;