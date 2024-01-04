const firebaseConfig = {
    apiKey: "AIzaSyD8VlbiDICjxWXMfUjFiylM8ChWXV59S-c",
    authDomain: "classtest-58322.firebaseapp.com",
    projectId: "classtest-58322",
    storageBucket: "classtest-58322.appspot.com",
    messagingSenderId: "700232317324",
    appId: "1:700232317324:web:bad92ca1fdb2c01a26bea9"
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
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

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}





function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
  });
  document.getElementById("msg").value = "";
}