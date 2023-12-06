// Fix you tabs
// Put it to 4 spaces

import { useState } from "react";

const Card = ({ image }) => {

    const [hovering, SetHovering] = useState(false);

    return (
        <div 
            className="max-w-2xl bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform"
            onMouseEnter={() => SetHovering(true)}
            onMouseLeave={() => SetHovering(false)}
        >
            {/* Uncomment for separate image in Card I am trying to do image as background  also check if GIFS work*/}     
            {/* **** Do it yourself 
                For GIFs to play only on hover, we need a copy of the gif thats not playing and swap the src tag when hovered
            */}
            <img
                // Change opacity based on mouse hover
                className={`w-auto object-cover object-center ${hovering ? "opacity-90" : "opacity-100"}`}
                src={image}
                // src="https://placekitten.com/400/200"
                alt="Card"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
                <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
                </p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-100">
                <p className="text-gray-500">Posted on December 6, 2023</p>
                <a href="#" className="text-blue-500 hover:underline">
                    Read more
                </a>
            </div>
        </div>
    );
};

export default Card;
