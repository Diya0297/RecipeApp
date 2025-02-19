import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context";

export default function Details(){
    const {id} = useParams();
    const{recipeDetailsData, setRecipeDetailsData,favoriteList, handleAddFavourite, checked, handleChecked} = useContext(GlobalContext);
    useEffect(() => {
        async function getRecipeDetails(){
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();

            if(data?.data){
                setRecipeDetailsData(data?.data);
            }
            console.log(data);
        }

        getRecipeDetails();
    },[])

    
   
    return <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
            <div  className="h-96 overflow-hidden rounded-xl group">
                <img src={recipeDetailsData?.recipe.image_url} alt="Image here" 
                className="w-full h-full object-cover block group-hover:scale-105 duration-300 "
                />
            </div>
        </div>
        <div className="flex flex-col gap-0.5  border-[#6f1d1b] border-[2px] bg-[#DDB892] rounded-xl items-start p-3 shadow-xl hover:scale-105 transition-transform ease-in-out duration-200">
            <h2 className="font-bold text-sm m-1.5 text-[#6f1d1b]">Publisher: {recipeDetailsData?.recipe.publisher}</h2>
            <h2 className="font-bold text-[1.2rem] m-1 text-[#583101]"> {recipeDetailsData?.recipe.title}</h2>
            <div className="flex flex-row gap-3">
            <button
            onClick={() => handleAddFavourite(recipeDetailsData?.recipe)}
            className="flex justify-center items-center  text-sm p-1 mt-5 px-8 rounded-lg uppercase  min-w-[13rem] h-[3rem] shadow-md bg-[#583101] text-[#DDB892] font-medium"
            >
                {favoriteList && favoriteList.length > 0 && favoriteList.findIndex(
                (item) => item.id === recipeDetailsData?.recipe?.id
                ) !== -1
                ? "Remove from favorites"
                : "Add to favorites"}
            </button>
                
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-[#6f1d1b] m-1.5">Ingredients: </h1>
                <ul>
                    {recipeDetailsData?.recipe.ingredients.map( (item,index) => {
                        return <li key={index} className="flex gap-2 items-center min-w-[10rem]">
                            <input type="checkbox" className="form-checkbox h-[2rem] w-[1.2rem] accent-[#6f1d1b]"  checked={checked[index]?.checked} onChange={() => handleChecked(index)} />
                            <span className={`text-[#583101] font-bold ${checked[index]?.checked ? "line-through" : ""}`}>{item.quantity} {item.unit} {item.description}</span>
                            
                        </li>
                    })}
                </ul>
            </div>
        </div>
        

    </div>
}