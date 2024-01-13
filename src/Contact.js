
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './App.css';

function Contact() {

    return (
      <div className="aboutclass">
        <div style={{marginLeft:20}} className="resume-builder-wrapper">
        <h1>Resume Builder</h1>
        <hr className="resume-builder-line" />
      </div>
     
        <p style={{marginLeft:20}}>This is a resume building website created with love by Bhavuk Goyal in January 2024.</p>
        <br />
        <br />
        <br />
        <h4 style={{marginLeft:20}}>Share with your friends...</h4>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="large"  style={{marginRight:20,marginLeft:20}} target="_blank"/></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon fontSize="large"style={{marginRight:20}}target="_blank"/></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><WhatsAppIcon fontSize="large"style={{marginRight:20}}target="_blank"/></a>
      </div>
    );
  }
  
  export default Contact;