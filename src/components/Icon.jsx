import { useState } from "react";
import Download from "./Download";

const Icon = ({ type, shareURL, setSharing, downloadFileName, downloadFile, hovering, ActiveClass, InactiveClass, refreshable = false }) => {
    
    const handleClick = () =>{
        switch(type)
        {
            case "LIKE":
                setClicked((prev) => !prev)
                break;
            case "DOWNLOAD":
                Download(downloadFileName,downloadFile);
                break;
            case "SHARE":
                setSharing(true);
                navigator.clipboard.writeText(window.location.href);
                break;
        }
    };

    const [clicked,setClicked] = useState(false);
    const [hover,setHover] = useState(false);

    return (
        <i 
            onMouseEnter={()=>setHover(true)} 
            onMouseLeave = {()=>setHover(clicked)} 
            onClick={handleClick} 
            className={`text-white transition-all ${hovering ? "opacity-100" : "opacity-0" } ${!hover? InactiveClass : ActiveClass}`}>
        </i>
    );

}
export default Icon;

