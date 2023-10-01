import React, { useEffect, useState } from 'react';


const TypewriterText = () => {
    //cool little typewriter effect
    const [text, setText] = useState('');
    const fullText =
        "Hii there! Want to experiment with a new stack but don't know where to start? I can help, please provide me with some information.";
    const speed = 50; // speed of typing in milliseconds

    useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length - 1) {
                setText((prevText) => prevText + fullText[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, []);

    return (
        <div
            
            className= "bg-gray-800 border border-gray-600 rounded-lg p-4 text-white text-sm leading-snug"
      style={{ maxWidth: '350px' }} 
    >
      <h3 className="w-80 text-center">{text}</h3>
    </div>
  );
};

export default TypewriterText;
