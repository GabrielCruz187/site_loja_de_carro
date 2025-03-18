// lib/cloudinary.ts
import axios from "axios";

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "lojadecarros"); // Use o upload_preset do seu Cloudinary

  const cloudName = "dwkaum3rp"; // Substitua pelo seu Cloud Name
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const response = await axios.post(url, formData);
  return response.data.secure_url; // Retorna a URL da imagem
};
