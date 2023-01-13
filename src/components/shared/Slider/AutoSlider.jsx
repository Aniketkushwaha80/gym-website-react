import React from 'react';


import SimpleImageSlider from "react-simple-image-slider";
import useResizeObserver from "use-resize-observer";
import "./AutoSlider.css"
const AutoSlider = () => {

    const { ref, width = 1, height = 1 } = useResizeObserver();
const images = [
  
  { url: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80" },
  { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
  { url: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
  { url: "https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { url: "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

];
    
    return (
 

  <div ref={ref} className="card_imgBox"  >
        <SimpleImageSlider
          className="card_img"
          width={width}
          height={height}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.0}
        slideDuration={1}
         
        />
      </div>

    // width={"100%"}
    //     height={700}
    //     images={images}
    //     showBullets={true}
    //     showNavs={true}
    //     autoPlay={true}
    //     autoPlayDelay={2.0}
    //     slideDuration={1}
    );
};

export default AutoSlider;