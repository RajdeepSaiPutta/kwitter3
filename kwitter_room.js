const firebaseConfig = {
      apiKey: "AIzaSyDcmueFfWt0GuZ_RD6erGS_KkXQvYjjwIU",
      authDomain: "kwitter-f5756.firebaseapp.com",
      databaseURL: "https://kwitter-f5756-default-rtdb.firebaseio.com",
      projectId: "kwitter-f5756",
      storageBucket: "kwitter-f5756.appspot.com",
      messagingSenderId: "655649611610",
      appId: "1:655649611610:web:57bd201277f88e17835d63"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById('user_name').innerHTML="welcome "+user_name+"!"
function addRoom(){

      room_name=document.getElementById('room_name').value;
      firebase.database().ref("/").child(room_name).update({

            purpose:"addingRoomName"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id=" +Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirect(name){

      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout(){

      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location='index.html'
}