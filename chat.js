// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyDAcwFHCmtZKXChms244_LtMBvSMtfgXEA",
    authDomain: "vamosconversar100.firebaseapp.com",
    projectId: "vamosconversar100",
    storageBucket: "vamosconversar100.appspot.com",
    messagingSenderId: "895040306431",
    appId: "1:895040306431:web:eedde55cbe2de512ad20ca"
  };

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem("user_name", user_name)
   window.location = "chat_room.html"
}



