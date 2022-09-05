import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import FormData from 'form-data';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';

export default class MultilineTextFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      output: '',
      reponse: null,
    };
  }

  onClickDelete = () => {
    this.setState({value: ''})
    this.setState({output: ''})
  }

  onClickSend = () => {
    
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object      
    formData.append('text',
      this.state.value,
    );
    
    axios.post("http://localhost:8000/text_to_summarize", 
                formData,
                {headers: {
                  'content-type': 'multipart/form-data'
                }}
                )
    .then(res => 
      this.setState({output: res.data}),
      )
    
  };
  

  render() {
    return (
<Grid>
<Grid container justifyContent="center" size='50%'>
  <Grid padding={2} item xs={8}>
  <TextField
          id="outlined-multiline-static"
          label="Insert your text here"
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})} 
          multiline
          rows={8}
          fullWidth
        />
  </Grid>
  <Grid container justifyContent="center">
  <Grid padding={2}>
  <IconButton aria-label="delete" onClick={() => this.onClickDelete()}>
  <DeleteIcon />
  </IconButton>
  <Button variant="contained" endIcon={<SendIcon />} onClick={() => this.onClickSend()}>Summarize</Button>
  </Grid>
  </Grid>
  <Grid container justifyContent="center">
  <Grid padding={2} item xs={8}>
  <TextField
              label="Text Summary"
              color='success'
              multiline
              value={this.state.output}
              fullWidth
              rows={8}
            />
  </Grid>
  </Grid>
  </Grid>
  </Grid>
  )}}