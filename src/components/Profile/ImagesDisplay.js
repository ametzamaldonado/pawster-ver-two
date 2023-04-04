import React from 'react'

function ImagesDisplay({ images }) {
    const elements = [];
    const totalImgCountNeeded = 6;

    for (let i = 0; i < totalImgCountNeeded; i++) {
        if (i < images.length) {
            elements.push(
                <div className='gallery-container' key={`div_${i}`}>
                    <img
                        src={images[i]}
                        className="gallery__img"
                        alt={`image_${i}`}
                        key={`image_${i}`}
                    />
                    <span className='top-left'>{i + 1}</span>
                </div>

            );
        } else {
            elements.push(
                <div className='gallery-container'>
                    <div className="gallery__img empty_img" key={`div_${i}`}>
                        <span className='top-left'>{i + 1}</span>
                    </div>
                </div>

            );
        }
    }

    return elements;
}

export default ImagesDisplay