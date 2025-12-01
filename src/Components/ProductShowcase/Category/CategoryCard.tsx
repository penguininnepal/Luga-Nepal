import { useNavigate } from "react-router-dom";

type CategoryCardProps = {
  image: string;
  title: string;
};



const CategoryCard: React.FC<CategoryCardProps> = ({ image, title }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xs shadow-md group cursor-pointer" onClick={() => navigate('/collections')}>
      {/* Image container */}
      <div className="relative w-74 h-74 overflow-hidden">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />

        {/* Title bar that slides up */}
        <div className="absolute bottom-0 w-full bg-black/10 text-center transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          <h1 className="text-lg font-semibold text-white p-2">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;