CREATE DATABASE trabajoFinal;

USE trabajoFinal;

CREATE TABLE producto(
	id INT AUTO_INCREMENT NOT null, 
	nombre VARCHAR(50) NOT null,
	cantidad INT NOT NULL,
	precio INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE usuarios(
	id INT AUTO_INCREMENT NOT NULL,
	nombre VARCHAR(100) NOT NULL,
	apellido VARCHAR(100) NOT NULL,
	cedula VARCHAR(12) NOT NULL,
	direccion VARCHAR(100) NOT NULL,
	correo VARCHAR(100) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE usuarios_producto(
	id INT AUTO_INCREMENT NOT NULL,
	id_usuario INT NOT NULL,
	id_producto INT NOT NULL,
	fecha_compra DATE NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (id_usuario) REFERENCES producto (id),
	FOREIGN KEY (id_producto) REFERENCES usuarios (id)
);

#-----Datos prueba------

INSERT INTO usuarios (id, apellido, cedula, correo, direccion, nombre) VALUES
(5,'fsadfa', 'fasdfas', '12344', 'fsadfsa','fasdfsadf');

SELECT * from usuarios