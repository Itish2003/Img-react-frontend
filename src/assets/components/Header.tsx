import '../css/header.scss';
import '../../index.css'


export const Header = () => {
  return (
    <>
        <header className="header bg-black">
            <div className="site-name"><a href="https://github.com/Itish2003/Img-react-frontend">Image Primitive</a></div>
            <div className="nav-options">
                <div><a href="https://itish2003io-itish-srivastavas-projects.vercel.app/">About Me</a></div>
                <div><a href="https://docs.google.com/document/d/1ha2IX5TwpqWdZVkaE-BOedVSaqxeFNVmjKHnqPvqPo8/edit?tab=t.0">Resume</a></div>
                <div><a href="https://github.com/Itish2003">Github</a></div>
            </div> 
        </header>
    </>
  )
}
