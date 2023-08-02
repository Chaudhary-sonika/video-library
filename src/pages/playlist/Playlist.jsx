import "../playlist/Playlist.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";
import Popup from "reactjs-popup";
export const Playlist = ()=>{
    const [playlists, setPlaylists] = useState([{title:"", image:""}]);
    return(
        <div>
            <h2 style={{textAlign:"left"}}>Playlist</h2>
            <div className="play_div">

               <Popup trigger={<AddCircleOutlineIcon/>} position="bottom left">
                 <div className="popup_div">
                    <h4>Add to Playlist</h4>
                    <label>Playlist Title:<input placeholder="Title.." onChange={(e)=>setPlaylists}/></label>
                    <button>Create New Playlist</button>
                 </div>
               </Popup>
            </div>
        </div>
    )
}