'use strict';

//grab a form
const form = document.querySelector('.input-group');

//grab an input
const inputEmail = form.querySelector('#inputEmail');


//config your firebase push
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyDO9ofhUfrZe4tdIgS0tkreo-TCsUW-1LY",
  authDomain: "renmohomes.firebaseapp.com",
  databaseURL: "https://renmohomes.firebaseio.com",
  projectId: "renmohomes",
  storageBucket: "renmohomes.appspot.com",
  messagingSenderId: "809914467499",
  appId: "1:809914467499:web:ee13947f96032af39163ee",
  measurementId: "G-77GCB9FK6K"
};


//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }