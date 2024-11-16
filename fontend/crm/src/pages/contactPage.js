import { useState } from "react";
import { useEffect } from "react";
import contactService from "../service/contactService";
import ContactTable from "../components/table";
import NavBar  from "../components/nav";

const ContactPage = () => {

   const [contacts, setContacts] = useState([]);

   useEffect( () => {
    contactService.getRequest().then(data => setContacts(data))
   }, []);

   const handleEdit = async (data) => {
  
    const isSuceess = await contactService.putRequest(data)

    if(isSuceess == true)
    {
      console.log(isSuceess)
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === data._id ? { ...contact, ...data } : contact
        )
      );
    }
    else
    {
      return false
    }
    
   };

   const handleDelete = (id) =>{
     if(!window.confirm("Are you sure want to delete this contact?")) return;
     contactService.deleteRequest(id)
     .then(()=>{
      setContacts((x)=>x.filter((contact) => contact._id !== id))
     })
     .catch((e)=>{
      console.log("Erroe deleting")
      alert("Failed to delete. Please try again")
     });
     
   };
   
   return (
   <div>
    <NavBar/>
    <h1 style={{ textAlign: "center" }}> Contacts Details </h1>
   <ContactTable contacts={contacts} onDelete ={handleDelete} onUpdate={handleEdit}/>
   </div>
   )
   
};

export default ContactPage