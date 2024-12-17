import '../css/footer.scss';
import '../../index.css';


const Footer = () => {
    return (
        <footer className="site-footer robo">
            <div className="container-info">

                <div className="cont-part-1">
                    <h6>About</h6>
                    <p className="text-justify">This project is a web-based image processing application that allows users to upload an image, apply custom effects, and then download the modified image. The application provides an intuitive interface where users can easily interact with a simple upload mechanism, preview the modified image, and download the final result. <br /><br />The core functionality focuses on allowing users to experiment with various image processing techniques using a user-friendly interface.

                        The project leverages modern web technologies to create a seamless and interactive experience for the user. It features a well-designed user interface, responsive layout, and efficient image processing workflows. <br /><br />Whether you're a casual user wanting to edit a photo or a developer looking to understand how to integrate frontend and backend image manipulation in a React-based application, this project serves as a solid starting point.</p>
                </div>

                <div className="cont-part-2">
                    <h6>Categories</h6>
                    <ul className="footer-links">
                        <li><a href="https://react.dev/learn">React</a></li>
                        <li><a href="https://go.dev/learn/">Go</a></li>
                        <li><a href="https://docs.docker.com/get-started/">Docker</a></li>
                        <li><a href="https://github.com/fogleman/primitive">Primitive</a></li>
                        <li><a href="https://gin-gonic.com/docs/">Gin</a></li>
                    </ul>
                </div>


            </div>
            <hr />
            <div className="copyright">
                <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by  <a href="https://itish2003io-itish-srivastavas-projects.vercel.app/">  Itish Srivastava</a>.</p>
            </div>

        </footer>
    )
}

export default Footer