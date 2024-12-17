import '../../index.css';
import '../css/landing_text.scss';

const Landing_Text = () => {
  return (
    <>
        <div className="landing-text">
                <p className="h1 robo"><b>Welcome!</b></p><br />
                <p className="intro-content robo"><b>Image Primitive</b> is a image modification tool that leverages the <i className="primitive"><a href="https://github.com/fogleman/primitive">Primitive</a></i> library to apply effects on images.</p>
                <br/>
                <p className="intro-content robo">Ideal for designers, artists, or anyone seeking creative photo edits, Image Primitive lets you customize the level of abstraction and generate beautiful vectorized images with ease.</p>
                <br/>
                <p className="intro-content robo">Explore the world of geometric art with Image Primitive!</p>
            </div>
    </>
  )
}

export default Landing_Text