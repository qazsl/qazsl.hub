import React from "react";
import './1.css';

import { useState } from "react";

function Bir_jest() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
        console.log('No file selected');
        return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
        const response = await fetch('http://localhost:3001/upload', {
            method: 'POST', // Измените порт на 3001
            body: formData
        });
        const data = await response.json();
        console.log('Image uploaded successfully:', data);
    } catch (error) {
        console.error('Error uploading image:', error);
    }
};

  return (
      <div className="App">
        <center>
        <label>s</label>
        <label>s</label>
        <label>s</label>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleSubmit}>Upload Image</button>
          </center>
      </div>
  );
}

export default Bir_jest;