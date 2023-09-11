import React from "react";
import { Link } from "react-router-dom";
import'./LandingPage.css'

const url12 = 'me.jpg';
// const url13 = 'distopya.jpg';
{/* <img className="bru" src={url13} alt="Food's Lyon"/> */}
{/* <img className="bru" src={url12} alt="Food's Lyon"/> */}

class LandingPage extends React.Component{

    render() {
        return(
            <div className="landingpage">
                
            <body className="body">
            
            <header className="header">
                <div className="nav">
                <p>About    Skills    Contact</p>
                </div>
            </header>

            <div className="tim">
                    
            <div className="info">
            <p className="info1">Bruno Leonel Mendiberry</p>
            <p>Full Stack Developer</p>
            </div>

            <div className="image"> 
            <img className="bru" src={url12} alt="Food's Lyon"/>
            </div>

            </div>

            <section className="info1">About Me</section>

            {/* <p>
                Background Producción Musical
            </p> */}


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

            <span>
                Labor en la actualidad
                Desarrollo proyectos que me permitan crecer como programador, tanto desde el lado técnico como creativo. Dichos proyectos están relacionados a mis gustos personales e ideas que creo hacen falta implementar en la sociedad.
            </span>
            </div>

            <section className="info1">Skills</section>
            
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

            <section className="info1">Projects</section>

            <div className="boxes">
                

            <div className="box">
                Portfolio   
            </div>

            <div className="box2">
                Videogames   
            </div>

            <div className="box3">
                Deal Up!
            </div>
            
            </div>
            

            <button className='home'>
                <Link to="/home">Projects</Link>
            </button>

            <section className="info1">Contact</section>

            <p>
                Correo electrónico
                altairconnor12@gmail.com
            </p>

            <p> 
                LinkedIn
                https://www.linkedin.com/in/bruno-leonel-a40110260/
            </p>

            <footer className="foot">
                <p>About    Skills    Contact</p>
                <p>&copy;Bruno Leonel Mendiberry 2023</p>
            </footer>
            </body>    
            </div>
        )
    }

}

export default LandingPage;