const urlApi = "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    signup:urlApi + 'users/registration',
    signupprofesor:urlApi + 'users/registrationprofesor',
    login:urlApi +"users/login",
    guardarImgUser: urlApi + "users/guardarImgUser",
    getImgUser: urlApi + "users/imgUserByMail",
    uploadFileImg: urlApi + "users/uploadImg",
}

export default urlWebServices;