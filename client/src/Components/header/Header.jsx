import React from 'react';
import './header.css'

const Header = () => {
  return (
    <>
      <div className='p-5 bg-[] shadow'>
        <nav className='flex justify-between px-[4rem]'>
          <h1 className='text-xl'>Navbar</h1>
          <ul className='inline-flex'>
            <li className='mx-3 cursor-pointer text-lg'>Home</li>
            <li className='mx-3 cursor-pointer text-lg'>About</li>
            <li className='mx-3 cursor-pointer text-lg'>Contact</li>
            <button className='sing-btn mx-5'>SingUp</button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
