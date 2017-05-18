(function() {

    var config = {
      apiKey: "AIzaSyCcnCOyYTWVJoTICHU6JdsWoQGZ_NtPOZQ",
      authDomain: "cara-f117f.firebaseapp.com",
      databaseURL: "https://cara-f117f.firebaseio.com",
      projectId: "cara-f117f",
      storageBucket: "cara-f117f.appspot.com",
      messagingSenderId: "1085043025388"
    };

    firebase.initializeApp(config);
    var theTitle = document.getElementById('firebase-title')
          var para = document.querySelector('p')
          var dbRef = firebase.database().ref().child('title')
          var firebasePara = firebase.database().ref().child('para')

          dbRef.on('value', (title) =>{
            theTitle.innerText = title.val()
          })

          firebasePara.on('value', (body) =>{
            para.innerText = body.val()
          })

    //authentication
    // const auth = firebase.auth()
    // auth.signInWithEmailAndPassword(email,pass)
    // auth.createUserWithEmailAndPassword(email,pass)
    // auth.onAuthStateChanged(user => {
    //   //anytime that happened everytime user logout
    // })

    //login

    //target login elements
    const email = document.querySelector('#login-email')
    const password = document.querySelector('#login-password')
    const button = document.querySelector('button')
    const signupBttn = document.querySelector('#signupBttn')
    const logoutBttn = document.querySelector('#logoutBttn')

    //LOGIN event check
    button.addEventListener('click', (e) => {
      let emailInput = email.value
      let passwordInput = password.value

      //call the firebase auth method
      const auth = firebase.auth()
      const authPromise = auth.signInWithEmailAndPassword(emailInput,passwordInput)

      authPromise
      //when user is successfully sign in when promise is accepted
      .then((user) => console.log('user is found'))
      //when user is failed and promise shows error
      .catch((err) => console.log(err.message))
    })
    //SIGNUP event check
    signupBttn.addEventListener('click', (e) => {
      let emailInput = email.value
      let passwordInput = password.value

      //call the firebase auth method
      const auth = firebase.auth()
      const authPromise = auth.createUserWithEmailAndPassword(emailInput,passwordInput)

      authPromise
      //when user is successfully signed up when promise is accepted
      .then((user) => console.log('user is found'))
      //when user is failed and promise shows error
      .catch((err) => console.log(err.message))
    })

    logoutBttn.addEventListener('click', (e) => {
      firebase.auth().signOut()
    })

    //auth change state - hide the login and sign up button
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        alert('Thanks for Logging In')
        logoutBttn.classList.remove('hidden')
        button.classList.add('hidden')
        signupBttn.classList.add('hidden')
      } else {
        alert('Sessions Not Logged In')
        logoutBttn.classList.add('hidden')
        button.classList.remove('hidden')
        signupBttn.classList.remove('hidden')
      }
    })

}())
