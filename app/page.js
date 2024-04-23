'use client'
import Image from "next/image";
import CreateTaskModal from "@/components/create-task";
import { Button, Alert, Snackbar } from '@mui/material';
import { useState } from "react";
export default function Home() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState("")

  const showSuccessAlert = (message) => {
    setMessage(message)
    setShowAlert(true)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to SprintCrew</div>
      <Button
        type="button"
        variant="contained"
        sx={[{'&:hover': {backgroundColor: '#dd6670', color: '#eeEDD7'}}]}
        onClick={() => setShowCreateModal(true)}
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
      <p>Date: 3:00pm 12th April 2024</p>
      {showCreateModal && <CreateTaskModal open={showCreateModal} setOpen={setShowCreateModal} showSuccessAlert={showSuccessAlert}/>}
      {showAlert && 
        <Snackbar open={showAlert} autoHideDuration={5000} onClose={() => setShowAlert(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center'}}>
          <Alert
            onClose={() => setShowAlert(false)}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        </Snackbar>
      }
    </main>
  );
}
