import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import axiosInstance from '@/utility/token.interceptor.utility';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<{ id: string, image: string }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const fetchImages = async () => {
    const res = await axiosInstance.get('http://localhost:3000/image');
    setTimeline(res.data.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleError = async () => {
    await axiosInstance.get('http://localhost:3000/image/error')
  }

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('file', image);

    try {
      const res = await axiosInstance.post('http://localhost:3000/image', formData);
      alert(`Uploaded: ${res.data.message}`);
      setImage(null);
      setPreview(null);
      fetchImages(); // Refresh timeline after upload
    } catch (err) {
      alert('Upload failed');
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Image Uploader</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                   file:rounded file:border-0 file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      {preview && (
        <div className="flex items-center space-x-4">
          <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded border" />
          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Upload
          </button>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-medium text-gray-700 mb-4">Uploaded Images</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            timeline.map((img) => (
              <>
              <img
                key={img.id}
                src={`http://localhost:3000/uploads/${img.image}`}
                alt="uploaded"
                className="w-full h-40 object-cover rounded shadow-sm hover:scale-105 transition"
              />
              <Button>
                <a href={`http://localhost:3000/image/${img.image}`} download={img.image}>Download</a>
              </Button>
              <Button onClick={handleError}>
                Error
              </Button>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;

// const handleDownload = async (imageName: string) => {
//   await axios.get(`http://localhost:3000/image/${imageName}`)
// }