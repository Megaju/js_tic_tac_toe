// gestion du tour par tour
var tour = "playerA";
// les cases prise par les joueurs
var casePlayerA = [0];
var casePlayerB = [0];

$("#board-game td").click(function () {
    $(this).addClass(tour);
    if (tour === "playerA") {
        tour = "playerB";
        $("#player1").removeClass("playerActif");
        $("#player2").addClass("playerActif");
    } else {
        tour = "playerA";
        $("#player2").removeClass("playerActif");
        $("#player1").addClass("playerActif");
    }
});

$("#1").click(function () {
    if (tour === "playerA") {
        casePlayerA.push(1);
        testVicyory();
    }
});
$("#2").click(function () {
    if (tour === "playerA") {
        casePlayerA.push(2);
        testVicyory();
    }
});
$("#3").click(function () {
    if (tour === "playerA") {
        casePlayerA.push(3);
        testVicyory();
    }
});

// différentes conditions de victoire
// 123 | 456 | 789 | 147 | 258 | 369 | 159 | 357
// si un joueur possède une de ces 3 combinaisons, il gagne
function playerAWin() {
    alert("Player A win ! ! !")
}

function playerBWin() {
    alert("Player B win ! ! !")
}

function testVictory() {
    if (casePlayerA.indexOf(1) > -1 && casePlayerA.indexOf(2) > -1 && casePlayerA.indexOf(3) > -1) {
        playerAWin();
    };
    if (casePlayerA.indexOf(4) > -1 && casePlayerA.indexOf(5) > -1 && casePlayerA.indexOf(6) > -1) {
        playerAWin();
    };
    if (casePlayerA.indexOf(7) > -1 && casePlayerA.indexOf(8) > -1 && casePlayerA.indexOf(9) > -1) {
        playerAWin();
    };
    if (casePlayerA.indexOf(1) > -1 && casePlayerA.indexOf(4) > -1 && casePlayerA.indexOf(7) > -1) {
        playerAWin();
    };
    if (casePlayerA.indexOf(2) > -1 && casePlayerA.indexOf(5) > -1 && casePlayerA.indexOf(8) > -1) {
        playerAWin();
    };
    if (casePlayerA.indexOf(3) > -1 && casePlayerA.indexOf(6) > -1 && casePlayerA.indexOf(9) > -1) {
        playerAWin();
    };
    if (casePlayerA.indexOf(1) > -1 && casePlayerA.indexOf(5) > -1 && casePlayerA.indexOf(9) > -1) {
        playerAWin();
    };
    if (casePlayerA.indexOf(3) > -1 && casePlayerA.indexOf(5) > -1 && casePlayerA.indexOf(7) > -1) {
        playerAWin();
    };
}