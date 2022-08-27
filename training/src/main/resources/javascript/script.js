var characters = [];
var level = 48;
var memoryCards = [];
var score = 0;

const boysFolder = "images/faces/boys/";
const girlsFolder = "images/faces/girls/";
const memoryFolder = "images/memory/";

const extension = ".png";

$(document).ready(function() {    
    var i = "1";

    $(function memoryCardsImageLoop() {
        memoryCards.push(memoryFolder + "card-" + i + extension);
        memoryCards.push(memoryFolder + "card-" + i + extension);
        
        if (i == 24) {
            console.log('memory cards loaded');
        }
        else {
            i++;

            memoryCardsImageLoop();
        };
    });   
});

$(document).ready(function() {
    var i = "1";

    $(function boysImageLoop() {
        characters.push(boysFolder + "boy-" + i + extension);
        
        if (i == 9) {
            console.log('boys loaded');
        }
        else {
            i++;

            boysImageLoop();
        };
    });   
});

$(document).ready(function() {
    var i = "1";

    $(function girlsImageLoop() {
        characters.push(girlsFolder + "girl-" + i + extension);
        
        if (i == 11) {
            console.log('girls loaded');
        }
        else {
            i++;

            girlsImageLoop();
        };
    });   
});

function check_data() {
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let password = document.getElementById("password");

    if (!name.validity.valid) {
        alert("Invalid name");
    }
    else if (!email.validity.valid){
        alert("Email is not valid type");
    }
    else if (!password.validity.valid){
        alert("Password must be at least 6 characters long");
    }
    else{
        alert("Registration completed!");
    }
}

function cleanUp() {
    document.getElementById("cardsContainer").innerHTML = "";
    
    let answeredContainers = document.querySelectorAll(".answered");

    for (let i = 0; i < answeredContainers.length; i++) {
        answeredContainers[i].innerHTML = "";

        answeredContainers[i].classList.add("answer");
        answeredContainers[i].classList.remove("answered");
    }
    
    let questionButtonContainers = document.querySelectorAll(".question_button");

    for (let i = 0; i < questionButtonContainers.length; i++) {
        questionButtonContainers[i].removeAttribute("disabled");
    }

    $("#questionsContainer").attr("hidden", true);
}

function getRandomAttributes(gender, selected) {
    let attributes = "";

    if (gender === "boy") {
        if (selected) {
            attributes = attributes.concat("selected ");
        }

        attributes = attributes.concat("boy ", randomAttributes(["glasses", "hat", "mustache"]));
    }
    else if (gender === "girl") {
        if (selected) {
            attributes = attributes.concat("selected ");
        }

        attributes = attributes.concat("girl ", randomAttributes(["glasses", "hat"]));
    }
    
    return attributes;
}

function question(element) {
    let selected = document.querySelector(".card[selected]");

    if (element.id === "option1") {
        if (selected.hasAttribute("boy")) {
            let answer = document.querySelector(".answer");

            answer.innerText = "Esatto! Il personaggio è un uomo";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let girls = document.querySelectorAll(".card[girl]");

            for (let i = 0; i < girls.length; i++) {
                girls[i].classList.add("discarded");
            }
        }
        else {
            let answer = document.querySelector(".answer");

            answer.innerText = "No! Il personaggio è una donna";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let boys = document.querySelectorAll(".card[boy]");

            for (let i = 0; i < boys.length; i++) {
                boys[i].classList.add("discarded");
            }

            $("#option5").attr("disabled", true);
        }

        $("#option1").attr("disabled", true);

        $("#option2").attr("disabled", true);
    }
    else if (element.id === "option2") {
        if (selected.hasAttribute("girl")) {
            let answer = document.querySelector(".answer");

            answer.innerText = "Esatto! Il personaggio è una donna";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let boys = document.querySelectorAll(".card[boy]");

            for (let i = 0; i < boys.length; i++) {
                boys[i].classList.add("discarded");
            }

            $("#option5").attr("disabled", true);
        }
        else {
            let answer = document.querySelector(".answer");

            answer.innerText = "No! Il personaggio è un uomo";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let girls = document.querySelectorAll(".card[girl]");

            for (let i = 0; i < girls.length; i++) {
                girls[i].classList.add("discarded");
            }
        }

        $("#option1").attr("disabled", true);

        $("#option2").attr("disabled", true);
    }
    else if (element.id === "option3") {
        if (selected.hasAttribute("glasses")) {
            let answer = document.querySelector(".answer");

            answer.innerText = "Esatto! Il personaggio ha gli occhiali";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let noGlasses = document.querySelectorAll(".card:not([glasses])");

            for (let i = 0; i < noGlasses.length; i++) {
                noGlasses[i].classList.add("discarded");
            }
        }
        else {
            let answer = document.querySelector(".answer");

            answer.innerText = "No! Il personaggio non ha gli occhiali";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let glasses = document.querySelectorAll(".card[glasses]");

            for (let i = 0; i < glasses.length; i++) {
                glasses[i].classList.add("discarded");
            }
        }

        $("#option3").attr("disabled", true);
    }
    else if (element.id === "option4") {
        if (selected.hasAttribute("hat")) {
            let answer = document.querySelector(".answer");

            answer.innerText = "Esatto! Il personaggio ha il cappello";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let noHat = document.querySelectorAll(".card:not([hat])");

            for (let i = 0; i < noHat.length; i++) {
                noHat[i].classList.add("discarded");
            }
        }
        else {
            let answer = document.querySelector(".answer");

            answer.innerText = "No! Il personaggio non ha il cappello";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let hat = document.querySelectorAll(".card[hat]");

            for (let i = 0; i < hat.length; i++) {
                hat[i].classList.add("discarded");
            }
        }

        $("#option4").attr("disabled", true);
    }
    else if (element.id === "option5") {
        if (selected.hasAttribute("mustache")) {
            let answer = document.querySelector(".answer");

            answer.innerText = "Esatto! Il personaggio ha i baffi";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let noMustache = document.querySelectorAll(".card:not([mustache])");

            for (let i = 0; i < noMustache.length; i++) {
                noMustache[i].classList.add("discarded");
            }

            let girls = document.querySelectorAll(".card[girls]");

            for (let i = 0; i < girls.length; i++) {
                girls[i].classList.add("discarded");
            }

            $("#option1").attr("disabled", true);

            $("#option2").attr("disabled", true);
        }
        else {
            let answer = document.querySelector(".answer");

            answer.innerText = "No! Il personaggio non ha i baffi";

            answer.classList.remove("answer");
            answer.classList.add("answered");

            let mustache = document.querySelectorAll(".card[mustache]");

            for (let i = 0; i < mustache.length; i++) {
                mustache[i].classList.add("discarded");
            }
        }

        $("#option5").attr("disabled", true);
    }

    let questionButtons = document.querySelectorAll(".question_button:not([disabled])");

    if ((questionButtons.length == 0)) {
        let results = document.querySelectorAll(".card:not(.discarded)");
    
        for (let i = 0; i < results.length; i++) {
            results[i].classList.add("selectable");
        }
    }
}

function randomAttributes(attributes) {
    let randomizedAttributes = [];

    attributes.push("none");

    let attributesNumber = Math.floor(Math.random() * 3);

    for(let i = 0; i < attributesNumber; i++) {
        let attribute = attributes[Math.floor(Math.random() * attributes.length)];

        if (!randomizedAttributes.includes(attribute)) {
            randomizedAttributes.push(attribute);
        }
    }

    if (randomizedAttributes.includes("none")) {
        randomizedAttributes = jQuery.grep(randomizedAttributes, function(value) {
            return value != "none";
        });
    }

    return randomizedAttributes.join(" ") ;
}

function randomize() {
    cleanUp();

    let randomizedCharacters = shuffle(characters);

    let selected = Math.floor(Math.random() * randomizedCharacters.length);

    let htmlString = "";
    let index = 0;

    for(let i = 0; i < randomizedCharacters.length; i++) {
        if (index == 12) {
            index = 0;
        }

        index++;

        if (index == 1) {
            htmlString = htmlString.concat("<div class=\"row pt-2\">");
        }

        let gender = randomizedCharacters[i].includes("boy") ? "boy" : "girl";

        let attributes = getRandomAttributes(gender, (i == selected));

        htmlString = htmlString.concat(
            "<div class=\"card col-1\" onclick=\"selectCard(this)\" ", attributes, ">",
            "<img class=\"face\" src=\"", randomizedCharacters[i], "\" />",
            "<img class=\"glasses\" src=\"images/faces/accessories/glasses.png\" />",
            "<img class=\"hat\" src=\"images/faces/accessories/hat.png\" />",
            "<img class=\"mustache\" src=\"images/faces/accessories/mustache.png\" />",
            "</div>"
        );
        
        if ((index == 12) || (i == (randomizedCharacters.length -1))) {
            htmlString = htmlString.concat("</div>");
        }
    };

    $("#cardsContainer").append(htmlString);

    $("#guessWhoPlayButton").attr("disabled", true);

    $("#questionsContainer").attr("hidden", false);
}

function selectCard(element) {
    let questionButtons = document.querySelectorAll(".question_button:not([disabled])");

    if ((questionButtons.length == 0) && element.classList.contains("selectable")) {
        if (element.hasAttribute("selected")) {
            score = score + 100;

            $("#scoreNumber").text(score);

            let selectableCards = document.querySelectorAll(".selectable");

            for (let i = 0; i < selectableCards.length; i++) {
                selectableCards[i].classList.remove("selectable");
            }

            $("#guessWhoPlayButton").attr("disabled", false);

            alert("Congratulazioni! Hai indovinato!");
        }
        else {
            score = score -25;

            $("#scoreNumber").text(score);

            element.classList.remove("selectable");

            alert("Nooo! Purtroppo hai sbagliato");
        }
    }
}

function selectMemoryCard(element) {
    if (element.hasAttribute("open")) {
        return;
    }

    let openMemoryCards = document.querySelectorAll(".memory_card:not([completed]).memory_card[open]");

    if (openMemoryCards.length > 1) {
        for (let i = 0; i < openMemoryCards.length; i++) {
            openMemoryCards[i].removeAttribute("open");
            openMemoryCards[i].setAttribute("close", "");

            let cardBack = openMemoryCards[i].parentElement.querySelector(".card_back");

            cardBack.removeAttribute("close");
        }
    }

    element.setAttribute("close", "");

    let image = element.parentElement.querySelector(".memory_card:not(.card_back)");

    image.removeAttribute("close");
    image.setAttribute("open", "");

    openMemoryCards = document.querySelectorAll(".memory_card:not([completed]).memory_card[open]");

    if (openMemoryCards.length > 1) {
        let attributes1 = openMemoryCards[0].getAttributeNames();
        let attributes2 = openMemoryCards[1].getAttributeNames();

        var filteredAttributes1 = attributes1.filter(function(e) { return e !== "open" && e !== "class" && e !== "src"})
        var filteredAttributes2 = attributes2.filter(function(e) { return e !== "open" && e !== "class" && e !== "src"})

        if (((filteredAttributes1.length > 0) && (filteredAttributes2.length > 0)) &&
                (filteredAttributes1[0] == filteredAttributes2[0])) {
                    
            openMemoryCards[0].setAttribute("completed", "");
            openMemoryCards[1].setAttribute("completed", "");
            
            score = score + 100;

            $("#scoreNumber").text(score);
        }
        else {
            score = score -25;
    
            $("#scoreNumber").text(score);
        }
    }

    let completedMemoryCards = document.querySelectorAll(".memory_card[completed]");

    if (completedMemoryCards.length == level) {
        $("#memoryPlayButton").attr("disabled", false);

        $("#memoryLevel").attr("disabled", false);
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex--;

        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function startMemory() {
    document.getElementById("memoryCardsContainer").innerHTML = "";

    level = document.getElementById("memoryLevel").value;

    let randomizedMemoryCards = memoryCards;

    if (level == "24") {
        randomizedMemoryCards = randomizedMemoryCards.filter(function(e) {
            let number = e.match(/\d/g).join("");
            return number < 13;
        });
    }
    else if (level == "36") {
        randomizedMemoryCards = randomizedMemoryCards.filter(function(e) {
            let number = e.match(/\d/g).join("");
            return number < 19;
        });
    }

    randomizedMemoryCards = shuffle(randomizedMemoryCards);

    let htmlString = "";
    let index = 0;

    for (let i = 0; i < randomizedMemoryCards.length; i++) {
        if (index == 12) {
            index = 0;
        }

        index++;

        if (index == 1) {
            htmlString = htmlString.concat("<div class=\"row pt-2\">");
        }

        let imagePath = randomizedMemoryCards[i];

        let attributes = imagePath.match(/\d/g).join("");

        htmlString = htmlString.concat(
            "<div class=\"card col-1\">",
            "<img class=\"memory_card\" src=\"", imagePath, "\" close ", attributes, "/>",
            "<img class=\"card_back memory_card\" onclick=\"selectMemoryCard(this)\" src=\"images/memory/card-back.png\" />",
            "</div>"
        );
        
        if ((index == 12) || (i == (randomizedMemoryCards.length -1))) {
            htmlString = htmlString.concat("</div>");
        }
    }

    $("#memoryCardsContainer").append(htmlString);

    $("#memoryPlayButton").attr("disabled", true);

    $("#memoryLevel").attr("disabled", true);
}