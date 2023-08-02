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
         const watchLaterData=[...videos].filter((item)=>item._id===action.payload);
        //  console.log(watchLaterData, "so");
         const localDataFn =(key)=>{const data =localStorage.getItem(key);
         return data?JSON.parse(data):[]} 
           const existingData = localDataFn("Watch");
        //    console.log(existingData, "ab");
           const newData = [...existingData, ...watchLaterData];
           localStorage.setItem("Watch", JSON.stringify(newData));
           return {...state, watchLaterData:newData}
           
         
          
    case "remove_watch_later":
        const localDataFnc =(key)=>{const data =localStorage.getItem(key);
            return data?JSON.parse(data):[]}
        const existingDatas = localDataFnc("Watch");
        console.log(action.payload, "remove");
            const removeData = existingDatas?.filter((data)=>data._id!==action.payload);
             localStorage.setItem("Watch", JSON.stringify(removeData)); 
             return {...state, watchLaterData:removeData}
         
               
    default:
        return state    
}
}