import React, { useState, useEffect} from 'react';
import img1 from './preimg1.jpg';
import img2 from './preimg2.jpg';
import img3 from './preimg3.jpg';
import img4 from './preimg4.jpg';
import Button from '@mui/material/Button';






function Home() {

  const [template, setTemplate] = useState(null)
  
  const handleTemplateChange = templateNumber => {
    setTemplate(templateNumber);
    localStorage.setItem('Template', templateNumber);
    console.log(template);
    window.location.hash = '/Personal Info';
  };

  useEffect(() => {
    const storedTemplate = localStorage.getItem('Template');
    setTemplate(storedTemplate ? parseInt(storedTemplate) : null);
  }, []);
/*
useEffect(() => {
    localStorage.setItem('Template', (template)); // Store the template value in local storage whenever it changes
  }, [template]);*/

  //const [template, setTemplate] = useState(() => {
    //const storedTemplate = 
    // Get the stored template value from local storage
    //return storedTemplate ? (storedTemplate) : '';
  //});
  
    

  

 
  return (

    <div className="hom">
    <div className="heading">
    <h1 style={{color:"white",fontFamily: 'Times New Roman'}}>Templates</h1>
    <p style={{color:"white"}}><b>Select a Template to get started</b></p>
    </div>
  <div className="inl">
   <div className="one"><img src={img2}  alt="Img 1"/><div className='text'>
   <Button variant="contained"color="success" onClick={() => handleTemplateChange(1)}>Use Template</Button></div></div>
    <div className="one"><img src={img1}  alt="Img 2"/><div className='text'>
    
    <Button variant="contained"color="success"onClick={() => handleTemplateChange(2)}>Use Template</Button></div></div>
    <div className="one"><img src={img3}  alt="Img 3"/><div className='text'>
    
    <Button variant="contained"color="success"onClick={() => handleTemplateChange(3)}>Use Template</Button></div></div>
    <div className="one"><img src={img4}  alt="Img 4"/><div className='text'>
    
    <Button variant="contained" color="success"onClick={() => handleTemplateChange(4)}>Use Template</Button></div></div></div></div>
    
    
  );
}

export default Home;
