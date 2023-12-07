import { useEffect, useState } from "react";

const Icon = ({hovering, ActiveClass,InactiveClass,refreshable = false}) => {
    
    const [clicked,setClicked] = useState(false);
    const [hover,setHover] = useState(false);


    if(refreshable && clicked === true) 
    {
        setClicked(false);
    }


    return (
        <i 
            onMouseEnter={()=>setHover(true)} 
            onMouseLeave = {()=>setHover(clicked)} 
            onClick={() => setClicked((prev) => !prev)} 
            className={`text-white transition-all ${hovering ? "opacity-100" : "opacity-0" } ${!hover? InactiveClass : ActiveClass}`}>
        </i>
    );

}
export default Icon;

