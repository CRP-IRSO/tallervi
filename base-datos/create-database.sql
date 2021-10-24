/**
 template para crear tabla e insertar datos en la base de datos mysql
*/
CREATE DATABASE IF NOT EXISTS irsotaller6;

USE irsotaller6;

CREATE TABLE alumnos (
	id INT NOT NULL AUTO_INCREMENT,
	nombres VARCHAR(30),
	apellido VARCHAR(30),
    direccion VARCHAR(50),
    cod_postal VARCHAR(50),
    telefono INT,
	PRIMARY KEY(id)
);


INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('charles','robles','sarmiento 833', '1028', 1512345678);

INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('jose','peña','cerrito 110', '1001', 1548895874);

INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('marcelo','temperley','suipacha 777', '1001', 1548965674);

INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('julieta','alvarez','alem 820', '1001', 1548954774);

INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('rodrigo','sarmiento','paraguay 220', '1001', 1588965874);

INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('martin','belgrano','acoyte 2020', '1001', 1525665874);

INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('facundo','aquino','jujuy 1020', '1001', 1548967444);

INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('alejandra','perez','castelii 220', '1001', 1544595874);

INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('lucia','ramos','pueyrredon', '1001', 1544595874);1544595874

INSERT INTO alumnos (nombres, apellido, direccion, cod_postal, telefono)
VALUES ('sofia','delgado','lavalle 2020', '1001', 1548965874);
