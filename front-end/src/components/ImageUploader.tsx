"use client";

import { useState } from "react";
import { uploadImage } from "../lib/cloudinary";
import "../styles/ImageUploader.css";

interface ImageUploaderProps {
  onUpload: (urls: string[]) => void;
  multiple?: boolean;
}

export default function ImageUploader({ onUpload, multiple = false }: ImageUploaderProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);

      if (!multiple) {
        // Se não permitir múltiplas, pega apenas a primeira
        const file = filesArray[0];
        setSelectedFiles([file]);
        setFileNames([file.name]);
      } else {
        const newFileNames = filesArray.map((file) => file.name);
        setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
        setFileNames((prevNames) => [...prevNames, ...newFileNames]);
      }
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return alert("Selecione uma ou mais imagens!");

    setUploading(true);
    try {
      const uploadedUrls = await Promise.all(selectedFiles.map((file) => uploadImage(file)));
      onUpload(uploadedUrls); // Envia as URLs para o componente pai

      // Limpar as imagens após o envio
      setSelectedFiles([]);
      setFileNames([]);
      alert("Imagens enviadas com sucesso!");
    } catch (error) {
      alert("Erro ao fazer upload das imagens");
    }
    setUploading(false);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setFileNames((prevNames) => prevNames.filter((_, i) => i !== index));
  };

  return (
    <div className="image-uploader">
      <label htmlFor="file-upload" className="file-label">
        
      </label>

      <input
        id="file-upload"
        type="file"
        multiple={multiple}
        onChange={handleFileChange}
        className="file-input"
      />

      <div className="file-preview-container">
        {fileNames.map((fileName, index) => (
          <div key={index} className="file-preview">
            <span>{fileName}</span>
            <button onClick={() => removeFile(index)} className="remove-btn">✕</button>
          </div>
        ))}
      </div>

      <button onClick={handleUpload} disabled={uploading} className="upload-btn">
        {uploading ? "Enviando..." : "Enviar Imagens"}
      </button>
    </div>
  );
}

