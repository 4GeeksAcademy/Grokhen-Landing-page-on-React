import React from "react";
import bgImage from "../../img/bgImage.jpg"

const Header = () => {
    return (
        <div className="card text-bg-dark">
            <img src={bgImage} className="card-img" alt="An internet graphic"></img>
            <div className="card-img-overlay">
                <h1 className="card-title display-1">Bienvenido</h1>
                <p className="card-text">La programación web es una disciplina apasionante que nos sumerge en el mundo digital. En esta página, exploraremos los fundamentos, herramientas y tecnologías que dan vida a la web. Desde el HTML que estructura nuestras páginas hasta el CSS que les da estilo, y el JavaScript que las hace interactivas, descubriremos cómo se construyen los sitios web modernos. Además, exploraremos React, una biblioteca de JavaScript que permite crear interfaces de usuario dinámicas, y Python, un lenguaje versátil utilizado en áreas como la ciencia de datos y el desarrollo web. Si eres un entusiasta de la tecnología o estás comenzando tu viaje en el desarrollo web, ¡has llegado al lugar adecuado!</p>
                <a href="#" className="btn btn-primary">¿Quieres saber más?</a>
            </div>
        </div>
    )
}

export default Header;