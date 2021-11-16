const landingCard = document.getElementById("landingCard");
const contPrompt = document.getElementById("contPrompt");
const pageZero = document.getElementById("infoButton");
const pageOne = document.getElementById("ingButton");
const pageTwo = document.getElementById("recButton");
const rightContent = document.getElementById("rightContent");

let currentRecipe = 0;

contPrompt.onclick = () => landingCard.classList.add("hidden");
pageZero.onclick = () => displayPage(0);
pageOne.onclick = () => displayPage(1);
pageTwo.onclick = () => displayPage(2);

var request = new XMLHttpRequest();
request.open("GET", "recipes.json", false);
request.send(null);
var recipeJSON = JSON.parse(request.responseText);

function displayPage(pageNumber){
    while (rightContent.firstChild) {
        rightContent.firstChild.remove()
    };

    switch(pageNumber){
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
    };
};

function displayRecipe(){
    const recipeImage = document.getElementById("recipeImage");
    recipeImage.setAttribute("src","assets/"+currentRecipe+".jpg");
    const recipeName = document.getElementById("recipeName");
    recipeName.textContent = recipeJSON[currentRecipe].name;
    
    displayPage(0)
};

displayRecipe()