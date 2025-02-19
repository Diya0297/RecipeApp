import { Link } from "react-router-dom";
export default function RecipeItem({item}){
   
    return (
        
        <div className="bg-[#DDB892] text-[#5C3D2E] w-80 rounded-2xl shadow-xl p-4 hover:scale-105 transition-transform m-1">
            <img src={item.image_url} alt="image here" className="w-full h-48 rounded-xl object-cover shadow-md"/>
            <h2 className="font-bold text-sm m-1.5 text-[#6f1d1b]">Publisher: {item.publisher}</h2>
            <h2 className="font-bold text-[1.2rem] m-1 text-[#583101]"> {item.title}</h2>
            <Link
            to={`/recipe-item/${item?.id}`}
            className="flex justify-center items-center m-auto text-sm p-1 mt-5 px-8 rounded-lg uppercase  w-[11rem] h-[3rem] shadow-md bg-[#583101] text-[#DDB892] font-medium"
            >
            Recipe Details
            </Link>

            
        </div>
    );
};