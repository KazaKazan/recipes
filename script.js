const landingCard = document.getElementById("landingCard");
const contPrompt = document.getElementById("contPrompt");
const pageZero = document.getElementById("infoButton");
const pageOne = document.getElementById("ingButton");
const pageTwo = document.getElementById("recButton");
const rightContent = document.getElementById("rightContent");
const backButton = document.getElementById("backButton");
const fwdButton = document.getElementById("fwdButton");

let currentRecipe = 0;

contPrompt.onclick = () => landingCard.classList.add("hidden");
pageZero.onclick = () => displayPage(0);
pageOne.onclick = () => displayPage(1);
pageTwo.onclick = () => displayPage(2);
backButton.onclick = () => changeRecipe(-1);
fwdButton.onclick = () => changeRecipe(1);

var request = new XMLHttpRequest();
request.open("GET", "recipes.json", false);
request.send(null);
var recipeJSON = JSON.parse(request.responseText);

function displayPage(pageNumber){
    let recipe = recipeJSON[currentRecipe];

    while (rightContent.firstChild) {
        rightContent.firstChild.remove()
    };

    switch(pageNumber){
        case 0:
            const infoPage = document.createElement("p");
            infoPage.textContent = recipe.info
            rightContent.appendChild(infoPage)
            break;
        case 1:
            const ingPage = document.createElement("ul");
            for (let i = 0; i < recipe.ingredients.length; i++) {
                const newIng = document.createElement("li");
                newIng.textContent = recipe.ingredients[i]
                ingPage.appendChild(newIng)
              };
            rightContent.appendChild(ingPage)
            break;
        case 2:
            const recPage = document.createElement("ol");
            for (let i = 0; i < recipe.steps.length; i++) {
                const newStep = document.createElement("li");
                newStep.textContent = recipe.steps[i]
                recPage.appendChild(newStep)
              };
            rightContent.appendChild(recPage)
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

function changeRecipe(inc){
    console.log("Changing recipe...")
}

displayRecipe()