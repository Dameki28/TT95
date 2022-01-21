function new_user() {
    username = document.getElementById("user_name").value
    localStorage.setItem("user_name",user_name)
    window.location = "talking_time_room.html"
}