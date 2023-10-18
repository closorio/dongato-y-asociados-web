import React from 'react'
import logo from '../../assets/images/logo-dongato.svg';
import { Link } from 'react-router-dom';

export const LoginForm = () => {

  return (
    <html>
      <body className="login">

        <div className="left-content">

          <div className="container">

            <div className="container-logo-dongato">
              <img className='logo-dongato' src={logo} alt="Logo de Don gato y Asociados" />
            </div>
            <h1>Don gato y Asociados</h1>
            <h2>Tu plataforma de compras en línea para productos tecnológicos y accesorios de tendencia, diseñada para ti.</h2>

          </div>
        </div>

        <div className="right-content">
          <div className='container'>

            <h2>¡Bienvenido de nuevo!</h2>
            <p>Iniciar sesión</p>

            <input className='user-name' type="text" placeholder="Nombre de usuario" />
            <input className='user-name' type="text" placeholder="Contraseña" />

            <button className='btn-ingresar' >Ingresar</button>

            <a className="olvide-contraseña" href='#'>Olvidé mi contraseña</a>
           
            <div className="foot">
              <p>¿No tienes una cuenta?</p>
              <Link to="/register" className="registrate-aqui">Regístrate aquí</Link>
            </div>

          </div>

        </div>
      </body>
    </html >
  )
}

export default LoginForm;