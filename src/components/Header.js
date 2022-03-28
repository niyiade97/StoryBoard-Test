import React from 'react';
import { ReactComponent as NotificationIcon } from "../assets/images/notificationIcon.svg";
import logo from "../assets/images/storyBoardLogo.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from 'react-icons/md';

export const Header = () => {

  return (
    <div className='w-full bg-white fixed top-0 2xl:max-w-2000 2xl:mx-auto'>
        <div className='w-95 mx-auto flex items-center justify-between h-20'>
            <Link to="/">
                <img src={logo} alt="storyboard-logo" className='cursor-pointer' />
            </Link>
            <div className='items-center hidden sm:flex'>
                <i className='cursor-pointer'><NotificationIcon /></i>
                <div className='flex items-center ml-3 cursor-pointer'>
                    <div className='rounded-full w-8 h-8 bg-color1 text-color2 flex justify-center items-center'>AI</div>
                    <p  className='mx-2'>Adelowo I...</p>
                    <i className='text-color3  text-md'><MdKeyboardArrowDown /></i>
                </div>
            </div>
        </div>
    </div>
  )
}
