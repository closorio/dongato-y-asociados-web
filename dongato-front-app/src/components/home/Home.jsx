import React from 'react'
import logo from '../assets/images/logo-dongato.svg';
import cat from '../assets/images/categories.png';

export const Home = () => {

    return (
        <body>

            <header>

                <div className="left-content">

                    <div className="menu"> Menú </div>
                    <a href='#' className="container-logo-dongato">
                        <img className='logo-dongato' src={logo} alt="Logo de Don gato y Asociados" />
                    </a>
                    <input className='search' type="text" placeholder="Buscar por..." />

                </div>

                <div className="right-content">

                    <nav>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Acerca de</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Precios</a></li>
                        </ul>
                    </nav>

                    <button className="btn-vender">¡Vender!</button>
                    <div className="user-img">
                        <img src='' alt="Imagen de usuario" />
                    </div>
                    <button className="user-options">x</button>
                </div>

            </header>

            <navbar>

                <button className="btn-premium-now">¡Prueba nuestro plan premium ahora!</button>

                <nav>
                    <ul>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Más +</a></li>
                    </ul>
                </nav>

            </navbar>

            <main>

                <section className="destacado">
                    <div className="cat-container">
                        <img className='categories' src={cat} alt="Categorias" />
                    </div>

                </section>

            </main>

            <footer>
                <div className="footer-container"> </div>

                <foot>
                    <p> Copyright &copy; 2023 dongatoyasociados.com. Todos los derechos reservados.</p>
                </foot>
            </footer>

        </body>
    );
}

export default Home;