import React from 'react'
import logo from '../../assets/images/logo-dongato.svg';

export const LoginForm = () => {

  return (
    <html>
      <body className="login">

        <div className="left-content">

          {/*<div className="Group2"> 
            <div className="Ellipse1"></div>
            <div className="Ellipse2"></div>
          </div>*/}

          <div className="container">

            <div className="container-logo-dongato">
              <img className='logo-dongato' src={logo} alt="Logo de Don gato y Asociados" />
            </div>
            <h1>Don gato y Asociados</h1>
            <h2>La plataforma web de venta de productos de confianza</h2>
            <button className="btn-conocenos">Conócenos</button>

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
              <p>¿Quieres ser vendedor?</p>
              <a className="registrate-aqui" href='#'>Regístrate aquí</a>
            </div>

          </div>

        </div>
      </body>
    </html >
  )
}

export default LoginForm;