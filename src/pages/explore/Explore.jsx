import { useVideo } from "../../contexts/VideoContext"
import "../explore/Explore.css";
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
export const Explore = ()=>{
    const {state, dispatch} = useVideo();
    return(
        <div>
            <h2>Explore</h2>
            <div>
                <input className="search_field" type="text" placeholder="Search video by title" onChange={(e)=>dispatch({type:"search_input", payload:e.target.value})}/>
                <div className="explore_div"> 
                   {state?.videoData?.map((item)=>(
                   <div className="tile_detail_div" key={item._id} >
                   <img src={item.thumbnail} alt="tumbnail"/>
                   <span className="watch_later_icon"><WatchLaterOutlinedIcon/></span>
                   <div className="detail_text">
                   <h5 className="cat_first">{item?.title}</h5>
                   <h5 className="cat">{item?.category}</h5>
                   <p>{item?.views} | {item?.creator}</p>
                       
                   </div>
                  </div>
                   ))} 
                </div>    
            </div>
        </div>
    )
}