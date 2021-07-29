function adduser(){
    player1name = document.getElementById("Player1_name_input").value;
    player2name = document.getElementById("Player2_name_input").value;
localStorage.setItem("player1_name",player1name);
localStorage.setItem("player2_name",player2name);
window.location = "gamepage.html"
}