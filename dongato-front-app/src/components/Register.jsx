import React from 'react'
import logo from '../assets/images/logo-dongato.svg';

export const Register = () => {

  return (
    <html>
      <body>

        <div className="left-content">

          {/*<div className="elipses"> 
            <div className="Ellipse1"></div>
            <div className="Ellipse2"></div>
          </div>*/}

          <div className="container">

            <div className="container-logo-dongato">
              <img className='logo-dongato' src={logo} alt="Logo de Don gato y Asociados" />
            </div>
            <h1>Don gato y Asociados</h1>
            <h2>La plataforma web de compra y venta de productos y servicios de confianza</h2>
            <button className="btn-conocenos">Conócenos</button>

          </div>
        </div>

        <div className="right-content">
          <div className='container'>

            <h2>Regístrate para empezar a disfrutar</h2>
  
            <input className='user-name' type="text" placeholder="Nombre de usuario" />
            <input className='user-fullname' type="text" placeholder="Nombre completo" />
            <input className='user-lastname' type="text" placeholder="Apeliidos" />
            <input className='user-phone' type="text" placeholder="Teléfono" />
            <input className='user-email' type="email" placeholder="Correo electrónico" />
            <input className='user-password' type="password" placeholder="Contraseña" />
            <input className='user-repasword' type="password" placeholder="Confirmación de la contraseña" />

            <button className='btn-registrarse'>Registrarse</button>

          </div>

        </div>
      </body>
    </html >
  )
}

export default Register;