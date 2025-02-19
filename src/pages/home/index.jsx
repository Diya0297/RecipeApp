import { GlobalContext } from "../../context"
import { useContext } from "react";
import RecipeItem from "../../RecipeItem";

export default function Home(){

    const {recipeList, loading} = useContext(GlobalContext);
    if(loading) return <div>Please Wait...</div>
    return <div className="flex flex-wrap gap-10 justify-center">
        {recipeList && recipeList.length > 0 ? 
        recipeList.map((item,index) => <RecipeItem item={item} key={index}/>) : 
        <img src="https://i.pinimg.com/originals/32/40/fe/3240fedef14bad0925d8b0a018497d0a.gif" alt="GIF here" className="m-5 rounded-xl shadow-[#DDB892]-lg my-[10rem]"/>
        }
    </div>
}