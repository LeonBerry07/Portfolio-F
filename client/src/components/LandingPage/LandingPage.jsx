import React from "react";
// import { Link } from "react-router-dom";
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


                
            
            <header className="top">
                <p>About</p>
                <p>Skills</p>
                <p>Contact</p>
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




            <section className="title">About Me</section>

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




            <section className="title">Skills</section>
            
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







            <section className="title">Projects</section>

            <div className="boxes">
                

            <div className="box">
                Portfolio   
            </div>

            <div className="box">
                Videogames   
            </div>

            <div className="box">
                Deal Up!
            </div>
            
            </div>
            

            {/* <button className='home'>
                <Link to="/home">Projects</Link>
            </button> */}









            <section className="title">Contact</section>

            <div className="contact">
            <p>
                E-Mail
                altairconnor12@gmail.com
            </p>

            <p> 
                LinkedIn
                https://www.linkedin.com/in/bruno-leonel-a40110260/
            </p>
            </div>








            <footer className="foot">
                <p>About</p>
                <p>Skills</p>
                <p>Contact</p>
                <p>&copy;Bruno Leonel Mendiberry 2023</p>
            </footer>




            </body>    
            </div>
        )
    }

}

export default LandingPage;