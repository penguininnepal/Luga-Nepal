interface GalleryProps {
  images: string[];
  selectedImage: string;
  setSelectedImage: (img: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className="flex space-x-3 overflow-x-auto hide-scrollbar">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Thumbnail ${index}`}
          onClick={() => setSelectedImage(img)}
          className={`h-[20vh] object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${
            selectedImage === img ? "border-blue-200 scale-105" : "border-transparent"
          }`}
        />
      ))}
    </div>
  );
};

export default Gallery;