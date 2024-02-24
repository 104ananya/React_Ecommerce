import React from "react";

const ImageSection = ({ img = [{url : ""}] }) => {
  console.log(img);

  return (
    <main className="padding">
      <div>
        {/* Main Preview Image */}
        <div className="mb-4">
          <img
            src={img[0].url}
            alt={img[0].filename}
            className="w-full"
          />
        </div>
        {/* Thumbnail Images */}
        <div className="grid grid-cols-4 gap-4">
          {img.map((curItem, index) => (
            <img
              src={curItem.url}
              alt={curItem.filename}
              key={index}
              className="w-full h-full"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ImageSection;
