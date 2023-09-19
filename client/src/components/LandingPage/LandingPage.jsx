import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link } from "react-scroll";
import'./LandingPage.css'

const url12 = 'me.jpg';
// const url13 = 'distopya.jpg';
const gmail = 'gmail.png';
const copy = 'portap.png';
const lin = '174857.png';
const dealup = 'https://start-bussines.vercel.app/';
{/* <img className="bru" src={url13} alt="Food's Lyon"/> */}
{/* <img className="bru" src={url12} alt="Food's Lyon"/> */}

class LandingPage extends React.Component{

    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
    }

    copiarEmailAlPortapapeles = () => {
        const emailText = this.emailRef.current.innerText;

        // Crear un campo de texto oculto
        const textArea = document.createElement('textarea');
        textArea.value = emailText;

        // Agregar el campo de texto oculto al documento
        document.body.appendChild(textArea);

        // Seleccionar el texto en el campo de texto
        textArea.select();

        // Intentar copiar el texto al portapapeles
        try {
            document.execCommand('copy');
            alert('¡Dirección de correo copiada al portapapeles!');
        } catch (err) {
            console.error('Error al copiar al portapapeles: ', err);
        }

        // Eliminar el campo de texto oculto
        document.body.removeChild(textArea);
    };

    render() {
        return(
            <div className="landingpage">
            <body className="body">


                
            
            <header className="top">

                <p>
                <Link to="about" smooth={true} duration={500}>About</Link>
                </p>

                <p>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </p>

                <p>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </p>

                <p>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </p>

            </header>




            <div className="tim">
                    
            <div className="info">
            <p>Bruno Leonel Mendiberry</p>
            <p>Full Stack Developer</p>
            </div>

            <div className="image"> 
            <img className="bru" src={url12} alt="Food's Lyon"/>
            </div>

            </div>




            <section id="about" className="title">About Me</section>

            <div className="about">

            <p>
                Hi, i am Bruno Leonel Mendiberry 👋
            </p>

            <p className="text">
                I work as a Fullstack Developer oriented to Back-End, and with knowledge of photo editing.
            </p>

            <p>    
                I am a lifelong lover of technology and computing, both from the hardware and software side.
            </p>

            <p>
                Currently I develop projects that allow me to grow as a programmer, both from the technical and creative side. These projects are related to my personal tastes and ideas that I think need to be implemented in society.
            </p>
            </div>

            <div className="about">

            <p>
                Hola, soy Bruno Leonel Mendiberry 👋
            </p>

            <p className="text">
                Me desempeño como Desarrollador Fullstack orientado al Back-End, y con conocimientos de edición de fotografía.
            </p>

            <p>    
                Soy un amante de la tecnología e informática desde toda la vida, tanto desde el apartado del hardware como el apartado del software.
            </p>

            <p>
                Actualemente desarrollo proyectos que me permitan crecer como programador, tanto desde el lado técnico como creativo. Dichos proyectos están relacionados a mis gustos personales e ideas que creo hacen falta implementar en la sociedad.
            </p>
            </div>




            <section id="skills" className="title">Skills</section>
            
            <div className="skills">

            <div className="skills1">            
            <p>
            Javascript
            </p>

            <p>
            React.js
            </p>

            <p>
            Node.js
            </p>

            <p>
            Express.js
            </p>
            </div>

            <div className="skills2">
            <p>
            PostgreSQL
            </p>

            <p>
            Sequelize
            </p>

            <p>
            GIT
            </p>
            
            <p>
            HTML
            </p>
            
            <p>
            CSS
            </p>
            </div>

            {/* Adobe AfterEffects, Photoshop */}
            </div>







            <section id="projects" className="title">Projects</section>

            <div className="boxes">
                

            <div className="box">
                <button className='box'>
                <RouterLink to='' target="_blank">Lyon Berry (En construcción)</RouterLink>
                </button>
            </div>

            <div className="box">
                <button className='box'>
                <RouterLink to='' target="_blank">Videogames (En construcción)</RouterLink>
                </button>
            </div>

            <div className="box">
                <button className='box'>
                <RouterLink to='https://start-bussines.vercel.app/' target="_blank">Deal Up!</RouterLink>
                </button>
            </div>
            
            </div>
            

            









            <section id="contact" className="title">Contact</section>

            <div className="contact">
            <img className="lin" src={gmail} alt="Food's Lyon"/>

            <p ref={this.emailRef}>
                altairconnor12@gmail.com
            </p>

            <button className="email" onClick={this.copiarEmailAlPortapapeles}>
                {/* <img className="lin" src={copy} alt="Food's Lyon"/> */}
                Copy E-mail
            </button>

            </div>

            <div className="contact">
            <RouterLink to='https://www.linkedin.com/in/bruno-leonel-a40110260/'>
                <img className="lin" src={lin} alt="Food's Lyon"/>
            </RouterLink>
            
            </div>








            <footer className="foot">
                <p>
                <Link to="about" smooth={true} duration={500}>About</Link>
                </p>

                <p>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </p>

                <p>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </p>

                <p>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </p>
                <p>&copy;Bruno Leonel Mendiberry 2023</p>
            </footer>




            </body>    
            </div>
        )
    }

}

export default LandingPage;