import React from 'react';

function Preview() {
  // Read data from localStorage or initialize with default values
  const picture = (localStorage.getItem('field0')) || {};
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  const formData2 = JSON.parse(localStorage.getItem('formData2')) || {};
  const formData3 = JSON.parse(localStorage.getItem('formData3')) || {};
  const formData4 = JSON.parse(localStorage.getItem('formData4')) || {};

  return (
    <div>
      
      <div>
        {picture && <img src={picture} alt="Profile Picture" />}
      </div>
      <h2>Personal Details:</h2>
          <p>Name: {formData.field1+" "+formData.field2}</p>
          <p>Email: {formData.field3}</p>
          <p>Mobile: {formData.field4}</p>
          <p>Address: {formData.field5}</p>
          <p>City: {formData.field6}</p>
          <p>State: {formData.field7}</p>
          <p>Postal Code: {formData.field8}</p>
          <p>Objective: {formData.field9}</p>
        
      

      <h2>Work Experience:</h2>
      {formData2.workExperience && formData2.workExperience.length > 0 ? (
        formData2.workExperience.every((work) => work.field1) ? (
          formData2.workExperience.map((work, index) => (
            <div key={index}>
              <p>Job Title: {work.field1}</p>
              <p>Organization Name: {work.field2}</p>
              <p>Start Year: {work.field3}</p>
              <p>End Year: {work.field4}</p>
            </div>
          ))
        ) : (
          <p></p>
        )
      ) : (
        <p></p>
      )}


<h2>Education details:</h2>
      {formData3.workExperience && formData2.workExperience.length > 0 ? (
        formData3.workExperience.every((work) => work.field1) ? (
          formData3.workExperience.map((work, index) => (
            <div key={index}>
              <p>Type: {work.field0}</p>
              <p>University: {work.field1}</p>
              <p>Degree: {work.field2}</p>
              <p>Start Year: {work.field3}</p>
              <p>End Year: {work.field4}</p>
            </div>
          ))
        ) : (
          <p></p>
        )
      ) : (
        <p></p>
      )}

<h2>Key Skills:</h2>
<h4>Primary Skills</h4>
      {formData4.workExperience && formData4.workExperience.length > 0 ? (
        formData4.workExperience.every((work) => work.field1) ? (
          formData4.workExperience.map((work, index) => (
            <div key={index}>
              
              <p>-> {work.field1}</p>
              <p>-> {work.field2}</p>
              
             
            </div>
          ))
        ) : (
          <p></p>
        )
      ) : (
        <p></p>
      )}
      <h4>Additional Skills</h4>
      {formData4.workExperience && formData4.workExperience.length > 0 ? (
        formData4.workExperience.every((work) => work.field3) ? (
          formData4.workExperience.map((work, index) => (
            <div key={index}>
              
              <p>-> {work.field3}</p>
              <p>-> {work.field4}</p>
             
            </div>
          ))
        ) : (
          <p></p>
        )
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Preview;