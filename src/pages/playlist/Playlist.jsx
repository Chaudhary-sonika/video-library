import "../playlist/Playlist.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";
import Popup from "reactjs-popup";
export const Playlist = ()=>{
    const [playlists, setPlaylists] = useState({title:"", image:""});
    return(
        <div>
            <h2 style={{textAlign:"left"}}>Playlist</h2>
            <div className="play_div">
                {playlists.title?<div>
            <img className="play_image" src={playlists?.image} alt={playlists?.image}/>
            <h4>{playlists?.title}</h4>
            </div>:<><h3>No Playlist added!</h3></>}
            
               <Popup trigger={<AddCircleOutlineIcon/>} position="bottom left">
                 <div className="popup_div">
                    <h4>Add to Playlist</h4>
                    <label>Playlist Title:<input placeholder="Title.." onChange={(e)=>setPlaylists({...playlists, title:e.target.value})}/></label>
                    <label>Add Image:<input type="file" accept="/image*" onChange={(e)=>setPlaylists({...playlists, image:URL.createObjectURL(e.target.files[0]),})}/></label>
                    <input className="save_Btn_input" value="Create New Playlist" type="submit"/>
                    
                 </div>
               </Popup>
              
                
              
            </div>
        </div>
    )
}