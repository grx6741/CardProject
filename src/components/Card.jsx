// Fix you tabs
// Put it to 4 spaces
// Its 4 spaces bro but when I copy paste I dont always fix indent
import { useState,useEffect,useRef } from "react";
import ReactFreezeframe from 'react-freezeframe';
import MyFreezeCanvas from "./MyFreezeCanvas";

const Card = ({ image }) => {
    const [hovering, SetHovering] = useState(false);
    const [click,setClick] = useState(false);
    const [animatable,SetAnimatable] = useState(false); 
    const [imageLoaded,setImageLoaded] = useState(false);

    const format = image.split(".").pop();
    const withoutFormat = image.substring(0,image.length - format.length);
    
    //if not hovering set click to false
    useEffect(() => {
        if(hovering == false)
            setClick(false);  
    },[hovering]);

    const gifImage = new Image();
    
    //Check if ending with .gif then set it as animatable
    useEffect(() => {
        if (format == "gif")
        {   
            SetAnimatable(true);
            gifImage.src = image;
            console.log(gifImage);
            // gifImage.onload = () => {
            //     setImageLoaded(true);
            // }
        }
    }, [format]);

    // console.log(imageLoaded);
   
    return (
        <div 
            className="max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
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

            {animatable && !hovering?
                <MyFreezeCanvas _image={image} _class={`w-auto object-cover object-center  ${hovering ? "opacity-90 " : "opacity-100"}`}/>
            :
                <img
                    // Change opacity based on mouse hover
                    className={`w-auto object-cover object-center  ${hovering ? "opacity-90 " : "opacity-100"}`}
                    src={image}
                    // src="https://placekitten.com/400/200"
                    alt="Card"
                />
            }
            <div className={`items-center justify-between p-2 bg-gray-100  ${hovering && !click ? "flex" : "hidden"}`}>
                <p className="text-gray-500 text-sm">Posted on December 6, 2023</p>
            </div>
            {/* Popout the description on click */}
            <div className={`p-4 ${click ? "block" : "hidden"}`}>
                <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
                <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
                </p>
            </div>



        </div>
    );
};

export default Card;
