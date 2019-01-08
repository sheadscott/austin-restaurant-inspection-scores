import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

export default (yelpId, facility_id, found) => {
  var config = {
    apiKey: "AIzaSyCVxuX3DkSqnRwirUfL-jGSj-sQOrt1v78",
    authDomain: "atx-rest-inspect.firebaseapp.com",
    databaseURL: "https://atx-rest-inspect.firebaseio.com"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  const ref = database.ref(yelpId);
  ref.orderByChild("found").on("child_added", function(snapshot) {
    console.log(snapshot.key, snapshot.val());
  });
  ref.set({
    facility_id: facility_id,
    found: found
  });
};
