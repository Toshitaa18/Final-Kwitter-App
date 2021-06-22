// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA0L559X7HtgVTxHRJoNRqPgPPWhf2mxqE",
      authDomain: "kwitter-project-b68ff.firebaseapp.com",
      databaseURL: "https://kwitter-project-b68ff-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-b68ff",
      storageBucket: "kwitter-project-b68ff.appspot.com",
      messagingSenderId: "456327792565",
      appId: "1:456327792565:web:a629570dfbc4d9621fbbfc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" ! ";
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

     window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_name = childKey;
      //Start code
     console.log("Room Name - " + Room_name);
     row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+Room_name + "</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
