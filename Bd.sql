CREATE TABLE Usuarios(
    id_user SERIAL PRIMARY KEY,
	activo BOOLEAN,
	contraseña VARCHAR(255),
	Nombre VARCHAR(255),
	Apellido VARCHAR(255),
	telefono VARCHAR(255),
	correo VARCHAR(255)
);
CREATE TABLE Categorias(
    id_categoria SERIAL PRIMARY KEY,
	nombre_categoria VARCHAR(255)	
);

CREATE TABLE Administradores(
    id_admin SERIAL PRIMARY KEY,
	id_user_fk int,
	estado BOOLEAN,
	foreign key(id_user_fk)
	REFERENCES Usuarios(id_user)	
);
CREATE TABLE Billetera(
    id_billetera SERIAL PRIMARY KEY,
	id_user_fk int,
	capital int,
	foreign key(id_user_fk)
	REFERENCES Usuarios(id_user)	
);
CREATE TABLE Productos(
    id_productos SERIAL PRIMARY KEY,
	id_user_fk int,
	nombre_producto VARCHAR(255),
	descripcion VARCHAR(255),
	cantidad int,
	precio int,
	descuento int,
	activo BOOLEAN,
	id_categoria_fk int,
	estado VARCHAR(255),
	imagen VARCHAR(255),
	foreign key(id_user_fk)
	REFERENCES Usuarios(id_user),
	foreign key(id_categoria_fk)
	REFERENCES Categorias(id_categoria)
);
CREATE TABLE CarritosCompras(
    id_carrito SERIAL PRIMARY KEY,
	id_user_fk int,
	estado VARCHAR(255),
	foreign key(id_user_fk)
	REFERENCES Usuarios(id_user)	
);
CREATE TABLE Compras(
    id_compras SERIAL PRIMARY KEY,
	id_carrito_fk int,
	estado VARCHAR(255),
	metodo_pago VARCHAR(255),
	fecha_compra TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	foreign key(id_carrito_fk)
	REFERENCES CarritosCompras(id_carrito)	
);
CREATE TABLE ListaCompras(
    id_item SERIAL PRIMARY KEY,
	id_producto_fk int,
	id_carrito_fk int,
	cantidad_producto int,
	foreign key(id_producto_fk)
	REFERENCES Productos(id_productos),
	foreign key(id_carrito_fk)
	REFERENCES CarritosCompras(id_carrito)	
);

CREATE TABLE SuscripcionVentas(
    id_suscripcion SERIAL PRIMARY KEY,
	id_user_fk int,
	estado BOOLEAN,
	fecha_inicio TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	fecha_final TIMESTAMP WITHOUT TIME ZONE,
	foreign key(id_user_fk)
	REFERENCES Usuarios(id_user)	
);
/*esto fue de prueba*/
INSERT INTO public.categorias(nombre_categoria)
	VALUES ('pantalla');