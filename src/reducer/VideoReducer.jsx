import { videos } from "../backend/Videos";
export const VideoReducer = (state, action)=>{
 switch(action.type){
    case "cat_detail":
        return {...state, categoryDetails:state?.videoData?.filter((item)=>item?.category.toLowerCase()===action.payload.toLowerCase()), title:action.payload}
    case "search_input":
        return {...state, videoData:[...videos]?.filter((item)=>item?.title.toLowerCase().includes(action.payload.toLowerCase()))}
    case "single_video":
        return {...state, singleVideo:[...videos]?.filter((item)=>item._id===action.payload)}  
    case "watch_later_toggle":
         const watchLaterData=[...videos].filter((item)=>item._id===action.payload)
        return localStorage.setItem("Watch", JSON.stringify(watchLaterData));  
    // case "remove_watch_later":
    //     return localStorage.removeItem()        
    default:
        return state    
}
}