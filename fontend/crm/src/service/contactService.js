import axios from 'axios'

const GET_API_URI= 'http://localhost:8080/contacts'

const getRequest = async () =>{

   const contact_data = axios.get('http://localhost:8080/contacts')
  .then(response => {return response.data})
  .catch(error => console.error('Error:', error));
 //   console.log(contact_data)
    return contact_data
}
const PUT_APT_URI = 'http://localhost:8080/contacts'

const putRequest =  async (data) =>{
 // request to backend
 // if fail return false
 // else true
//  {id:id, first_name: firstName, last_name:lastName, contact: contact, email: email, job_title: jobTitle} = data
//  cont
console.log(data)
// const contact = {  first_name: data.firstName, last_name: data.lastName, contact: data.contact, email: data.email, job_title: data.jobTitle}
 try {
    const response = await fetch(`${PUT_APT_URI }/${data._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
)
if(!response.ok)
{
    return false
}
return true;
}catch(e)
{
    console.error("Failed to fetch")
    return false
}

}

const DEL_API_URI = 'http://localhost:8080/contacts';
const deleteRequest = async(id) =>{
    try{
        const response = await fetch(`${DEL_API_URI}/${id}`, {
            method : 'DELETE',
        });
        if(!response.ok)
        {
            throw new Error("Failed to delete contact")
        }
        return true;
    }
    catch(e)
    {
        console.error("Error during the request")
        throw e;
    }
};

export default {

    getRequest,
    deleteRequest,
    putRequest
    
};
