# TusClases.com

## ¿Qué es TusClases.com?

TusClases.com es una WebApp cuyo objetivo es conectar a profesores y alumnos a traves de la pagina para la realización de clases particulares. Se le brinda a los profesores la posibilidad de crear, modificar y eliminar clases particulares; mientras que los alumnos podran realizar busqueda de clases mediante filtros y poder contratar estas mismas.

## Casos de uso:

1. Registro:

Las personas que entren a la pagina tendran la opción de registrarse brindando solo algunos datos dependiendo que tipo de usuarios sean(nombre, apellido, email, telefono, contraseña, pregunta de seguridad, respuesta de la pregunta de seguridad, nivel academico y fecha de nacimiento en caso de que sea un usuario alumno; y en caso de ser un usuario profesor se le pedira nombre, apellido, email, telefono, contraseña, pregunta de seguridad, respuesta de la pregunta de seguridad, titulo y experiencia). Un usuario no podra registrarse si ya existe una cuenta con el mail ingresado.

2. Login:

En caso de que ya estemos registrados, podremos ingresar a nuestra cuenta indicando el mail con el que nos registramos y la contraseña. En caso de que el usuario olvide su contraseña, podra hacer click sobre la opcion "Olvidaste tu Contraseña? Recuperar" el cual lo redirigira a una pantalla donde se pedira la dirección de correo, la pregunta de seguridad, la respuesta de la pregunta de seguridad y una nueva contraseña.

### Usuario Profesor

1. Crear Curso:

En caso de que seamos un usuario profesor, podremos crear cursos. Para crearlos se nos pedira: el nombre del curso, el nombre de la materia, la hora de inicio, la hora de finalización, tipo de clase, frecuencia de las clases, día en el que será la clase y el costo de la clase. Tambien podremos modificar, ocultar, visibilizar o eliminar los cursos luego de que estos ya hayan sido creados.

2. Aceptar o Rechazar Alumno:

En caso de que seamos un usuario profesor, podremos aceptar las solicitudes o rechazarlas, de alumnos que quieran realizar un curso con nosotros.

3. Aceptar o Bloquear Comentarios:

En caso de que seamos un usuario profesor, podremos aceptar los comentarios que nos publiquen en la clase o rechazarlos. En caso de rechazarlos tendremos que adjuntar un mensaje por el cual se rechazo el mensaje.

### Usuario Alumno

1. Cursos:

En caso de que seamos un usuario alumno, podremos buscar una clase. Para buscar una clase podremos filtar mediante los siguiente parametros: qué queremos aprender, tipo de clase, frecuencia de la clase y clasificación. Posteriormente podremos contratar alguno de los cursos que aparezcan por pantalla. Para contratar una clase se pedirá un telefono de contacto, un mail, la hora de inicio, la hora de fin, y un mensaje que quiera dejar el alumno. El alumno tendrá que esperar una confirmación por parte del profesor para saber si acepta la clase o no. El alumno tambien podrá finalizar el curso en el momento que el desee.

2. Enviar Comentario:

Los usuarios de tipo alumno podrán publicar un comentario con respecto a los cursos en los cuales se inscribieron y fueron aceptados por el profesor.

3. Enviar Valoración: 

Los usuarios de tipo alumno podrán publicar su valoración con respecto a los cursos en los cuales se inscribieron y fueron aceptados por el profesor.


# Instalacion.

## Repositorios:

El Frontend y el Backend se encuentran en 2 diferentes repositorios de GitHub

### Frontend:

[Frontend] (https://github.com/Zequi2411/tpo-api-2022.git)

### Backend:

[Backend]

## Comandos

Se deberan ejecutar los siguientes comandos tanto para el Backend como el Frontend desde la carpeta raiz del proyecto

### 1) instalar todas las librerias necesarias.

```
> npm install
```

### 2) Levantar el servidor de manera loccal.

```
> npm start
```
