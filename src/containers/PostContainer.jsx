import React from 'react';
import { connect } from 'react-redux';
import '../components/styles/post.css'; 

const deletePost = (id) => {
  return () => {
    console.log(id)
  }
}

class PostContainer extends React.Component {
  
  validationPost(post, index) {
    console.log(deletePost)
    if (post.get('file') !== null) {
      // Si existe algún archivo
    if (post.get('title') && post.get('file').includes('.jpg') || post.get('file').includes('.png')) {
          // Renderea Solo imagenes
            return (
              <div key={index} className="Container__Item">
                <h1 className="Item__Title">{post.get('title')}</h1>
                <p className="Item__Content">{post.get('description')}</p>
                <a className="Item__Link" target="_blank" href={post.get('file')}>Descargar Archivo</a>
                <img className="Item__Img" src={post.get('file')} alt="imagen" />
                <div className="Item__Details">
                  <p>{post.get('author')}</p>
                  <p>{`${post.get('date')} ${post.get('hour')}`}</p>
                </div>
              </div>
            );
    } else {
        // Renderear Cualquier Tipo de Archivo que no sea una imagen.
        return (
          <div key={index} className="Container__Item">
            <h1 className="Item__Title">{post.get('title')}</h1>
            <p className="Item__Content">{post.get('description')}</p>
            <a className="Item__Link" target="_blank" href={post.get('file')}>Descargar Archivo</a>
            <div className="Item__Details">
              <p>{post.get('author')}</p>
              <p>{`${post.get('date')} ${post.get('hour')}`}</p>
            </div>
          </div>
        );
        }  
  } else if (!post.get('title') && !post.get('file')) {
      // Solo Descripción 
        return (
          <div key={index} className="Container__Item">
          <p className="Item__Content">{post.get('description')}</p>
          <div className="Item__Details">
            <p>{post.get('author')}</p>
            <p>{`${post.get('date')} ${post.get('hour')}`}</p>
          </div>
        </div>
        );
  }
    else if (post.get('file') === null) {
      return (
        <div key={index} className="Container__Item">
          {/* <button onClick={ deletePost( post.get('id') ) }>Eliminar</button> */}
          <h1 className="Item__Title">{post.get('title')}</h1>
          <p className="Item__Content">{post.get('description')}</p>
          <div className="Item__Details">
            <p>{post.get('author')}</p>
            <p>{`${post.get('date')} ${post.get('hour')}`}</p>
          </div>
        </div>
      );
    }
  }
  render() {
    console.log(this.deletePost)
    return this.props.posts.map(this.validationPost(post, index))
  }
};

export default connect()(PostContainer);