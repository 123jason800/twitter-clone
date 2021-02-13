import React,{useState, useEffect} from 'react';
import {images} from './images';
import './background.container.scss';

function BackgroundContainer(props) {
    const [currentImageIndex,setCurrentImageIndex] = useState(0);
    const [currentImage,setCurrentImage] = useState({...images[0]});
   

    function changeImage() {
        if (currentImageIndex === images.length - 1){
            setCurrentImageIndex(0);
        }
        else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    useEffect(() => {
        setCurrentImage({
           imageUrl: images[currentImageIndex].imageUrl,
           alt: images[currentImageIndex].alt
        });
        const timer = setInterval(() => {
            changeImage();
        }, 10000);
        return () => clearInterval(timer); 
    },[images,currentImageIndex]);


    const {imageUrl,alt} = currentImage;


    return (
        <div className="bg-image" style={{backgroundImage: `url(${imageUrl})` }}  >
            <div className="abs-text">
                {alt}
            </div>
            {props.children}
        </div>
    );
  
}

export default BackgroundContainer;
