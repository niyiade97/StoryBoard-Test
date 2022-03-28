import React from 'react'
import { ImAttachment } from 'react-icons/im';
import { FcCheckmark } from 'react-icons/fc';

const Upload = ({label, name, type, handleOnChange, value}) => {

  const handleChange = (e) =>{
    e.preventDefault();
    const {name, files} = e.target;
    handleOnChange(name, files[0].name);
  }
  return (
    <div className='w-full pt-4 pb-10'>
        <label className='text-sm font-medium text-color3 opacity-70'>{label}</label>
        <input id="file" type={type} name={name} className='hidden' onChange={handleChange}/> 
        <div className='w-full h-10 bg-color6 rounded pl-3 place text-sm flex items-center justify-between px-2'>
            <div className='flex items-center'>
                <i className='text-primary text-xl pr-2'><ImAttachment /></i>
                <p>
                  {
                    value ? value : "Name of Required File"
                  }
                </p>
            </div>
            {
                !value ?
                <label htmlFor='file' className='px-3 py-1 bg-white text-color3 font-medium text-sm rounded hover:bg-primary hover:text-white cursor-pointer'>Upload</label>
                : <i className='text-xl'><FcCheckmark /></i>
            }
            
        </div>
    </div>
  )
}

export default Upload