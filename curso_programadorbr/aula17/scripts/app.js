var firebaseConfig = {
  apiKey: "AIzaSyCRkxV-T2c71VI90hnol7EzLauY34Haugo",
  authDomain: "colegio-e7d19.firebaseapp.com",
  projectId: "colegio-e7d19",
  storageBucket: "colegio-e7d19.appspot.com",
  messagingSenderId: "475086804562",
  appId: "1:475086804562:web:e6799a691615b407aef18b",
  measurementId: "G-68TYZDKYW6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

let db = firebase.firestore();
const TURMAA = "turmaA";

let email = "gilcemargz@email.com";
let password = "123abc";

function criarUsuario(params) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });
}

function login() {
  
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(userCredential);
      // ...
    })
    .then((log) => {
      console.log("Usuário logado" + firebase.auth().currentUser);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });
}

//login();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Sou eu" + user);
  } else {
    console.log("Nada logad");
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Deslogado");
    });
}

//setTimeout(logout, 5000);

//setTimeout(login, 9000);

/*
db.collection(TURMAA).onSnapshot((snapshot) => {
  snapshot.forEach((element) => {
    console.log(element.data());
  });
});


db.collection("turmaA")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });

let docRef = db.collection("turmaA").doc("zLb0cbyyFKfYDnfseuv9");

docRef.get().then((snapshot) => {
  console.log(snapshot.data());
});

db.collection("turmaA")
  .where("nome", "==", "Gilcemar")
  .get()
  .then((doc) => {
    console.log("Aluno filtrado");
    doc.forEach((element) => {
      console.log(element.data().nome);
    });
  });

  
function notaRandomica() {
  return Math.round(Math.random() * 100) * 0.1;
}
/*
db.collection(TURMAA)
  .add({
    nome: "Gilcemar",
    sobrenome: "Guizzo Zanette",
    notas: { notas1: notaRandomica(), nota2: notaRandomica() },
  })
  .then((doc) => {
    console.log("Doucmento inserido.");
  })
  .catch((err) => {
    console.log(`Ocorreu um erro ${err}`);
  });

db.collection(TURMAA)
  .doc("Aluno1")
  .set({
    nome: "Teste",
    sobrenome: "Guizzo Zanette",
    notas: { notas1: notaRandomica(), nota2: notaRandomica() },
  })
  .then((doc) => {
    console.log("Doucmento inserido.");
  })
  .catch((err) => {
    console.log(`Ocorreu um erro ${err}`);
  });

db.collection(TURMAA)
  .doc("Aluno2")
  .set(
    {
      sobrenome: " Zanette",
    },
    { merge: true }
  )
  .then((doc) => {
    console.log("Doucmento inserido.");
  })
  .catch((err) => {
    console.log(`Ocorreu um erro ${err}`);
  });

db.collection(TURMAA)
  .doc("Aluno3")
  .update({
    nome: "Charles Xavier",
    cidades: ["Criciuma", "Içara"],
  })
  .then((doc) => {
    console.log("Doucmento inserido.");
  })
  .catch((err) => {
    console.log(`Ocorreu um erro ${err}`);
  });

  db.collection(TURMAA)
  .doc("Aluno3")
  .update({
    cidades: firebase.firestore.FieldValue.arrayUnion("Jacarépaguá", "Rio de janeiro")
  })
  .then((doc) => {
    console.log("Doucmento inserido.");
  })
  .catch((err) => {
    console.log(`Ocorreu um erro ${err}`);
  });



*/
