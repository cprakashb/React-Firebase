import React, { useState, useId, useDeferredValue } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./tools.scss"

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

export default function Notes() {
  const [currentNotes, setCurrentNotes] = useState("");
  const [notes, setNotes] = useState([]);
  const deferredNotes = useDeferredValue(notes);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const inputId = useId();




  return (
    <section id="tools-page" className="tools-page text-center">
      <div className='container'>
        <Card sx={{ maxWidth: 500 }} className="mt-3 mx-auto">
          <CardContent>


            <Stack direction="row" spacing={2} className="stack">
              <Typography gutterBottom variant="h5" component="div">
                Notes
              </Typography>
              <Button className="button" variant="contained" onClick={handleOpen}><AddCircleOutlineIcon /></Button>
            </Stack>

            <Stack direction="row" spacing={2}>
              <div className='notes'>{notes.length > 0 ? deferredNotes.map((note, index) => {
                return (<div className='note'>
                  <span>{note}</span>
                  <Button className="button" variant="contained" startIcon={<DeleteIcon />} onClick={() => { setNotes((prevState) => prevState.filter((prev, deleteIndex) => index !== deleteIndex)) }} >Delete</Button>
                </div>)
              }) : <p>No Notes available</p>}</div>
            </Stack>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="text-center ">
                <Typography id="modal-modal-title" variant="h6" component="div" className='mb-3 text-center' aria-describedby={inputId}>
                  Enter your Notes here
                </Typography>
                <TextField
                  id={inputId}
                  label="Notes"
                  multiline
                  rows={5}
                  className="w-100"
                  onChange={(event) => {
                    setCurrentNotes(event.target.value);
                  }}
                />
                <Button variant="contained" className="mt-2 button"
                  onClick={(event) => { setNotes((prevState) => [...prevState, currentNotes]); handleClose(true); setCurrentNotes(""); }}
                >Add</Button>
              </Box>
            </Modal>
          </CardContent>
        </Card>
      </div>

    
    </section>
  )
}