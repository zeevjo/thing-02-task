import axios from "axios";
import React, { ChangeEvent, useState, useRef } from "react";
import { TbCloudUpload } from "react-icons/tb";
import "./csv-uploader.css";
import { useNavigate } from "react-router-dom";

const CsvUploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setIsUploading(true); // Indicate the upload process has started
      let formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post(
          "http://localhost:3000/upload",
          formData
        );
        console.log(response); // Handle success
        navigate("/table");
      } catch (err) {
        console.error("An error occurred during the upload:", err); // Handle error
      } finally {
        setIsUploading(false); // Reset upload status
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear the file input for future uploads
        }
      }
    }
  };

  // Clicking on the icon triggers the file input click event
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="CsvUploader" onClick={triggerFileInput}>
      <TbCloudUpload className="upload-icon" />

      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
    </div>
  );
};

export default CsvUploader;
