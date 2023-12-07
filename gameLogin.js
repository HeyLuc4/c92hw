function addUser(){
    p1Name = document.getElementById("p1Name").value;
    p2Name = document.getElementById("p2Name").value;
    localStorage.setItem("p1Name",p1Name);
    localStorage.setItem("p2Name",p2Name);
    window.location = "game.htm";
}
