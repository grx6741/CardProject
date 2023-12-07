import { useEffect, useState } from "react";

const Icon = ({ActiveClass,InactiveClass,refreshable = false}) => {
    
    const [clicked,setClicked] = useState(false);
    const [hover,setHover] = useState(false);


    if(refreshable && clicked === true) 
    {
        setClicked(false);
    }


    return (
        <i onMouseEnter={()=>setHover(true)} onMouseLeave = {()=>setHover(clicked)} onClick={() => setClicked(true)} className={`${!hover? InactiveClass : ActiveClass}`}></i>
    );

}
export default Icon;

