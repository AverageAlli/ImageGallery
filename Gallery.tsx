"use client";
import React, { useState } from 'react';


const Gallery = ({ images }: { images: string[] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <button onClick={prevImage}>Previous</button>
            <img src={images[currentImageIndex]} alt="Gallery" style={{ width: '50%', height: 'auto' }}/>
            <button onClick={nextImage}>Next</button>
        </div>
    );
};

export default Gallery;