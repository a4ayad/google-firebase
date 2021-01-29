const signInWithGoogleButton = document.getElementById('signInWithGoogle');

const auth = firebase.auth();

const signInWithGoogle = () => {

    // Create instance of googleProvider objet
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleProvider)
    .then(() => {
        // window.location.assign('./profile');
            /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.error(error);

    })

}

signInWithGoogleButton.addEventListener('click', signInWithGoogle);

  // Our web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDaQ1_fMKNBRJIGBXOMAWCL_f2gaVLbQV4",
    authDomain: "my-job-tracker.firebaseapp.com",
    projectId: "my-job-tracker",
    storageBucket: "my-job-tracker.appspot.com",
    messagingSenderId: "1072074186001",
    appId: "1:1072074186001:web:33462079bc0dbb07afc0b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);