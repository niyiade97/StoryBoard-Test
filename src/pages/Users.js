import React, {useState} from 'react'
import Layout from '../layout/Layout'
import Delete from '../components/modals/Delete';
import EditSite from '../components/modals/EditSite';
import { FiSearch } from 'react-icons/fi';
import { IoIosAdd } from 'react-icons/io';
import Pagination from '../components/Pagination';
import {userData} from "../data/usersData";
import AddNewUser from '../components/modals/AddUser';

const Users = () => {
    const [deleteModalIsActive, setDeleteModalIsActive] = useState(false);
    const [editModalIsActive, setEditModalIsActive] = useState(false);
    const [addSiteModalIsActive, setAddSiteModalIsActive] = useState(false);
    
    const [posts, setPosts] = useState(userData);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);

    const handleEditModal = () =>{
        setEditModalIsActive(!editModalIsActive);
    }
    
    const handleDeleteModal = () =>{
        setDeleteModalIsActive(!deleteModalIsActive);
    }
        
    const handleAddSiteModal = () =>{
        setAddSiteModalIsActive(!addSiteModalIsActive);
    }

    const DeleteModal = () =>{
        return(
            deleteModalIsActive && 
            <Delete 
                handleDeleteModal={handleDeleteModal}
            /> 
            )
    }
    const EditSiteModal = () =>{
        return(
            editModalIsActive && 
            <EditSite 
                handleEditModal={handleEditModal}
            />
            )
    }
    const AddSiteModal = () => {
        return(
            addSiteModalIsActive && 
            <AddNewUser 
                handleAddSiteModal={handleAddSiteModal} 
            />
        )
    }
    const Modals = () =>{
        return(
            <>
                <DeleteModal />
                <EditSiteModal />
                <AddSiteModal />
            </>
        )
    }

    const Table = () =>{
        return(
            <>
            {
                userData.length !== 0 ?
                <div className='rounded-sm shadow-custom-shadow min-w-1024'>
                    <table class="table-auto w-full text-base">
                        <thead>
                            <tr className='text-left bg-color6 text-color7 font-semibold w-4/5'>
                                <th className='w-10p text-center pt-3'><input type='checkbox' className='w-5 h-5' /></th>
                                <th className='w-1/4 py-2'>Site Name</th>
                                <th className='w-1/4 py-2'>Admin</th>
                                <th className='w-1/4 py-2'>Creation Date & Time</th>
                                <th className='w-1/5 py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-color8 font-medium'>
                        {
                            currentPosts.map(data =>(
                                <tr className='border-b border-color10'>
                                    <td className='text-center py-3'><input type='checkbox' className='w-5 h-5' /></td>
                                    <td className='underline py-3'>{data.name}</td>
                                    <td className='py-3'>{data.admin}</td>
                                    <td className='py-3'>{data.date}</td>
                                    <td className='py-3'>
                                        <button className='rounded border border-color9 text-color9 w-20 h-8 mr-7 hover:bg-color9 hover:text-white' onClick={handleDeleteModal}>Delete</button>
                                        <button className='rounded border border-primary text-primary w-20 h-8 hover:bg-primary hover:text-white' onClick={handleEditModal}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    <Pagination 
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginateBack={paginateBack}
                        paginateFront={paginateFront}
                        currentPage={currentPage}
                    />
                </div>
                :
                <div className='w-full h-96 relative'>
                    <p className='text-center absolute top-2/4 -translate-y-2/4 -translate-x-2/4 font-semibold text-3xl left-2/4'>No data</p>
                </div>
            }
            </>
        )
    }

    const Heading = () =>{
        return(
            <div className='flex justify-between items-center py-7'>
                <div className='pl-2'>
                    <h1 className='text-color3 text-3xl font-medium'>Users</h1>
                </div>
                <div className='flex items-center'>
                    <i className='bg-color4 text-color5 text-lg rounded-tl rounded-bl flex items-center justify-center h-11 px-2'><FiSearch /></i>
                    <input type="text" placeholder='Search for a user...' name="siteSearch" className='h-11 w-72 outline-none bg-color4 rounded-tr rounded-br' />
                    <button className='bg-primary text-white rounded w-48 h-11 ml-10 flex items-center text-sm font-medium hover:text-primary hover:bg-white border-primary hover:border-2' onClick={handleAddSiteModal}><i className='px-4 text-xl'>{<IoIosAdd />}</i>Add New User</button>
                </div>
            </div>
        )
    }
  return (
    <>
        <Layout 
            headingText="Users"
            headingBtnText="Add New User"
            handleAddSiteModal={handleAddSiteModal}
            modals={<Modals />}
            heading={<Heading />}
            table={<Table />}
        />
    </>
  )
}

export default Users