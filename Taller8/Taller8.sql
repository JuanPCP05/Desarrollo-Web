CREATE DATABASE taller8;

CREATE TABLE ciudad (
	id INT AUTO_INCREMENT,
	nombre VARCHAR(100),
	descripcion VARCHAR(256),
	PRIMARY KEY(id)
);

CREATE TABLE tipodocumento(
	id INT AUTO_INCREMENT,
	nombre VARCHAR(100),
	descripcion VARCHAR(256),
	PRIMARY KEY(id)
);

CREATE TABLE persona(
	id INT AUTO_INCREMENT,
	nombre VARCHAR(100),
	apellido VARCHAR(100),
	idtipodocumento INT,
	documento INT,
	idciudad INT,
	fechaNacimiento DATE,
	email VARCHAR(100),
	telefono VARCHAR(10),
	usuario VARCHAR(20),
	contraseña VARCHAR(256),
	PRIMARY KEY(id),
	FOREIGN KEY (idtipodocumento) REFERENCES tipodocumento (id),
	FOREIGN KEY (idciudad) REFERENCES ciudad (id)
);

---inserciones 


INSERT INTO tipodocumento (nombre) VALUES
("CC"),
("TI"),
("CE");


INSERT INTO ciudad (nombre) VALUES 
("Bucaramanga"),
("Medellin"),
("Bogota"),
("Cartagena"),
("Manizales"),
("Otra");

SELECT * FROM ciudad;