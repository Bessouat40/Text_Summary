import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import FormData from 'form-data';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export default class MultilineTextFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      output: '',
      selectedFile:null
    };
  }

  sendFile = () => {
    this.setState({value: ''})
    // Create an object of formData
    const formData = new FormData();
    console.log(this.state.selectedFile)
    // Update the formData object      
    formData.append('file',
      this.state.selectedFile,
    );
    
    axios.post("http://localhost:8000/file_to_summarize", 
                formData,
                {headers: {
                  'content-type': 'multipart/form-data'
                }}
                )
    .then(res => 
      this.setState({output: res.data[0], value: res.data[1]}),
      )
    
  };

  onClickDelete = () => {
    this.setState({value: ''})
    this.setState({output: ''})
    this.setState({selectedFile: null})
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
      this.setState({output: res.data[0], value: res.data[1]}),
      )
    
  };

  onDownload = () => {
    var data = new Blob([this.state.output], {type: 'application/zip'});
    var URL = window.URL.createObjectURL(data);
    var link = document.createElement('a');
    link.href = URL;
    link.setAttribute('download', 'resume.docx');
    link.click();
  };
  

  render() {
    return (
<Grid>
<Grid container justifyContent="center" size='50%'>
  <Grid padding={1} item xs={8}>
  <IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden type="file" onChange={(e) => this.setState({ selectedFile: e.target.files[0]})}/>
  <FileUploadIcon style={{ color: ' #515a5a ' }} />
  </IconButton>
  <Button variant="contained" endIcon={<SendIcon />} onClick={() => this.sendFile()}>Summarize file</Button>
  </Grid>
  <Grid padding={2} item xs={8}>
  <TextField
          id="outlined-multiline-static"
          label="Insert your text here"
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})} 
          multiline
          rows={7}
          fullWidth
        />
  </Grid>
  <Grid container justifyContent="center">
  <Grid padding={1}>
  <IconButton aria-label="delete" onClick={() => this.onClickDelete()}>
  <DownloadIcon style={{ color: ' #515a5a ' }} onClick={() => this.onDownload()}/>
  </IconButton>
  <Button variant="contained" endIcon={<SendIcon />} onClick={() => this.onClickSend()}>Summarize text</Button>
  <IconButton aria-label="delete" onClick={() => this.onClickDelete()}>
  <DeleteIcon style={{ color: ' #515a5a ' }} />
  </IconButton>
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
              rows={7}
            />
  </Grid>
  </Grid>
  </Grid>
  </Grid>
  )}}