import '../../index.css';
import '../css/landing_image.scss';
import landingImage from '../pictures/landing_example.png';

const Landing_Image = () => {
  return (
    <>
    <img className="landing-image" src={landingImage} alt="Landing Image"/>
    </>
  )
}

export default Landing_Image