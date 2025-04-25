"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const AdminFileInput = ({ name, onChange = () => null }) => {
  const imageRef = useRef();
  const [image, setImage] = useState(null);

  const imageUrl = image
    ? URL.createObjectURL(image)
    : "https://img.icons8.com/dusk/64/000000/file.png";

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
      <div className="md:flex">
        <div className="w-full p-3" onClick={() => imageRef.current.click()}>
          <Image
            alt="Product Image"
            width={150}
            height={150}
            className="mb-3"
            src={imageUrl}
          />
          {!image && (
            <>
              <span className="block text-gray-500 font-semibold">
                Drag &amp; drop your files here
              </span>
              <span className="block text-gray-400 font-normal mt-1">
                or click to upload
              </span>
            </>
          )}
          <input
            ref={imageRef}
            accept="image/*"
            name={name}
            onChange={(e) => {
              const image = e.target.files[0];
              setImage(image);

              if (onChange) {
                onChange();
              }
            }}
            className="h-full w-full opacity-0 cursor-pointer"
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminFileInput;
