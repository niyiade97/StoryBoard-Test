import React, {useState} from 'react'
import Input from '../customElements/Input';
import Upload from '../customElements/Upload';
import EditSiteTemplate from '../customElements/EditSiteTemplate';

const AddNewSite = ({handleAddSiteModal}) => {

    const [addSite, setAddSite] = useState({
        siteName: "",
        siteDescription: "",
        logo: ""
    })

    const handleAddNewSite = (name, value) =>{
        setAddSite((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    const handleAddFileOnChange = (name, value) =>{
        setAddSite((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
  return (
    <EditSiteTemplate
        handleSiteModal={handleAddSiteModal} 
        siteData={addSite}
        handleOnChange={handleAddNewSite}
        handleFileOnChange={handleAddFileOnChange}
        headerText="Add New Site"
        btnText="Add New User"
      >
        <Input 
            name="siteName" 
            type="text" 
            label="Site Name" 
            placeholder="Your site name"
            value={addSite.siteName}
            onChange={handleAddNewSite}
        />
        <Input 
            name="siteDescription" 
            type="text" 
            label="Site Description " 
            placeholder="Your site description"
            value={addSite.siteDescription}
            onChange={handleAddNewSite}
        />
        <Upload 
            name="logo" 
            type="file" 
            label="Upload your site logo" 
            value={addSite.logo}
            handleOnChange={handleAddFileOnChange}
        />
    </EditSiteTemplate>
  )
}

export default AddNewSite