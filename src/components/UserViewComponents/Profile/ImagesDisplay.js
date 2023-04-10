import React from "react";

function ImagesDisplay({ images, handleSubmitPhotos, removePhotoFromUser}) {
  const elements = [];
  const totalImgCountNeeded = 6;

  for (let i = 0; i < totalImgCountNeeded; i++) {
    if (images[i]) {
      elements.push(
        <div className="gallery-container" key={`div_${i}`}>
          <img
            src={images[i]}
            className="gallery__img"
            alt={`userImage-${i}`}
            key={i}
          />
          <span className="top-left">{i + 1}</span>

          {/* Remove photo button */}
          <button className="no_buttonStyling bottom-right" onClick={() => removePhotoFromUser(images[i])}>
              <i class="bi bi-x-circle"></i>
            </button>

        </div>
      );
    } else {
      elements.push(
        <div className="gallery-container">
          <div className="gallery__img empty_img" key={`div_${i}`}>
            <span className="top-left">{i + 1}</span>

            {/* Add photo button */}
            <button className="no_buttonStyling bottom-right" >
              <input
                required
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                onInput={(e) => handleSubmitPhotos(e.target.files[0])}
              />
              <label htmlFor="file">
                <i class="bi bi-plus-square"></i>
              </label>
            </button>
          </div>
        </div>
      );
    }
  }

  return elements;
}

export default ImagesDisplay;
