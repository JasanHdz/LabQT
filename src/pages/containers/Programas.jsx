import React from 'react';
import Header from '../../components/Header.jsx';
import Layout from '../../components/Layout.jsx';
import Chat from '../../containers/Chat.jsx';
import Footer from '../../components/About.jsx';
import Publication from '../../containers/Publications.jsx';
class Programas extends React.Component {
  constructor() {
    super()
    this.header = [
      {
        title: 'Inicio',
        link: '/'
      },
      {
        title: 'Servicio Social',
        link: '/servicio-social'
      },
      {
        title: 'Prácticas Profesionales',
        link: '/practicas'
      },
      {
        title: 'Ciencia',
        link: '/ciencia'
      },
      {
        title: 'Desarrollo de Proyectos',
        link: '/proyectos'
      },
    ]
  }
  render() {
    return (
      <Layout>
        <Header
            links={this.header}
        />
        <div className="Document_Wrapper">
        <h1 className="Title">Publicaciones</h1>
        <p className="Content">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <h1 className="Title">Ciencia</h1>
        <p className="Content">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        </div>
        <Footer />
        <Chat />
      </Layout>
    );
  }
};

export default Programas;