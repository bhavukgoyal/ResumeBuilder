import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import './Blah.css';
import { Block } from '@mui/icons-material';


function Preview() {

  const componentRef = useRef();
  const generatePDF = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);
      pdf.save('MyCV.pdf');
    });
  };

  const templated = localStorage.getItem('Template')
  console.log(templated);
  let thiscolor;
  if (templated === '1') {
    thiscolor = 'yellow';
  } else if (templated === '2') {
    thiscolor = 'white';
  } else if (templated === '3') {
    thiscolor = 'pink';
  } else if (templated === '4') {
    thiscolor = 'skyblue';
  } else {
    thiscolor = 'transparent';
  }
  
  // Read data from localStorage or initialize with default values
  const picture = localStorage.getItem('field0') || '';
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  const formData2 = JSON.parse(localStorage.getItem('formData2')) || {};
  const formData3 = JSON.parse(localStorage.getItem('formData3')) || {};
  const formData4 = JSON.parse(localStorage.getItem('formData4')) || {};

  return (<div>
    <div className="resume-container" style={{ backgroundColor: thiscolor }} ref={componentRef}>
    <div className='resume-container' style={{backgroundColor: thiscolor}}>
    

      <div className="section">
        {picture && <img src={picture} alt="Profile Picture" />}
      </div>

      <div className="section">
        <h2>Personal Details:</h2>
        <p>Name: {formData.field1 + ' ' + formData.field2}</p>
        <p>Email: {formData.field3}</p>
        <p>Mobile: {formData.field4}</p>
        <p>Address: {formData.field5}</p>
        <p>City: {formData.field6}</p>
        <p>State: {formData.field7}</p>
        <p>Postal Code: {formData.field8}</p>
        <p>Objective: {formData.field9}</p>
      </div>

      <div className="section">
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
      </div>

      <div className="section">
        <h2>Education Details:</h2>
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
      </div>

      <div className="section">
        <h2>Key Skills:</h2>
        <div className="skills-list">
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
        </div>

        <div className="skills-list">
        
          {formData4.workExperience && formData4.workExperience.length > 0 ? (
        formData4.workExperience.every((work) => work.field3) ? (
          formData4.workExperience.map((work, index) => (
            <div key={index}>
              {(index===0)?<h4>Additional Skills</h4>:""}
              {(work.field3)?<p>-> {work.field3}</p>:""}
              {(work.field4)?<p>-> {work.field4}</p>:""}
             
            </div>
          ))
        ) : (
          <p></p>
        )
      ) : (
        <p></p>
      )}
        </div>
      </div>
    </div>
    </div>
    <button style={{height:100,marginTop:20,backgroundColor:'red',color:'white',
    display:Block,width:780}} 
    onClick={generatePDF}>Download PDF</button>
  </div>
  );
}

export default Preview;