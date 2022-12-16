import urlWebServices from '../Controller/webServices.js';

export const signup= async function(signup)
{
    let url = urlWebServices.signup;
    const formData = new URLSearchParams();
    formData.append('email', signup.email);
    formData.append('password', signup.password);
    formData.append('nombre', signup.nombre);
    formData.append('apellido', signup.apellido);
    formData.append('telefono', signup.telefono);
    formData.append('pregunta', signup.pregunta);
    formData.append('respuesta', signup.respuesta);
    formData.append('nivelAcademico', signup.nivelAcademico);
    formData.append('nacimiento', signup.nacimiento);
    formData.append('perfil', signup.perfil);
    //console.log("dato",formData);
    console.log("url",url);
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });

        localStorage.setItem("email", signup.email);
        localStorage.setItem("nombre", signup.nombre);
        localStorage.setItem("apellido", signup.apellido);
        localStorage.setItem("telefono", signup.telefono);
        let rdo = response.status;
        let data = await response.json();
        localStorage.setItem("id", data.user.id);
        switch (rdo) {
          case 200: {
            localStorage.setItem("x", data.token);
            //guardo usuario logueado
            let user = data.user;
            localStorage.setItem("email", user.email);
            return { rdo: 0, mensaje: "Ok" }; //correcto
          }
          case 422: {
            //error general
            return { rdo: 1, mensaje: "El mail ingresado ya está en uso" };
          }
          default: {
            //otro error
            return { rdo: 1, mensaje: "Ha ocurrido un error" };
          }
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    export const signupprofesor= async function(signupprofesor)
{
    let url = urlWebServices.signupprofesor;
    const formData = new URLSearchParams();
    formData.append('email', signupprofesor.email);
    formData.append('password', signupprofesor.password);
    formData.append('nombre', signupprofesor.nombre);
    formData.append('apellido', signupprofesor.apellido);
    formData.append('telefono', signupprofesor.telefono);
    formData.append('pregunta', signupprofesor.pregunta);
    formData.append('respuesta', signupprofesor.respuesta);
    formData.append('titulo', signupprofesor.titulo);
    formData.append('experiencia', signupprofesor.experiencia);
    formData.append('perfil', signupprofesor.perfil);
    console.log("dato",formData);
    console.log("url",url);
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });

        localStorage.setItem("email", signupprofesor.email);
        localStorage.setItem("nombre", signupprofesor.nombre);
        localStorage.setItem("apellido", signupprofesor.apellido);
        localStorage.setItem("telefono", signupprofesor.telefono);
        let rdo = response.status;
        let data = await response.json();
        localStorage.setItem("id", data.user.id);
        switch (rdo) {
          case 200: {
            localStorage.setItem("x", data.token);
            //guardo usuario logueado
            let user = data.user;
            localStorage.setItem("email", user.email);
            return { rdo: 0, mensaje: "Ok" }; //correcto
          }
          case 422: {
            //error general
            return { rdo: 1, mensaje: "El mail ingresado ya está en uso" };
          }
          default: {
            //otro error
            return { rdo: 1, mensaje: "Ha ocurrido un error" };
          }
        }
      } catch (error) {
        console.log("error", error);
      }
    };

export const login= async function(login)
{
    //url webservices
    let url = urlWebServices.login;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.email);
    formData.append('password', login.password);
    //console.log("dato",formData);
    console.log("url",url);
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    //guardo token
                    localStorage.setItem("x",data.loginUser.token);
                    //guardo usuario logueado
                    let user = data.loginUser.user;
                    localStorage.setItem("nombre",user.name);
                    localStorage.setItem("email",user.email);
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 202:
                {
                    //error mail
                    return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    //error password
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const guardarImgUser = async function(message)
{
    //url webservices
    let url = urlWebServices.guardarImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', message.email);
    formData.append('nombreImagen',message.imagen);
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===201)
        {
            return true;
        }
        else
        {
           return false; 
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

export const uploadFileImg= async function(files,nombres)
{
     //url webservices
     let url = urlWebServices.uploadFileImg;
  console.log("url",url)
    console.log('files', files)
    console.log('nombres',nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], nombres[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}
export const getImagenesByUser = async function()
{
    //url webservices
    let url = urlWebServices.getImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===200)
        {
            let data = await response.json();
            console.log("imagenesUser",data);
            let listaImg = data.data.docs;
            return listaImg;
        }
        else
        {
            let vacio=[];
            console.log("No hay imagenes")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}