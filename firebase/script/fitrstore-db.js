const userDetial = document.querySelector(".userdetails");
const editsProfile = document.querySelector("#editsprofile");

function createusercollection(user) {
  firebase.firestore().collection("users").doc(user.uid).set({
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    phone: "",
    specialty: "",
    portfolioUrl: "",
    experience: "",
  });
}

async function getuserinfo(userID) {
  if (userID) {
    const userInfoSnap = await firebase
      .firestore()
      .collection("users")
      .doc(userID)
      .get();

    const userinfo = userInfoSnap.data();
    if (userinfo) {
      userDetial.innerHTML = `
        <h3>${userinfo.name}</h3>
        <h3>${userinfo.email}</h3>
        <h3>${userinfo.phone}</h3>
        `;
    }
  } else {
    userDetial.innerHTML = `
        <h3>please login</h3>
        `;
  }
}

async function getuserinfoRealtime(userID) {
  if (userID) {
    const userdocRef = await firebase
      .firestore()
      .collection("users")
      .doc(userID);
    userdocRef.onSnapshot((doc) => {
      if (doc.exists) {
        const userinfo = doc.data();
        if (userinfo) {
          userDetial.innerHTML = `
                 <h3>${userinfo.name}</h3>
                 <h3>${userinfo.email}</h3>
                 <h3>${userinfo.phone}</h3>
                 <h3>${userinfo.specialty}</h3> 
        <h3>${userinfo.portfolioUrl}</h3>
        <h3>${userinfo.experience}</h3>
                 

                 `
                 editsProfile["name"].value =  userinfo.name,
                 editsProfile["profileEmail"].value = userinfo.email
                 editsProfile["phone"].value = userinfo.phone
                  editsProfile["specialty"].value = userinfo.specialty
                  editsProfile["portfolioUrl"].value = userinfo.portfolioUrl
                  editsProfile["experience"].value = userinfo.experience



        }
      }
    });
  } else {
    userDetial.innerHTML = `
        <h3>please login</h3>
        `;
  }
}

function updateuser(e) {
  e.preventDefault();
  const userDocRef = firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid);

  userDocRef.update({
    name: editsProfile["name"].value,
    email: editsProfile["profileEmail"].value,
    phone: editsProfile["phone"].value,
    specialty: editsProfile["specialty"].value,
    portfolioUrl: editsProfile["portfolioUrl"].value,
    experience: editsProfile["experience"].value,
  });
}
