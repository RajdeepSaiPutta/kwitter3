//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name1=message_data['name']
message=message_data['message']
like=message_data['like']
name_tag='<h4>'+name1+'<img class="user_tick" src="tick.png"></h4>';
message_tag='<h4 class="message_h4">'+message+'</h4>'
like_button='<button class="btn btn-warning" id='+firebase_message_id+' value='+like+' onclick="update(this.id)">'
span_tag='<span class="glyphicon glyphicon-thumbs-up">like: '+like+'</span></button><hr>'
row=name_tag+message_tag+like_button+span_tag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
function send(){

      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({

            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value=""
}
function update(message_id){

      button_id=message_id
      likes=document.getElementById(button_id).value
      updated_likes=Number(likes)+1
      firebase.database().ref(room_name).child(message_id).update({

            like:updated_likes
      })
}
function logout(){

      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location='index.html'
}