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
firebase.analytics();

let db = firebase.firestore();
const TURMAA = "turmaA";

db.collection(TURMAA).onSnapshot((snapshot) => {
  snapshot.forEach((element) => {
    console.log(element.data());
  });
});

/*
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

  */
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
