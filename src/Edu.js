import * as React from 'react';
import {Link} from "react-router-dom";
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import {useEffect} from 'react';

function Work(){

  /*const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData2');
    return savedData ? JSON.parse(savedData) : { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '', field7: '', field8: '', field9: '' };
  });

  useEffect(() => {
    // Save form data to local storage whenever it changes
    localStorage.setItem('formData2', JSON.stringify(formData));
  }, [formData]);

  /*const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };*/

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData3');
    return savedData ? JSON.parse(savedData) : { workExperience: [{ field0: '',field1: '', field2: '', field3: '', field4: '' }] };
  });

  const addField = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      workExperience: [...prevFormData.workExperience, { field0: '',field1: '', field2: '', field3: '', field4: '' }],
    }));
  };

  const handleChange = (event, experienceIndex, field) => {
    const updatedWorkExperience = formData.workExperience.map((experience, index) => {
      if (index === experienceIndex) {
        return {
          ...experience,
          [field]: event.target.value,
        };
      }
      return experience;
    });
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      workExperience: updatedWorkExperience,
    }));
  };
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    localStorage.setItem('formData3', JSON.stringify(formData));
    checkFormValidity();
  }, [formData]);
  const removeField = (index) => {
    setFormData((prevFormData) => {
      const updatedWorkExperience = [...prevFormData.workExperience];
      updatedWorkExperience.splice(index, 1);
      return { ...prevFormData, workExperience: updatedWorkExperience };
    });
  };

  const checkFormValidity = () => {
    const requiredFields = [
      'field0',
      'field1',
      'field2',
      'field3',
      'field4',
    ];
  
    const isValid = formData.workExperience.every((work) =>
      requiredFields.every((field) =>
       work[field].trim() !== '' && validateField(field, work[field])
      )
    );
  
    setFormValid(isValid);
  };
  

  const validateField = (fieldName, value) => {
    // Perform validation for each field and return true or false based on validations
    switch (fieldName) {
      case 'field0':
      case 'field1':
      case 'field2':
      case 'field3':
      case 'field4':
        // Example validation: Minimum of 2 or 5 characters
        return value.length >= 1;
      
      default:
        return true; // Field is not required, so it's considered valid
    }
  };  

return (
    <form>
<h1>Education Details</h1>

{/*<h3>Experience 1</h3>
<hr></hr>
  <div>   
<div className="names">

<TextField label="Job Title" name="field1" value={formData.field1} onChange={handleChange}variant="filled" color="secondary" focused /></div>
<div className="names">

<TextField id="filled-basic" label="Organization Name" name="field2" value={formData.field2} onChange={handleChange}variant="filled" color="secondary" focused/></div></div>

<div>
<div className="names">
<TextField id="filled-basic" label="Start Year"name="field3" value={formData.field3} onChange={handleChange} variant="filled" color="secondary" focused/></div>
<div className="names">
<TextField id="filled-basic" label="End Year"name="field4" value={formData.field4} onChange={handleChange} variant="filled" color="secondary" focused/></div>
</div>*/}

{formData.workExperience.map((experience, index) => (
  <div key={index}>
    {index !== 0 && (
          <div className="crossSign1" onClick={() => removeField(index)}>
            &#10006; {/* Cross sign */}
          </div>
        )}
    <hr />
    <div className="names">
        <TextField
          label="Type"
          name="field0"
          value={experience.field0}
          onChange={(e) => handleChange(e, index, 'field0')}
          variant="filled"
          color="secondary"
          focused
        />
      </div>
    <div>
      <div className="names">
        <TextField
          label="University"
          name="field1"
          value={experience.field1}
          onChange={(e) => handleChange(e, index, 'field1')}
          variant="filled"
          color="secondary"
          focused
        />
      </div>

      <div className="names">
        <TextField
          id="filled-basic"
          label="Degree"
          name="field2"
          value={experience.field2}
          onChange={(e) => handleChange(e, index, 'field2')}
          variant="filled"
          color="secondary"
          focused
        />
      </div>
    </div>

    <div>
      <div className="names">
        <TextField
          id="filled-basic"
          label="Start Year"
          name="field3"
          value={experience.field3}
          onChange={(e) => handleChange(e, index, 'field3')}
          variant="filled"
          color="secondary"
          focused
        />
      </div>

      <div className="names">
        <TextField
          id="filled-basic"
          label="End Year"
          name="field4"
          value={experience.field4}
          onChange={(e) => handleChange(e, index, 'field4')}
          variant="filled"
          color="secondary"
          focused
        />
      </div>
    </div>

    
  </div>
))}
<div className='addbut'><Button onClick={addField} variant="contained" size="small"color="secondary">Add</Button></div>


<div className="perbut">
<Link className='und' to="../Work Experience"><Button variant="contained">Back</Button></Link>
{formValid ? (
          <Link className="und" to="../Key Skills">
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

export default Work