import React from "react";
import htmlImage from "../../img/Html.jpg";
import jsImage from "../../img/Js.jpg";
import reactImage from "../../img/react.jpg";
import pythonImage from "../../img/python.jpg";

const images = [{ language: "Html", logo: htmlImage, resume: "Es el código que se utiliza para estructurar y desplegar una página web y sus contenidos." }, { language: "JavaScript", logo: jsImage, resume:"Es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás." }, { language: "React", logo: reactImage, resume: "Es una biblioteca de JavaScript creada por Facebook que se utiliza para desarrollar aplicaciones web con interacciones dinámicas." }, { language: "Python", logo: pythonImage, resume: "Es un lenguaje de programación de propósito general que se utiliza para una variedad de aplicaciones, desde ciencias de datos hasta desarrollo de software y automatización." }];

const Card = () => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {images.map((element, index) => (
                <div className="col text-center">
                    <div key={index} className="card h-100" style={{ width: '18rem' }}>
                        <img src={element.logo} className="card-img-top" alt={element.language + " logo"} />
                        <div className="card-body">
                            <h5 className="card-title">{element.language}</h5>
                            <p className="card-text">{element.resume}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Me interesa</a>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
};


export default Card;
