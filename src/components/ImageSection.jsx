import React from "react";
import { useState } from "react"

const ImageSection = ({ img = [{url : ""}] }) => {
//   console.log(img);
const [previewImg, setPreviewImg] = useState(img[0]);

  return (
    <main className="padding">
      <div>
        {/* Main Preview Image */}
        <div className="mb-4">
          <img
            src={previewImg.url}
            alt={previewImg.filename}
            className="w-full h-full"
          />
        </div>
        {/* Thumbnail Images */}
        <div className="grid grid-cols-4 gap-4">
          {img.map((curItem, index) => (
            <img
              src={curItem.url}
              alt={curItem.filename}
              key={index}
              className="w-full h-full cursor-pointer"
              onClick={() => setPreviewImg(curItem)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ImageSection;
