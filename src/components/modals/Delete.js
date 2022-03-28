import React from 'react'
import BackDrop from '../customElements/BackDrop'
import { RiDeleteBin6Fill } from 'react-icons/ri';

const Delete = ({handleDeleteModal}) => {
  return (
    <>
        <BackDrop handleBackDropOnClick={handleDeleteModal} />
        <div className='bg-white sm:w-600 rounded-lg absolute z-20 p-7 left-2/4 top-24 sm:ml-300 w-95 ml-47.5'>
            <div className=''>
                <div className='flex'>
                    <div>
                        <div className='rounded-full bg-color12 w-14 h-14 flex justify-center items-center'>
                            <i className='text-color14 text-2xl'><RiDeleteBin6Fill /></i>
                        </div>
                    </div>
                    <div className='pl-6 text-color3 pb-10'>
                        <h1 className='font-semibold text-2xl'>Delete Site</h1>
                        <p className='opacity-70 text-sm font-normal'>Are you sure you want to delete this site? Once deleted, you cannot undo this action.</p>
                    </div>
                </div>
                <div className='flex items-center justify-end font-medium text-sm mb-1'>
                    <button className='bg-color6 text-color11 rounded p-1 px-2 hover:bg-color11 hover:text-color6' onClick={handleDeleteModal}>Cancel</button>
                    <button className='ml-4 bg-color14 text-white rounded py-1 px-2 hover:bg-white hover:text-color14 hover:border-color14 border' onClick={handleDeleteModal}> Delete User</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Delete