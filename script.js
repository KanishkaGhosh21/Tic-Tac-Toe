let winColor ="rgb(3, 116, 75)"
let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let player = 1;
document.querySelector("#winner p").innerText = `Player ${player}'s turn`;
function func(id, i, j) {
    if (matrix[i][j] == 0) {
        matrix[i][j] = player;
        if (player == 1) {
            document.getElementById(id).innerText = "X";
            document.getElementById(id).style.color = "rgb(99, 235, 233)";
            document.querySelector("#winner p").innerText = `Player ${player == 1 ? 2 : 1}'s turn`;
            checkWin(player);
            player = 2;
        }
        else {
            document.getElementById(id).innerText = "O";
            document.querySelector("#winner p").innerText = `Player ${player == 1 ? 2 : 1}'s turn`;
            checkWin(player);
            player = 1;
        }
        document.getElementById(id).setAttribute('disabled', 'disabled');
    }
    // Window Alert if same grid is choosen more than once
    //     else
    //         window.alert("Already selected. Choose another grid");
}

function checkWin(player) {
    let row1 = (matrix[0][0] == player && matrix[0][1] == player && matrix[0][2] == player);
    let row2 = (matrix[1][0] == player && matrix[1][1] == player && matrix[1][2] == player);
    let row3 = (matrix[2][0] == player && matrix[2][1] == player && matrix[2][2] == player);
    let col1 = (matrix[0][0] == player && matrix[1][0] == player && matrix[2][0] == player);
    let col2 = (matrix[0][1] == player && matrix[1][1] == player && matrix[2][1] == player);
    let col3 = (matrix[0][2] == player && matrix[1][2] == player && matrix[2][2] == player);
    let diag1 = (matrix[0][0] == player && matrix[1][1] == player && matrix[2][2] == player);
    let diag2 = (matrix[2][0] == player && matrix[1][1] == player && matrix[0][2] == player);

    if (row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2) {
        document.querySelector("#winner p").innerHTML = `Player ${player} Wins !!!!<br>Game Over`;
        if(row1)
        {
            document.getElementById("1").style.backgroundColor=winColor;
            document.getElementById("2").style.backgroundColor=winColor;
            document.getElementById("3").style.backgroundColor=winColor;
        }
        else if(row2)
        {
            document.getElementById("4").style.backgroundColor=winColor;
            document.getElementById("5").style.backgroundColor=winColor;
            document.getElementById("6").style.backgroundColor=winColor;
        }
        else if(row3)
        {
            document.getElementById("7").style.backgroundColor=winColor;
            document.getElementById("8").style.backgroundColor=winColor;
            document.getElementById("9").style.backgroundColor=winColor;
        }
        else if(col1)
        {
            document.getElementById("1").style.backgroundColor=winColor;
            document.getElementById("4").style.backgroundColor=winColor;
            document.getElementById("7").style.backgroundColor=winColor;
        }
        else if(col2)
        {
            document.getElementById("2").style.backgroundColor=winColor;
            document.getElementById("5").style.backgroundColor=winColor;
            document.getElementById("8").style.backgroundColor=winColor;
        }
        else if(col3)
        {
            document.getElementById("3").style.backgroundColor=winColor;
            document.getElementById("6").style.backgroundColor=winColor;
            document.getElementById("9").style.backgroundColor=winColor;
        }
        else if(diag1)
        {
            document.getElementById("1").style.backgroundColor=winColor;
            document.getElementById("5").style.backgroundColor=winColor;
            document.getElementById("9").style.backgroundColor=winColor;
        }
        else if(diag2)
        {
            document.getElementById("7").style.backgroundColor=winColor;
            document.getElementById("5").style.backgroundColor=winColor;
            document.getElementById("3").style.backgroundColor=winColor;
        }   
        GameOver();
    }
}
function GameOver()
{
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).setAttribute("disabled","disabled");
    }
    let reset=document.createElement("button");
    document.getElementById("reset").removeAttribute("hidden");
}
function reset()
{
    window.location.reload(); 
}