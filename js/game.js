// gestion du tour par tour
var tour = "playerA";

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

// différentes conditions de victoire
// 123 | 456 | 789 | 147 | 258 | 369 | 159 | 357
// si un joueur possède une de ces 3 combinaisons, il gagne

