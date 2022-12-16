const data = [
    {
        id: "1",
        title: "Inglés americano",
        materia: "Inglés",
        profesor: "Julieta",
        ubicacion: "Buenos Aires",
        tipo: "Grupal",
        frecuencia: "Semanal",
        price: "$20000",
        image: "/images/idiomas.jpg",
        description: "Es mi idioma preferido , después del castellano. Con estás clases intento Lograr independencia económica y de cargas horarias. Cambiar la profesión",
        rating: 5,

    },
    {
        id: "2",
        title: "Analista de sistema de computación",
        materia: "Informática",
        profesor:"Jorge",
        ubicacion: "Buenos Aires",
        tipo: "Grupal",
        frecuencia: "Mensual",
        price: "$5000",
        image: "/images/tecnologia.jpg",
        description: "Profesor universitario de computación, todos los niveles, desde introductorio hasta avanzado, programación de aplicaciones, programación de páginas Web. Tesis, tesinas, trabajos de grado en computación, para todos los niveles. No dejes que te reprueben. Tus preguntas no molestan. Te dedicamos el tiempo que necesites.",
        rating: 5,
    },
    {
        id: "3",
        title: "Clases de violín, todos los niveles",
        materia: "Música",
        profesor:"Claudio",
        ubicacion: "Córdoba",
        tipo: "Individual",
        frecuencia: "Semanal",
        price: "$7000",
        image: "/images/artes.jpg",
        description: "Mas de 20 años de experiencia, capacitado con maestros nacionales e internacionales, del teatro Colon, filarmónica nacional, entre otros. Amplia experiencia en música académica, Tango, Folclore y músico cesionista en bandas de Rock, Country, entre otros estilos.",
        rating: 4,
    },
    {
        id: "4",
        title: "Clases online de guitarra",
        materia: "Música",
        profesor:"Saragueta",
        ubicacion: "Online",
        tipo: "Individual",
        frecuencia: "Única",
        price: "$2000",
        image: "/images/artes.jpg",
        description: "Estudiante de profesorado de Música da clases de Canto, Guitarra y Lenguaje Musical. Las clases son totalmente personalizadas e individuales, por medio de Zoom, Skype o Videollamada de Wsp. Se aborda dependiendo de que estes buscando(Técnica, Interpretación, Composición, Grabación, etc) las canciones a trabajar las elegís y seleccionas vos, dependiendo tus gustos musicales! ️",
        rating: 3,
    }
];
export default data;

/* export const getAllCursos = async function () {
    //url webservices
    let url = "http://localhost:4000/cursos"
    try {
      let response = await fetch(url, {
        method: "GET", // or 'PUT'
        mode: "cors",
        headers: {
          //Accept: "application/x-www-form-urlencoded",
          Origin: "http://localhost:3000",
        },
      });
      let data = response.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }; */