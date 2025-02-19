import { GlobalContext } from "../../context"
import { useContext } from "react";
import RecipeItem from "../../RecipeItem";

export default function Favourites(){
        const {favoriteList} = useContext(GlobalContext);

        if(favoriteList.length == 0) return <img src="https://i.pinimg.com/originals/32/40/fe/3240fedef14bad0925d8b0a018497d0a.gif" alt="" className="m-auto rounded-xl shadow-[#DDB892]-lg my-[10rem]"/>
        return <div className="flex flex-wrap gap-10 justify-center">
            {favoriteList && favoriteList.length > 0 ? 
            favoriteList.map((item,index) => <RecipeItem item={item} key={index}/>) : 
            <p className="text-3xl font-extrabold text-center my-8 text-[#DDB892]">Nothing in favorites....</p>}
        </div>
}