import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";


export default function Navbar(){
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);
    

    return <div  className="w-full bg-gradient-to-r from-[#744d3a] to-[#8B5E3B] text-white py-4 px-6 flex justify-between items-center" >
        <div className=" h-full flex text-2xl text-[#DDB892] gap-1 items-center font-extrabold hover:scale-105 duration-200 ease-in-out">
            <h2 >RecipeApp</h2>
            <img src="/Images/app-logo.png" alt="" className="w-[3rem] object-cover"/>
        </div>
        <form onSubmit={ handleSubmit}>
            <input 
            type="text"
            name="search"
            placeholder="Recipe..."
            value = {searchParam}
            onChange = {(event) => setSearchParam(event.target.value)}
            className="bg-[#F3E5D8] text-[#5C3D2E] text-bold px-4 py-2 rounded-full w-[25rem] outline-none focus:ring-2 focus:ring-[#DDB892] hover:scale-105 duration-200 ease-in-out placeholder:text-[#8B5E3B] placeholder:text-bold"
             />
        </form>
        <ul className="flex gap-5 text-[#DDB892] font-bold">
            <li className="hover:text-[#F3E5D8] text-xl  hover:scale-105 duration-200 ease-in-out ">
                <NavLink to={"/"} >
                   Home
                    
                </NavLink>
            </li>
            <li className="hover:text-[#F3E5D8] text-xl  hover:scale-105 duration-200 ease-in-out">
                <NavLink to={"/favourites"}>
                   Favourites
                    
                </NavLink>
            </li>
        </ul>
        
            
       

    </div>
}