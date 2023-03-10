import RecipeCard from "./RecipeCard"
import {useHistory} from "react-router-dom"

function RecipeList({recipes, handleFavoriteToggle}){
    const history = useHistory()

    function handleClick(id) {
        history.push(`/recipes/${id}`);
    }
  
    const recipeCard = recipes.map((recipe)=> {
        return <RecipeCard 
            key = {recipe.id} 
            id= {recipe.id}
            name = {recipe.name} 
            image = {recipe.image}
            description = {recipe.description}
            cuisine = {recipe.cuisine}
            favorited = {recipe.favorited}
            onSwitch = {() => handleClick(recipe.id)} 
            handleFavoriteToggle = {handleFavoriteToggle}
        />
    })
  
    return(
        <div className="recipe-list">
            {recipeCard}
        </div>
    )
};

export default RecipeList