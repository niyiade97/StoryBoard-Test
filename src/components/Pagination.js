import React from 'react'
import { MdKeyboardArrowDown,MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Pagination = ({postsPerPage, totalPosts, paginateFront, paginateBack, currentPage}) => {

    const NextIsActive = Math.ceil(totalPosts/postsPerPage) === currentPage ? true : false;
    const PrevIsActive = currentPage === 1 ? true: false;
    return (
    <div className='flex justify-between py-6 px-4'>
        <div>
            <button className={`flex items-center justify-center font-medium text-base text-color3 opacity-70 hover:text-primary ${PrevIsActive && "cursor-not-allowed"}`} onClick={paginateBack} disabled={PrevIsActive}>
                <i className='text-2xl'><MdKeyboardArrowLeft /></i>
                Previous
            </button>
        </div>
        <div>
            <p className='flex items-center text-color18 text-base'>Items per page:<span className='px-2 text-primary'> 10 Items </span><i className='text-2xl'><MdKeyboardArrowDown /></i></p>
        </div>
        <div>
            <button className={`flex items-center justify-center font-medium text-base text-color3 opacity-70 cursor-pointer hover:text-primary ${NextIsActive && "cursor-not-allowed"}`} onClick={paginateFront} disabled={NextIsActive}>
                Next
                <i className='text-2xl'><MdKeyboardArrowRight /></i>
            </button>
        </div>
    </div>
    )
}

export default Pagination