import { useVideo } from "../../contexts/VideoContext"
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import EditNoteIcon from '@mui/icons-material/EditNote';
import "../singleVideos/SingleVideo.css";
export const SingleVideo = ()=>{
    const {state, dispatch} = useVideo();
    const watchLaterData = JSON.parse(localStorage.getItem("Watch"));
    console.log(state);
    return(
        <div>
            <h4 style={{textAlign:"left"}}> Video:</h4>
            <div>
                {state?.singleVideo?.map((item)=>{
                    const videoPresent = watchLaterData?.find((data)=>data._id===item._id)
                    // console.log(videoPresent);
                    return(
                        <div key={item._id} className="video_main_div">
                     <div className="video">

                      <iframe className="video_tag" src = {item.src} title="video"></iframe>
                      </div>
                      <div className="single_video_div">
                      <h4>{item.title}</h4>
                      <div className="icon_div">
                        {videoPresent?<span onClick={()=>dispatch({type:"remove_watch_later", payload:item?._id})}><WatchLaterIcon/></span>:<span onClick={()=>{dispatch({type:"watch_later_toggle", payload:item?._id})}}><WatchLaterOutlinedIcon/></span>}
                        
                        <span><PlaylistAddIcon/></span>
                        <span><EditNoteIcon/></span>
                      </div>
                      </div>
                    </div>
                    )
                })}
            </div>
            <div>
                <h3 style={{textAlign:"left"}}>My Notes</h3>
            </div>
        </div>
    )
}