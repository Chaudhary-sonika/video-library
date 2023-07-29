import { NavLink, Outlet } from "react-router-dom"
import "./styles/sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
export const Sidebar = ()=>{
    return(
        <div className="sidebar-main-div">
            <div className="side-navigation">
               <NavLink className="nav-link" to="/"><HomeIcon/>Home</NavLink>
               <NavLink className="nav-link" to="/explore"><ExploreIcon/>Explore</NavLink>
               <NavLink className="nav-link" to="/playlist"><PlaylistAddIcon/>Playlists</NavLink>
               <NavLink className="nav-link" to="/watch"><WatchLaterIcon/> Watch Later</NavLink>
            </div>
            <div className="outlet-component">
                <Outlet/>
            </div>
        </div>
    )
}