
// Card.js
import React from 'react';

const Card = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden" style={{backgroundImage : 'url("https://placekitten.com/1920/1080")'}}>
       {/* Uncomment for separate image in Card I am trying to do image as background  also check if GIFS work*/}     
      {/* <img */}
      {/*   className="w-full h-48 object-cover object-center" */}
      {/*   src="https://placekitten.com/400/200" */}
      {/*   alt="Card" */}
      {/* /> */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="mt-2 text-gray-600">
          This is a sample card component with React and Tailwind CSS.
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
