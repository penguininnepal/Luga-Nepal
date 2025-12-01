type ProductCardChildProps = {
  image: string;
  title: string;
  price: number;
  rating: number;
  brand: string;
}

const ProductCardChild: React.FC<ProductCardChildProps> = ({image, title, price, rating, brand}) => {

  return (
    <div className="bg-gray-100 p-4 shadow-md ">
        <div className="">
            <img src={image} alt={title}
            className="h-38 w-full object-cover" />
        </div>
        <div className="">
            <h2>{title}</h2>
            <p>Price: Rs{price}</p>
            <p className="text-sm">Rating: {rating}</p>
            <p className="text-sm">Brand: <span className="font-semibold text-gray-700 bg-gray-200 px-4 rounded-full"> {brand}</span></p>
        </div>
      
    </div>
  )
}

export default ProductCardChild
