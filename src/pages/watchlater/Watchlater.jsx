import { useNavigate } from "react-router-dom";
import { useVideo } from "../../contexts/VideoContext";

export const Watchlater = ()=>{
    const {dispatch} = useVideo();
    const watchLaterData = JSON.parse(localStorage.getItem("Watch"));
    console.log(watchLaterData);
    const navigate = useNavigate();
    return(
        <div>
            <h2>Watch later</h2>
            <div className="tumbnail_detail_tiles">
                    {watchLaterData?.map((item)=>(
                        <div className="tile_detail_div" key={item._id} onClick={()=>{dispatch({type:"single_video", payload:item?._id}); navigate("/siglevideo")}}>
                            <img src={item.thumbnail} alt="tumbnail"/>
                            <div className="detail_text_cat">
                            <h5 className="cat_first_detail">{item?.title}</h5>
                            <h5 className="cat_second_detail">{item?.category}</h5>
                            <p>{item?.views} | {item?.creator}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}