import React, {useState} from 'react'
import Input from '../customElements/Input';
import Upload from '../customElements/Upload';
import EditSiteTemplate from '../customElements/EditSiteTemplate';

const AddNewUser = ({handleAddSiteModal}) => {

    const [addUser, setAddUser] = useState({
        userName: "",
        email: "",
        photo: ""
    })

    const handleAddNewUser = (name, value) =>{
      setAddUser((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    const handleAddFileOnChange = (name, value) =>{
      setAddUser((prevState) =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }
  return (
    <>
      <EditSiteTemplate
        handleSiteModal={handleAddSiteModal}
        headerText="Add New User"
        btnText="Add New User"
      >
        <Input 
            name="userName" 
            type="text" 
            label="User Name" 
            placeholder="Your username"
            value={addUser.userName}
            onChange={handleAddNewUser}
        />
        <Input 
            name="email" 
            type="email" 
            label="Email" 
            placeholder="Your Email"
            value={addUser.email}
            onChange={handleAddNewUser}
        />
        <Upload 
            name="photo" 
            type="file" 
            label="Upload your picture" 
            value={addUser.photo}
            handleOnChange={handleAddFileOnChange}
        />
      </EditSiteTemplate>
    </>
    
  )
}

export default AddNewUser