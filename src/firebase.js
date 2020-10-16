
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAzAKgPxVfUCTEqlmGPvyn1XdcMzHifD9A",
    authDomain: "crudtest-c7105.firebaseapp.com",
    databaseURL: "https://crudtest-c7105.firebaseio.com",
    projectId: "crudtest-c7105",
    storageBucket: "crudtest-c7105.appspot.com",
    messagingSenderId: "615872717520",
    appId: "1:615872717520:web:701e1a20f468353a75f4d5"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  //Export the database reference 

  export default fireDb.database().ref();

