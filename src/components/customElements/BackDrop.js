import React from 'react'
import { createPortal } from 'react-dom';

const BackDrop = (props) => {
  return createPortal(
    <div className='bg-color11 w-full h-screen fixed top-0 left-0 z-10' onClick={props.handleBackDropOnClick}>
        {props.children}
    </div>,
    document.getElementById("root")
  )
}

export default BackDrop