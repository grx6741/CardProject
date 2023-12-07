import React, { useState } from 'react';
import ReactFreezeframe from 'react-freezeframe';
import PropTypes from 'prop-types';
const MyFreezeCanvas= ({_image,_class}) => {
    const canvasRef = React.useRef(); 
    


    React.useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Replace 'your-gif-file.gif' with the path to your GIF file
        const gifImage = new Image();
        gifImage.src = _image; // Provide the path to your GIF file

        gifImage.onload = () => {
            // Draw the first frame on the canvas
            context.drawImage(gifImage, 0, 0, gifImage.width, gifImage.height);

            // You can add additional logic here as needed
        };
    },[]);

    return <canvas ref={canvasRef}/>;
};

export default MyFreezeCanvas;
