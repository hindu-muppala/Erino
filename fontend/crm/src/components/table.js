
import React from 'react';
import { useState  } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";


const ContactTable = ({ contacts, onDelete , onUpdate}) => {
  contacts.sort((a,b) => {
    if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) return -1
    if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1
    return 0
  })
  const  [openEditDialog, setOpenEditDialog] =  useState(false)
  const  [currentContact, setCurrentContact] =  useState(null)
  const  [successMessage, setSuccessMessage] =  useState("")

  const handleEditClick = (contact) =>{

    setCurrentContact(contact)
    setSuccessMessage("")
    setOpenEditDialog(true)
  }
  const handleCloseEditDialog =() =>{
    setOpenEditDialog(false)
    setCurrentContact(null)
    setSuccessMessage("")
  }
  const handleUpdate = () =>{
    const state = onUpdate(currentContact)

    if(state) {
      setSuccessMessage("Contact updated sucessfully")
      // update contacts state of which currentContact changed
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setCurrentContact((prev) => ({...prev, [name] : value}));
  };

    return (
      <>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact, i) => (
            <TableRow key={contact._id}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{contact.first_name}</TableCell>
              <TableCell>{contact.last_name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.contact}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.job_title}</TableCell>
              <TableCell>
                <IconButton
                  color = "primary"
                  onClick={ () => handleEditClick(contact)}
                  aria-label={`Edit contact ${contact.first_name} ${contact.last_name}`}
                  >
                <EditIcon/>
                </IconButton>
                
                <IconButton
                  color="error"
                  onClick={() => onDelete(contact._id)}
                  aria-label={`Delete contact ${contact.first_name} ${contact.last_name}`}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          {currentContact && (
            <>
              <TextField
                margin="dense"
                label="First Name"
                value={currentContact.first_name}
                fullWidth
                disabled
              />
              <TextField
                margin="dense"
                label="Last Name"
                value={currentContact.last_name}
                fullWidth
                disabled
              />
            <TextField
                margin="dense"
                label="Email"
                name="email"
                value={currentContact.email}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Phone Number"
                name="contact"
                value={currentContact.contact}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Company"
                name="company"
                value={currentContact.company}
                onChange={handleInputChange}
                fullWidth
              />
            <TextField
                margin="dense"
                label="Job Title"
                name="job_title"
                value={currentContact.jobtitle}
                onChange={handleInputChange}
                fullWidth
              />
              {successMessage && (
                <Typography
                  variant="body2"
                  color="success"
                  sx={{ marginTop: 2 }}
                >
                  {successMessage}
                </Typography>
              )}
            </>
          )}
          </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={handleUpdate} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactTable;
