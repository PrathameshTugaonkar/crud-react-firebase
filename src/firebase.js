
import * as firebase from 'firebase';

var firebaseConfig = {

  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  //Export the database reference 

  export default fireDb.database().ref();

