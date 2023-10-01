import React, { useEffect, useState } from 'react';
import Image from 'next/image';


// animated sprite that bounces on the top of the page
const BouncingSprite = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // the bounce class initially
    const timeout = setTimeout(() => {
      setShouldAnimate(false); // removing the bounce class after a delay
    }, 1000); // adjusting the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={shouldAnimate ? imageStyles : { marginBottom: '4rem' }}>
      <Image
        src="/sprite.png"
        alt="Stack Print Logo"
        width={125}
        height={125}
      />
    </div>
  );
};


const imageStyles = {
    marginBottom: '8px', 
    animation: 'bounce 1s infinite',
  };


export default BouncingSprite;
