import React from 'react'
import BackDrop from '../customElements/BackDrop'
import { IoIosClose } from 'react-icons/io';
import Input from '../customElements/Input';
import Upload from '../customElements/Upload';

const EditSiteTemplate = (props) => {
  
  return (
    <>
      <BackDrop handleBackDropOnClick={props.handleSiteModal} />
        <div className="sm:w-400 w-95 ml-47.5 absolute top-24 left-2/4 sm:ml-200 z-30">
          <div className='bg-white px-6 pb-10 relative'>
            <i className='rounded-full text-color15 text-2xl bg-color1 w-5 h-5 flex justify-center items-center cursor-pointer absolute right-0 -top-6' onClick={props.handleSiteModal}><IoIosClose /></i>
            <h1 className='text-2xl font-medium text-color3 pt-10'>{props.headerText}</h1>
            <div>
              {props.children}
            <div className='flex items-center justify-between py-3'>
                <button className='bg-white text-color11 rounded py-1 px-2 border border-color9 hover:bg-color11 hover:text-color6' onClick={props.handleSiteModal}>Cancel</button>
                <button className='ml-4 bg-primary text-white rounded py-1 px-2 hover:bg-white hover:text-primary hover:border-primary border' onClick={props.handleSiteModal}>{props.btnText}</button>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default EditSiteTemplate