import { createContext, useContext, useReducer } from "react";
import { categories } from "../backend/Category";
import {videos} from "../backend/Videos";
import { VideoReducer } from "../reducer/VideoReducer";
const VideoContext = createContext(null);
export const VideoProvider = ({children})=>{
    const initialState = {categories:[...categories], videoData: [...videos], categoryDetails:[], title:"", singleVideo:{}, watchLaterData:[]};
    const [state, dispatch] = useReducer(VideoReducer, initialState)
    return(
        <VideoContext.Provider value={{state, dispatch}}>
            {children}
        </VideoContext.Provider>
    )
}
export const useVideo =()=>useContext(VideoContext);