const landingCard = document.getElementById("landingCard");
const contPrompt = document.getElementById("contPrompt");
const pageZero = document.getElementById("infoButton");
const pageOne = document.getElementById("ingButton");
const pageTwo = document.getElementById("recButton");
const rightContent = document.getElementById("rightContent");
const backButton = document.getElementById("backButton");
const fwdButton = document.getElementById("fwdButton");
const resContainer = document.getElementById("resContainer");
const imageContainer = document.getElementById("imageContainer")
const homeButton = document.getElementById("homeText")
const contentPage = document.getElementById("content")

let currentRecipe = 0;

contPrompt.onclick = () => landingCard.classList.add("hidden");
pageZero.onclick = () => displayPage(0);
pageOne.onclick = () => displayPage(1);
pageTwo.onclick = () => displayPage(2);
backButton.onclick = () => changeRecipe(-1);
fwdButton.onclick = () => changeRecipe(1);
imageContainer.onmouseenter = () => displayRestrictions();
imageContainer.onmouseleave = () => displayRestrictions();
homeButton.onclick = () => location.reload();

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
    recipeImage.setAttribute("src","assets/dishes/"+currentRecipe+".jpg");
    const recipeName = document.getElementById("recipeName");
    recipeName.textContent = recipeJSON[currentRecipe].name;
    
    displayPage(0)
    prepareRestrictions()
};

function changeRecipe(inc){
    const recipeCount = Object.keys(recipeJSON).length;
    let newRecipe = currentRecipe + inc;
    if(newRecipe < 0){
        newRecipe = Object.keys(recipeJSON).length - 1;
    }
    else if (newRecipe > Object.keys(recipeJSON).length - 1)
    {
        newRecipe = 0;
    };
    currentRecipe = newRecipe;
    displayRecipe()
}

function prepareRestrictions(){
    let restrictions = recipeJSON[currentRecipe].restrictions;

    while (resContainer.firstChild) {
        resContainer.firstChild.remove()
    };

    for (let i = 0; i < restrictions.length; i++) {
        const newRes = document.createElement("img");
        newRes.setAttribute("src","assets/restrictions/"+restrictions[i]+".svg");
        newRes.classList.add("restriction")
        resContainer.appendChild(newRes)
    };

}

function displayRestrictions(){
    let restrictions = recipeJSON[currentRecipe].restrictions;

    if(restrictions.length > 0){
        resContainer.classList.toggle("hidden")
    }
}

displayRecipe()
contentPage.classList.remove("hidden")