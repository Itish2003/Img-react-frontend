import '../../index.css';
import '../css/landing_page.scss';
import Landing_Text from "./Landing_Text";
import Landing_Image from "./Landing_Image";



const Landing_Page = () => {
  return (
    <>  
      <div className="landing-container">
      <Landing_Text/>
      <Landing_Image/>
      </div>
        
    </>
  )
}

export default Landing_Page