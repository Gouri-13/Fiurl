import React, { useState } from 'react';
import "./prefr.css";
import { Link } from "react-router-dom";
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const image = event.target.files[0];
    if (image.size < 2000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      alert('Image size more than 2MB');
    }
  };

  const handleSelectImage = () => {
    inputFileRef.current.click();
  };

  const inputFileRef = React.createRef();

  return (
    <div className="w-full h-screen flex items-center justify-center border overflow-hidden ">
       
      <div className="w-full md:w-[50%] lgl:w-[500px] h-full flex flex-col ">
        
          <form className="w-full lgl:w-[500px] h-screen flex pt-10">
            <div className="px-6 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont  decoration-[1px] font-semibold text-2xl mdl:text-3xl ">
                Click Selfie
              
              </h1>  
              <p className="mb-2">Please click and upload your selfie</p>
              <p className="mb-2">How to click Selfie</p>
              <ul style={{listStyle:  "outside"}}>
                <li>Your face should be clear and visible</li>
                <li>Should have plain while background</li>
                <li>No side face and should be straight facing the camera</li>
                <li>Switch off battery saver mode.</li>
              </ul>
    <div className='boddoc flex flex-col gap-3 border p-4'>
    <div className='docus '>
    <div className="doc">
      <input
        type="file"
        id="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
        ref={inputFileRef}
      />
      <div className={`img-area ${selectedImage ? 'active' : ''}`} data-img={selectedImage ? 'selected' : ''}>
        {selectedImage ? (
          <img src={selectedImage} alt="Uploaded" />
        ) : (
          <>
            <i className="bx bxs-cloud-upload icon"></i>
            <h3>Upload Documents</h3>
            <p>Image size must be less than <span>2MB</span></p>
          </>
        )}
      </div>
      <button className="w-full text-white text-base font-medium h-10 rounded-md bg-black mt-10"  onClick={handleSelectImage}>
        Select Image
      </button>
      <Link to="/KYCProof"><button
                 
                 className="w-full text-white text-base font-medium h-10 rounded-md bg-black mt-10" >
                PROCEED
               </button></Link> 
    </div>
    </div>
    </div></div>
    </form>
        
        </div>
      </div>
  );
};

export default ImageUploader;