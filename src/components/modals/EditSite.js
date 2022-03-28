import React, {useState} from 'react'
import BackDrop from '../customElements/BackDrop'
import { IoIosClose } from 'react-icons/io';
import Input from '../customElements/Input';
import Upload from '../customElements/Upload';
import EditSiteTemplate from '../customElements/EditSiteTemplate';

const EditSite = ({handleEditModal}) => {

  const [editSite, setEditSite] = useState({
    siteName: "ade",
    siteDescription: "ade",
    logo: "qwdqw"
  })

  const handleSiteEdit = (name, value) =>{
    setEditSite((prevState) =>{
        return{
            ...prevState,
            [name]: value
        }
    })
  }

  const handleEditFileOnChange = (name, value) =>{
    setEditSite((prevState) =>{
      return{
          ...prevState,
          [name]: value
      }
  })

  }
  return (
    <>
    <EditSiteTemplate
      handleSiteModal={handleEditModal} 
      siteData={editSite}
      handleOnChange={handleSiteEdit}
      handleFileOnChange={handleEditFileOnChange}
      headerText="Edit Site"
      btnText="Save Changes"
    >
      <Input 
            name="siteName" 
            type="text" 
            label="Site Name" 
            placeholder="Your site name"
            value={editSite.siteName}
            onChange={handleSiteEdit}
      />
      <Input 
            name="siteDescription" 
            type="text" 
            label="Site Description " 
            placeholder="Your site description"
            value={editSite.siteDescription}
            onChange={handleSiteEdit}
      />
      <Upload 
            name="logo" 
            type="file" 
            label="Upload your site logo" 
            value={editSite.logo}
            handleOnChange={handleEditFileOnChange}
      />

    </EditSiteTemplate>
    </>
    
  )
}

export default EditSite