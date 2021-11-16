const landingCard = document.getElementById("landingCard");
const contPrompt = document.getElementById("contPrompt");

contPrompt.onclick = () => landingCard.classList.add("hidden");

class Recipe {
    name;
    info;
    ingredients;
    steps;
    constructor(name,info,ingredients,steps){
        this.name = name;
        this.info = info;
        this.ingredients = ingredients;
        this.steps = steps;
    }
}

let currentRecipe = 0;

function displayRecipe(recipeNumber){
    console.log("Displaying recipe " + recipeNumber)

    const recipeImage = document.getElementById("recipeImage")
    recipeImage.setAttribute("src","assets/"+recipeNumber+".jpg")
}

displayRecipe(currentRecipe)