

const signup = async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // console.log( email, password);

  try {
    const results = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await results.user.updateProfile({
      displayName: "User",
    });
    createusercollection(results.user);
    await results.user.sendEmailVerification();
    console.log(results);
    alert(`Wellcom ${results.user.email}`);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
  email.value = "";
  password.value = "";
};

const Login = async (e) => {
  e.preventDefault();
  const email = document.getElementById("Login_email").value;
  const password = document.getElementById("Login_password").value;
  // console.log( email, password);

  try {
    const results = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(results);
    alert(`successfully login ${results.user.email} suc`);
  } catch (error) {
    console.log(error);
    alert("valid_password");
  }
  email.value = "";
  email.password = "";
};

const logout = () => {
  firebase.auth().signOut();
};

const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    /// new used
    //getuserinfo(user.uid)
    getuserinfoRealtime(user.uid);
    console.log(user);
  } else {
    console.log("Signout user successfully");
    alert("Signout user successfully");
    // getuserinfo(null)
    getuserinfoRealtime(null);
  }
});

//   code clean up
// unsubscribe

async function google() {
  console.log("hello");
  try {
    var provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}






// clg
// use
// firebase.firestore().collection("test").add({
//   firstName: "shoaib",
//   LastName: "soomro",
//   age : 20,
//   sallary : 20000
// })
// update
// const testRef =
//     await firebase.firestore().collection("test").doc("H9ZXAGEuZSner8V7ctt3")
//const testref = await testref.update({sallary:50000})

//get methods
// const shoaib = await firebase.firestore()
//     .collection("test")
// .doc("IX5eGpD6AZI2i0iRBhqu")
// .get()
//shoaib.data()

//////////////////////////

//get methods
// const shoaib = await firebase.firestore()
// .collection("test")
// .where("LastName", "==" ,  "noman")
// .get()
// shoaib.docs
//shoaib.docs[0].data()

//////////// det

// firebase.firestore().collection("test").doc("IX5eGpD6AZI2i0iRBhqu")
// .delete()

//npm i --g firebase-tools
//firbase login
//firebase projects:list
//firebase deploy --only firebase:roules
