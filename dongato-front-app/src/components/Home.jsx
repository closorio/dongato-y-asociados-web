import React from 'react';

function App() {
  // Datos de ejemplo para categorías y productos
  const categorias = ['Electrónicos', 'Ropa', 'Hogar', 'Juguetes'];
  const productos = [
    { id: 1, nombre: 'Smartphone', categoria: 'Electrónicos' },
    { id: 2, nombre: 'Camiseta', categoria: 'Ropa' },
    { id: 3, nombre: 'Lámpara', categoria: 'Hogar' },
    { id: 4, nombre: 'Muñeco', categoria: 'Juguetes' },
    // Agrega más productos aquí
  ];

  return (
    <div>
      <header>
        <h1>Don Gato y Asociados</h1>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Categorías</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Mi Cuenta</a></li>
            <li><a href="#">Carrito</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Categorías</h2>
          <ul>
            {categorias.map((categoria, index) => (
              <li key={index}>{categoria}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Productos Destacados</h2>
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>
                <p>{producto.nombre}</p>
                <p>Categoría: {producto.categoria}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;