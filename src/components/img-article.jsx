import React from 'react';

const ImgArticle = props => {
    return (
        <article className="ItemPost">
          <p className="title">{props.title}</p>
          <div className="start">
            <a className="post-estrellita-llena">*</a>
            <a className="post-estrellita-llena">*</a>
            <a className="post-estrellita-llena">*</a>
            <a className="post-estrellita-llena">*</a>
            <a className="post-estrellita-vacia">*</a>
          </div>
          
          <div className="container-video">
            <img 
            src={props.imageLink} 
            alt="Imagen" 
            width="500" height="345"
            />
          </div>
    
          <div className="btn-container">
            <a 
              className="postbtn"
              href={props.linkVideo} 
              target="blank">Ver más...
            </a>
          
          <div className="PostDescription" >
            <p><strong>Description:</strong> {props.description}</p>
          </div>
          
          <div className="Article-footer">
            {/* <p>Fecha: {obtenerFecha(props.date.toDate())}</p> */}
            <p>Author: {props.author}</p>
          </div>

          </div>
        </article>
      )
}

export default ImgArticle;