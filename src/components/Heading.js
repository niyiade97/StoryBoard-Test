import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { IoIosAdd } from 'react-icons/io';

const Heading = ({headingText, headingBtnText,handleAddSiteModal}) =>{
    return(
        <div className='flex justify-between items-center py-7'>
            <div className='pl-2'>
                <h1 className='text-color3 text-2xl md:text-3xl font-medium'>{headingText}</h1>
            </div>
            <div className='flex items-center'>
                <div className='hidden items-center md:flex '>
                    <i className='bg-color4 text-color5 text-lg rounded-tl rounded-bl flex items-center justify-center h-11 px-2'><FiSearch /></i>
                    <input type="text" placeholder='Search for a site...' name="siteSearch" className='h-11 w-72 outline-none bg-color4 rounded-tr rounded-br' />
                </div>
                <button className='bg-primary text-white rounded w-36 h-10 text-xs md:text-sm md:w-48 md:h-11 ml-10 flex items-center font-medium hover:text-primary hover:bg-white border-primary hover:border-2' onClick={handleAddSiteModal}><i className='px-4 text-xl'>{<IoIosAdd />}</i>{headingBtnText}</button>
            </div>
        </div>
    )
}

export default Heading