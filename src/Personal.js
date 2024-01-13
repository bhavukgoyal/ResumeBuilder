import React from 'react';

import './App.css';
import {useState} from 'react';
import {Link} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import resmg from './resmg';
import {useEffect} from 'react';



const Personal = () =>{
 
  const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

      
      useEffect(() => {
        const storedUrl = localStorage.getItem('field0');
        if (storedUrl) {
          const avatars = document.getElementsByClassName('avatar');
          for (let i = 0; i < avatars.length; i++) {
            avatars[i].src = storedUrl;
        }
        }
      }, []);
    
     
        
    
            function changeImage(event) {
              document.getElementById('newavatar').src=URL.createObjectURL(event.target.files[0])
              
        localStorage.setItem('field0',URL.createObjectURL(event.target.files[0]))
        }

    const [formData, setFormData] = useState(() => {
      const savedData = localStorage.getItem('formData');
      return savedData ? JSON.parse(savedData) : { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '', field7: '', field8: '', field9: '' };
    });
 
  const [formValid, setFormValid] = useState(false);
    useEffect(() => {
      // Save form data to local storage whenever it changes
      localStorage.setItem('formData', JSON.stringify(formData));
      
      checkFormValidity(); 
     
    }, [formData]);
  
    const handleChange = (event) => {
      
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

   
  const checkFormValidity = () => {
    const requiredFields = [
      'field1',
      'field2',
      'field3',
      'field4',
      'field5',
      'field6',
      'field7',
      'field8',
      'field9',
    ];
    const isValid = requiredFields.every((field) => formData[field].trim() !== '' && validateField(field, formData[field]));
    setFormValid(isValid);
  };
  
  const validateField = (fieldName, value) => {
    // Perform validation for each field and return true or false based on validations
    switch (fieldName) {
      case 'field1':
      case 'field2':
      case 'field5':
        // Example validation: Minimum of 2 or 5 characters
        return value.length>=1;
      case 'field3':
        // Example validation: Email format
        return /\S+@\S+\.\S+/.test(value);
      case 'field4':
        // Example validation: 10 digits for mobile number
        return /^\d{10}$/.test(value);
      // Add validations for other fields as needed
      default:
        return true; // Field is not required, so it's considered valid
    }
  };  
  
  return (
    <form>
        <div>
        <div className="names">
        <img src={resmg} className='avatar' id="newavatar" width="136px" height="136px" alt="Your Photograph"/><div>
        <Button component="label"  onChange={changeImage }variant="contained"  startIcon={<CloudUploadIcon />}>
  Upload your Photo
  <VisuallyHiddenInput type="file"  />
</Button></div></div></div>
<div className="names">
<div>
<TextField id="filled-basic" label="First Name" name="field1" value={formData.field1} onChange={handleChange}  variant="filled" color="secondary" focused /></div></div>

<div className="names">
<div>
<TextField id="filled-basic" label="Last Name" name="field2" value={formData.field2} onChange={handleChange}   variant="filled" color="secondary" focused/></div></div>
<div>
<div className="names">
<div>
<TextField id="filled-basic" label="Email"name="field3" value={formData.field3} onChange={handleChange} variant="filled" color="secondary" focused/></div></div>
<div className="names">
<div>
<TextField id="filled-basic" label="Mobile" name="field4" value={formData.field4} onChange={handleChange}variant="filled" color="secondary" focused/></div></div></div>
<div>
<div className="names">
<div>
<TextField id="filled-basic" label="Address"name="field5" value={formData.field5} onChange={handleChange} variant="filled" style={{width:465}} color="secondary" focused/></div></div></div>
<div>
<div className="names">
<div>
<TextField id="filled-basic" label="City" name="field6" value={formData.field6} onChange={handleChange}variant="filled"color="secondary" focused /></div></div>
<div className="names">
<div>
<TextField id="filled-basic" label="State"name="field7" value={formData.field7} onChange={handleChange} variant="filled" color="secondary" focused/></div></div></div>
<div>
<div className="names">
<div>
<TextField id="filled-basic" label="Postal Code"name="field8" value={formData.field8} onChange={handleChange} variant="filled" color="secondary" focused/></div></div></div>
<div>
<div className="names">
<div>
<TextField
          id="filled-multiline-static"
          label="Objective"
          name="field9" value={formData.field9} onChange={handleChange}
          multiline
          rows={4}
          color="secondary" focused
          variant="filled"
          className="tex"
        /></div></div></div>




<div className="perbut">

{formValid ? (
          <Link className="und" to="../Work Experience">
            <Button variant="contained">
              Next
            </Button>
          </Link>
        ) : (
          <Button variant="contained" disabled>
            Next
          </Button>
        )}
      </div>
    </form>
)
}

export default Personal;