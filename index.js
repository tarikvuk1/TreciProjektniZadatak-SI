var playerscore = document.querySelector(".playerscore");
var computerscore = document.querySelector(".computerscore");
var choice = document.getElementsByClassName("choice");
var decision = document.querySelector(".decision");
 var reset = document.querySelector(".reset");
var currentplayerscore = 0;
var currentcomputerscore = 0;
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", play);

}
reset.addEventListener("click", resetgame);
function resetgame() {
    currentcomputerscore = 0;
    currentplayerscore = 0;
    playerscore.innerHTML = currentplayerscore;
    computerscore.innerHTML = currentcomputerscore;
}

function play() {
    var choice = this.innerHTML;
    var computerchoice = Math.ceil(Math.random() * (2 - 0) + 0);
    decision.innerHTML = validate(computerchoice, choice);
}

function validate(rand, playerchoice) {
    var choices = ['Kamen', 'Papir', 'Makaze'];
    var check = choices[rand];
    if (check == playerchoice) {
        return "Neriješeno, Vaš odabir je: " + playerchoice + " , Igrač 2 odabir je: " + check;
    } else if (check == "Kamen" && playerchoice == "Papir") {
        playerscore.innerHTML = currentplayerscore + 1;
        currentplayerscore = currentplayerscore + 1;
        return "Pobijedili ste, Vaš odabir je: " + playerchoice + " , Igrač 2 odabir je: " + check;
    } else if (check == "Papir" && playerchoice == "Kamen") {
        computerscore.innerHTML = currentcomputerscore + 1;
        currentcomputerscore = currentcomputerscore + 1;
        return "Izgubili ste, Vaš odabir je: " + playerchoice + " , Igrač 2 odabir je: " + check;
    } else if (check == "Papir" && playerchoice == "Makaze") {
        playerscore.innerHTML = currentplayerscore + 1;
        currentplayerscore = currentplayerscore + 1;
        return "Pobijedili ste, Vaš odabir je: " + playerchoice + " , Igrač 2 odabir je: " + check;
    } else if (check == "Makaze" && playerchoice == "Papir") {
        computerscore.innerHTML = currentcomputerscore + 1;
        currentcomputerscore = currentcomputerscore + 1;
        return "Izgubili ste, Vaš odabir je: " + playerchoice + " , Igrač 2 odabir je: " + check;
    } else if (check == "Makaze" && playerchoice == "Kamen") {
        playerscore.innerHTML = currentplayerscore + 1;
        currentplayerscore = currentplayerscore + 1;
        return "Pobijedili ste, Vaš odabir je: " + playerchoice + " , Igrač 2 odabir je: " + check;
    } else if (check == "Kamen" && playerchoice == "Makaze") {
        computerscore.innerHTML = currentcomputerscore + 1;
        currentcomputerscore = currentcomputerscore + 1;
        return "Izgubili ste, Vaš odabir je: " + playerchoice + " , Igrač 2 odabir je: " + check;
    }
}

      