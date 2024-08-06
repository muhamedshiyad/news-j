import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (

   <footer className='navbar-light bg-custom d-flex flex-column align-items-center justify-content-center'>
            <div className='my-2' style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://facebook.com" style={{ color: 'white' }}><FaFacebook size={24} /></a>
              <a href="https://twitter.com" style={{ color: 'white' }}><FaTwitter size={24} /></a>
              <a href="https://instagram.com" style={{ color: 'white' }}><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" style={{ color: 'white' }}><FaLinkedin size={24} /></a>
            </div>
            <div className='text-white' style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p>&copy; 2024 NewsWebsite. All Rights Reserved.</p>
        </div>
   </footer>
            
  );
}

export default Footer;
