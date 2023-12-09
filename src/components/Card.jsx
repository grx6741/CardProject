// Fix you tabs
// Put it to 4 spaces
// Its 4 spaces bro but when I copy paste I dont always fix indent
import { useState,useEffect } from "react";
import Content from "./Content";
import Icon from "./Icon";
import '../Fonts/css/fontello.css'
import Download from "./Download";
import ShareBar from "./ShareBar";



const randInt = (a, b) => {
    return Math.ceil(a + (b - a) * Math.random());
}

function handleShare(image,hovering,share,setSharing)
{
    if(share)
    {
        return <ShareBar link={image}/>;
    }
    else
    {
        return  <Icon
                    type={"SHARE"}
                    shareURL ={image} setSharing = {setSharing}
                    ActiveClass = {"icon-export"} InactiveClass = {"icon-export-outline"}
                    hovering={hovering}/>
    }
}


const Card = ({ image }) => {
    const [hovering, SetHovering] = useState(false);
    const [click,setClick] = useState(false);
    const [share,setSharing] = useState(false);


    //if not hovering set click to false
    useEffect(() => {
        if(!hovering)
        {
            setClick(false);
            setSharing(false);
        }
    },[hovering]);

    return (
        <div 
            className="max-w-2xl bg-gray-200 shadow-black shadow-xl border-4 border-white rounded-lg overflow-hidden hover:scale-105 transition-transform"
            onMouseEnter={() => SetHovering(true)}
            onMouseLeave={() => SetHovering(false)}
            onClick={() => setClick(true)}
        >
            {/* Uncomment for separate image in Card I am trying to do image as background  also check if GIFS work*/}     
            {/* ****                 
                For GIFs to play only on hover,
                Make Sure src have a .gif ending
                Done 
                Used React FreezeFrame
            */}
            <div className="relative">
                <Content src={image} hovering={hovering}/>
                <div className={`absolute right-0 bottom-0  ${hovering ? "bg-gradient-to-l from-gray-900 to-transparent" : ""}`} >

                    <Icon 
                    type={"LIKE"}
                    ActiveClass = {"icon-heart"} InactiveClass = {"icon-heart-empty"} 
                    hovering={hovering}/>
                    <br/>
                    <Icon 
                    type={"DOWNLOAD"}
                    downloadFileName={"Random-Image"} downloadFile ={image}
                    ActiveClass = {"icon-download"} InactiveClass = {"icon-download-outline"}
                    hovering={hovering}/>
                </div>
                <div className={`absolute left-0 bottom-0 ${hovering ? "bg-gradient-to-r from-gray-900 to-transparent" : ""}`} >
                    {handleShare(image,hovering,share,setSharing)}
                </div>
            </div>
            {/* <div className={`items-center justify-between p-2 bg-gray-100  ${hovering && !click ? "flex" : "hidden"}`}> */}
            <div className={`items-center justify-between p-2 bg-gray-100 flex`}>
                <p className="text-gray-500 text-sm">Posted on December 6, 2023</p>
            </div>
            {/* Popout the description on click */}
            {/* <div className={`p-4 ${click ? "block" : "hidden"}`}> */}
            <div className={`p-4 block`}>
                <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
                <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
                </p>
            </div>
        </div>
    );
};

export default Card;
