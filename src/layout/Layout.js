import React from 'react'
import { Header } from '../components/Header';
import Heading from '../components/Heading';
import Nav from '../components/Nav';

const Layout = (props) => {
  return (
    <div className='bg-color6'>
    {props.modals}
    <Header />
    <div className='w-full h-[calc(100vh-80px)] mt-20 overflow-auto'>
        <div className='w-95 mx-auto'>
            <Heading 
                headingText={props.headingText}
                headingBtnText={props.headingBtnText}
                handleAddSiteModal={props.handleAddSiteModal}
            />
            <Nav />
            <div className='bg-white p-8 mb-10 overflow-auto'>
                {props.table}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Layout;