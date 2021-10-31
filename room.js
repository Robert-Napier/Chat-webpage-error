var firebaseConfig = {
    apiKey: "AIzaSyDTCTz79X7Y5c0YQ0IIBwKMi_A6LGEebEI",
    authDomain: "chat-page-c8246.firebaseapp.com",
    databaseURL: "https://chat-page-c8246-default-rtdb.firebaseio.com",
    projectId: "chat-page-c8246",
    storageBucket: "chat-page-c8246.appspot.com",
    messagingSenderId: "749194226649",
    appId: "1:749194226649:web:8c9d6f21669201fb0807c8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "robert"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class= 'room_name' id=" + Room_names + " onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}
getData();

function redirectToRoomName(name) {
    console.log(name);

    localStorage.setItem("room_name", name);
    window.location = "page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}