const landingCard = document.getElementById("landingCard");
const contPrompt = document.getElementById("contPrompt");

contPrompt.onclick = () => landingCard.classList.add("hidden");

class Recipe {
    name;
    info;
    ingredients;
    steps;
    restrictions;
    constructor(name,info,ingredients,steps,restrictions){
        this.name = name;
        this.info = info;
        this.ingredients = ingredients;
        this.steps = steps;
        this.restrictions = restrictions;
    }
}

var request = new XMLHttpRequest();
request.open("GET", "recipes.json", false);
request.send(null)
var recipeJSON = JSON.parse(request.responseText);

console.log(recipeJSON[0].name)

let currentRecipe = 0;
let currentPage = 0;

function displayPage(){
    console.log("Displaying page " + currentPage)
}

function displayRecipe(){
    console.log("Displaying recipe " + currentRecipe);

    currentPage = 0;

    const recipeImage = document.getElementById("recipeImage");
    recipeImage.setAttribute("src","assets/"+currentRecipe+".jpg");
    const recipeName = document.getElementById("recipeName");
    recipeName.textContent = recipeJSON[currentRecipe].name;
}

displayRecipe()