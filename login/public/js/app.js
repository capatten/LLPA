(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAfZr1qIuEMeDEEriFeoKj-x863RIbJJgA",
    authDomain: "llpa-ae9e7.firebaseapp.com",
    databaseURL: "https://llpa-ae9e7.firebaseio.com",
    storageBucket: "llpa-ae9e7.appspot.com",
    messagingSenderId: "100503483723"
  };
  firebase.initializeApp(config);

  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e=> {
    // Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

    // Add login event
  fbLogin.addEventListener('click', e=> {

      var provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({
        'display': 'popup'
    });

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    }); 

  });

  // Add signup event
  btnSignUp.addEventListener('click', e=> {
    // Get email and password
    // TODO: Check for real email
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });

  // Logout Event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });


}());