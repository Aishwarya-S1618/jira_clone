'use client'
import * as React from 'react';
import { useState } from 'react';
import {
  Modal,
  Button,
  Typography,
  Box,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  Stack,
  IconButton,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function CreateTaskModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [project, setProject] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [assignedTo, setAssignedTo] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  // Error state variables
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [projectError, setProjectError] = useState(false);
  const [assignedToError, setAssignedToError] = useState(false);
  const [createdByError, setCreatedByError] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  // Validation function
  const validateInput = (inputValue, maxLength) => {
    const trimmedValue = inputValue.trim();
    return trimmedValue !== '' && trimmedValue.length <= maxLength;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Trim input values during form submission
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    const trimmedProject = project.trim();
    const trimmedAssignedTo = assignedTo.trim();
    const trimmedCreatedBy = createdBy.trim();
  
    // Validate each field and set error state accordingly
    setTitleError(!validateInput(trimmedTitle, 100));
    setDescriptionError(!validateInput(trimmedDescription, 1000));
    setProjectError(!validateInput(trimmedProject, 50));
    setAssignedToError(!validateInput(trimmedAssignedTo, 50));
    setCreatedByError(!validateInput(trimmedCreatedBy, 50));
    // If all fields are valid, handle form submission logic
    if (

      !(titleError || descriptionError ||projectError ||assignedToError ||createdByError)
    ) {
      // Form submission logic
      console.log('Title:', trimmedTitle);
      console.log('Description:', trimmedDescription);
      console.log('Project:', trimmedProject);
      console.log('Category:', category);
      console.log('Priority:', priority);
      console.log('Due Date:', dueDate);
      console.log('Assigned To:', trimmedAssignedTo);
      console.log('Created By:', trimmedCreatedBy);
      const curday = new Date();
      const yyyy = curday.getFullYear();
      let mm = curday.getMonth() + 1; // Months start at 0!
      let dd = curday.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const formattedToday = dd + '/' + mm + '/' + yyyy;
      console.log("Created On: ", formattedToday);
      // Reset error states after successful submission
      setTitleError(false);
      setDescriptionError(false);
      setProjectError(false);
      setAssignedToError(false);
      setCreatedByError(false);
  
      // Close the modal after form submission (optional)
      handleClose();
    }
  };
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setProject('');
    setCategory('');
    setPriority('');
    setDueDate('');
    setAssignedTo('');
    setCreatedBy('');
  };

  const isXs = useMediaQuery('(max-width:600px)');

  let selectWidth = '20rem'; // Default width for large screens

  if (isXs) {
    selectWidth = '10rem'; // Full width for extra small screens
  }

  return (
    <div>
      <Button
        type="button"
        variant="contained"
        sx={[{'&:hover': {backgroundColor: '#dd6670', color: '#eeEDD7'}}]}
        onClick={handleOpen}
      >
        Create Task
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/4000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            maxWidth: '90%',
            width: 'auto',
            maxHeight: '90%',
            overflow: 'auto',
            padding: 4,
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'linear-gradient(to bottom, #888, #555)',
              borderRadius: '10px',
              opacity: 0,
              transition: 'opacity 0.2s',
            },
            '&::-webkit-scrollbar-thumb:hover, &::-webkit-scrollbar-thumb:active': {
              opacity: 1,
            },
          }}
        >
          <IconButton 
            onClick={handleClose}
            sx={{
              backgroundColor:'#f44336',
              position: 'absolute',
              top: '10px',
              padding:'0.5%',
              right: '10px',
              borderRadius: '10%',
              color: '#eeEDD7',
              '&:hover': {backgroundColor: '#e53935'}
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="modal-modal-title"
            color="black"
            variant="h6"
            textAlign="center"
            fontWeight="bold"
            component="h4"
          >
            Create Task
          </Typography>

          <Typography id="modal-modal-description" sx={{ display: 'block', mt: 2 }}>
            <form autoComplete="false" onSubmit={handleSubmit}>
              <FormLabel sx={{ fontWeight: '400' }}>Title*</FormLabel>
              <TextField
                type="text"
                size="small"
                variant="outlined"
                color="primary"
                onChange={e => setTitle(e.target.value)}
                value={title}
                fullWidth
                required
                error={titleError}
                helperText={titleError ? "Title cannot be empty (Max- 100 characters)" : ''}
                sx={{ mb: 2 }}
              />

              <FormLabel sx={{ fontWeight: '400' }}>Description*</FormLabel>
              <TextField
                multiline
                type="text"
                size="small"
                rows={4}
                variant="outlined"
                color="primary"
                onChange={e => { setDescription(e.target.value)}}
                value={description}
                fullWidth
                required
                error={descriptionError}
                helperText={descriptionError ? "Description cannot be empty (Max- 1000 characters)" : ''}
                sx={{ mb: 2 }}
              />

              <FormLabel sx={{ fontWeight: '400' }}>Project*</FormLabel>
              <TextField
                type="text"
                size="small"
                variant="outlined"
                color="primary"
                onChange={e => { setProject(e.target.value)}}
                value={project}
                fullWidth
                required
                error={projectError}
                helperText={projectError ? "Project name cannot be empty (Max- 50 characters)" : ''}
                sx={{ mb: 2 }}
              />

              <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 1, md: 6 }}
              >
                <div>
                  <FormLabel sx={{ display: 'block', fontWeight: '400' }}>Category*</FormLabel>
                  <Select
                    size="small"
                    variant="outlined"
                    color="primary"
                    onChange={e => setCategory(e.target.value)}
                    value={category}
                    fullWidth
                    required
                    sx={{ mb: 2, width: selectWidth }}
                  >
                    <MenuItem value="Bug">Bug</MenuItem>
                    <MenuItem value="Feature">Feature</MenuItem>
                    <MenuItem value="Task">Task</MenuItem>
                  </Select>
                </div>

                <div>
                  <FormLabel sx={{ display: 'block', fontWeight: '400' }}>Priority*</FormLabel>
                  <Select
                    size="small"
                    variant="outlined"
                    color="primary"
                    autoWidth={true}
                    onChange={e => setPriority(e.target.value)}
                    value={priority}
                    required
                    fullWidth
                    sx={{ mb: 2, width: selectWidth }}
                  >
                    <MenuItem value="P0" sx={{width:selectWidth}}>P0</MenuItem>
                    <MenuItem value="P1" sx={{width:selectWidth}}>P1</MenuItem>
                    <MenuItem value="P2" sx={{width:selectWidth}}>P2</MenuItem>
                    <MenuItem value="P3" sx={{width:selectWidth}}>P3</MenuItem>
                  </Select>
                </div>
              </Stack>

              <FormLabel sx={{ fontWeight: '400' }}>Assigned To*</FormLabel>
              <TextField
                type="text"
                size="small"
                variant="outlined"
                color="primary"
                onChange={e => { setAssignedTo(e.target.value)}}
                value={assignedTo}
                fullWidth
                required
                error={assignedToError}
                helperText={assignedToError ? "Assignee name cannot be empty (Max- 50 characters)" : ''}
                sx={{ mb: 2 }}
              />

              <FormLabel sx={{ fontWeight: '400' }}>Due Date*</FormLabel>
              <TextField
                type="date"
                size="small"
                maxDate="3000-12-31"
                variant="outlined"
                color="primary"
                onChange={e => setDueDate(e.target.value)}
                value={dueDate}
                fullWidth
                required
                sx={{ mb: 2 }}
                inputProps={{
                  min: today, // Set minimum date to today
                  max: '2100-12-31', // Set maximum date to December 31, 2100
                }}
              />

              <FormLabel sx={{ fontWeight: '400' }}>Created By*</FormLabel>
              <TextField
                type="text"
                size="small"
                variant="outlined"
                color="primary"
                onChange={e => { setCreatedBy(e.target.value)}}
                value={createdBy}
                fullWidth
                required
                error={createdByError}
                helperText={createdByError ? "Please add your name (Max- 50 characters)" : ''}
                sx={{ mb: 2 }}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2, fontWeight: 'bold', fontSize: '16px' }}
              >
                Submit
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
