var firebaseConfig = {
  apiKey: "AIzaSyBX6jvIANFxvSlVzoKoF_0jfKCLmjyB2n0",
  authDomain: "talking-time-cf1b2.firebaseapp.com",
  projectId: "talking-time-cf1b2",
  storageBucket: "talking-time-cf1b2.appspot.com",
  messagingSenderId: "101930838801",
  appId: "1:101930838801:web:61936e3863d4d5223afab0"
};

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 //ADD YOUR FIREBASE LINKS HERE
 user_name = localStorage.getItem("user_name")
 document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"
 
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log(Room_names)
       row = "<div class='room_names' id="+Room_names+"onclick='redirect_to_room_name(dis.id)'>#"+Room_names+"</div>"
       document.getElementById("output").innerHTML += row
       //End code
       });});}
 getData();      
 function logout() {
       localStorage.removeItem("user_name")
       localStorage.removeItem("room_name")
       window.location = "index.html"
 }
 function add_room()
 {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
   localStorage.setItem("room_name",room_name)
   window.location = "talking_page.html"
 }
 function redirect_to_room_name(name) {
       console.log(name)
       localStorage.setItem("room_name",name)
       window.location = "talking_page.html"
 }