const landingCard = document.getElementById("landingCard");
const contPrompt = document.getElementById("contPrompt");

contPrompt.onclick = () => landingCard.classList.add("hidden");

let currentRecipe = 0;

function displayRecipe(recipeNumber){
    console.log("Displaying recipe " + recipeNumber)

    const recipeImage = document.getElementById("recipeImage")
    recipeImage.setAttribute("src","assets/"+recipeNumber+".jpg")
}

displayRecipe(currentRecipe)