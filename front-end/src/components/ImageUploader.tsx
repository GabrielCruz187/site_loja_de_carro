"use client";

import { useState } from "react";
import { uploadImage } from "../lib/cloudinary";
import "../styles/ImageUploader.css"; // Importando o CSS

interface ImageUploaderProps {
  onUpload: (urls: string[]) => void;
  multiple?: boolean;
}

export default function ImageUploader({ onUpload, multiple = false }: ImageUploaderProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return alert("Selecione uma ou mais imagens!");

    setUploading(true);
    try {
      const uploadedUrls = await Promise.all(selectedFiles.map(file => uploadImage(file)));
      onUpload(uploadedUrls);
      setSelectedFiles([]); // Limpa os arquivos após o upload
      alert("Imagens enviadas com sucesso!");
    } catch (error) {
      alert("Erro ao fazer upload das imagens");
    }
    setUploading(false);
  };

  const removeImage = (index: number) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="image-uploader">
    {/* Label estilizado para agir como botão */}
    <label htmlFor="file-upload" className="file-label">
      
    </label>
    
    {/* Input real, mas oculto */}
    <input
      id="file-upload"
      type="file"
      multiple={multiple}
      onChange={handleFileChange}
      className="file-input"
    />
  
  
      
      <div className="image-preview-container">
        {selectedFiles.map((file, index) => (
          <div key={index} className="image-preview">
            <img src={URL.createObjectURL(file)} alt="Pré-visualização" className="preview-img" />
            <button onClick={() => removeImage(index)} className="remove-btn">✕</button>
          </div>
        ))}
      </div>

      <button onClick={handleUpload} disabled={uploading} className="upload-btn">
        {uploading ? "Enviando..." : "Enviar Imagens"}
      </button>
    </div>
  );
}


