import { useEffect, useState } from "react";

const useOnline = () => {
    
    const [isOnline, setIsOnline]= useState(true); //its maintain its own state

    useEffect(()=>{
        const handleOnline = ()=>{
            setIsOnline(true);
        }
        const handleOffline = ()=>{
            setIsOnline(true);
        }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
        
        //unmounting
       return ()=>{
        window.removeEventListener("online", handleOnline); //always remove eventListener
        window.removeEventListener("offline", handleOffline);
       } 
    },[])
    return isOnline; //return true or false

}

export default useOnline;