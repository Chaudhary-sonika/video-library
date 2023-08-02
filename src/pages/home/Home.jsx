import {  useNavigate } from "react-router-dom";
import { useVideo } from "../../contexts/VideoContext"
import "../home/Home.css";
import { useEffect } from "react";

export const Home =()=>{
    const {state, dispatch} = useVideo();
    const navigate = useNavigate();
    
    return(
        
            <div>
                <h2 className="title_home">Categories</h2>
                <div className="tumbnail_tiles">
                    {state?.categories?.map((item)=>(
                        <div className="tile_div" key={item._id} onClick={()=>{dispatch({type:"cat_detail", payload:item?.category}); navigate("/detailcategory")}}>
                            <img src={item.thumbnail} alt="tumbnail"/>
                            <h5>{item?.category}</h5>
                        </div>
                    ))}
                </div>
            </div>
        
    )
}