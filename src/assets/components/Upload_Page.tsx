import '../css/upload_page.scss';
import '../../index.css';
import Click_Upload from "./Click_Upload"
import  {UploadPageProps}  from "../types/UploadPageProps";


const Upload_Page = ({setImage}:UploadPageProps) => {
    
  return (
    <div className="bg-black container ">
        <Click_Upload setImage={setImage}/>
        <div className="cont-text">
          <p className="h1 robo">Alright, Let's get started...</p><br />
          <p className="robo small">
            Please upload the picture you want to apply the effects on.
            <br />
            Scroll Down to preview and download!
          </p><br />
        </div>
    </div>
  )
}

export default Upload_Page