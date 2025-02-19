import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({ children }){
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoriteList, setfavoriteList] = useState([]);
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        if (recipeDetailsData?.recipe.ingredients) {
            setChecked(recipeDetailsData.recipe.ingredients.map((_, i) => ({ id: i, checked: false })));
        }
    }, [recipeDetailsData]);

    const navigate = useNavigate();

    async function handleSubmit(event){
         event.preventDefault();
        
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();

            if(data?.data?.recipes){
                setLoading(true);
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam('');
                navigate('/');
            }
            
            
            
        } catch (error) {
            console.log(error);
            setLoading(false);
            setSearchParam('');
        }
        console.log(recipeList);

    }
    
    function handleAddFavourite(currentItem){

        const cpyList = [...favoriteList];
        const index = cpyList.findIndex(item => item.id === currentItem.id);
        if(index === -1){
            cpyList.push(currentItem);
        }else{
            cpyList.splice(index);
        }
        setfavoriteList(cpyList);
     }

     function handleChecked(index){
       
       setChecked(prevItems => {
        return prevItems.map((item) => index == item.id ? {id:index, checked: !item.checked} : item)
       })
   
    }

     
   
    return (
        <GlobalContext.Provider value={{searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeDetailsData, setRecipeDetailsData, favoriteList, setfavoriteList,  handleAddFavourite, checked, handleChecked}}>
            {children}
        </GlobalContext.Provider>
    )
}