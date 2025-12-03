// src/Components/ProductShowcase/DtailedInformation/ProductInformation.tsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products , justforyouproducts } from "../../../data/products";
import ImageZoom from "./PoductInfoImage/imageZoom";
import Gallery from "./PoductInfoImage/gallery";
import ProductQuantity from "../../counter/ProductQuantity";
import { ChevronRight } from "lucide-react";
import Reviews from "./PoductInfoImage/Reviews/Reviews";
import ProdDetail from "./PoductInfoImage/ProductDetail/ProdDetail";
import AboutProdinfo from "./PoductInfoImage/Aboutprod/AboutProdinfo";

const ProductInformation = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

 const product =
    products.find((p) => p.id === Number(id)) ||
    justforyouproducts.find((p) => p.id === Number(id))

  const images = [
    "https://c92abd90.delivery.rocketcdn.me/main-files/uploads/2018/01/Top6Sales.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4EPc30toFda43IioDSNaZrF2NgmgHMr5JJg&s",
    "https://gt3themes.com/wp-content/uploads/2017/12/Best-Product-Mockups-to-Showcase-Your-Design-Works.jpg",
    "https://tint.creativemarket.com/nr21WAEsfk8wuoyuGYFUVzfq9VwXn_xrBG7YpNjsKbI/width:440/height:292/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUxMjYvNTEyNjEvNTEyNjE0NzYvY20tZW52YXRvLWNvdmVyLTAzLW8uanBnIzE3MjI0NjE2NzE",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!product) return <p>Product not found</p>;


  return (
    <div className="px-12 bg-[#f0f1f5]">
      <div className="flex mb-2 text-sm gap-1 items-center">
        <span className="flex">
          <button onClick={() => navigate("/")} className="text-blue-600 hover:underline">
            Category lev 1
          </button>
          <ChevronRight className="text-gray-600" />
        </span>
        <span className="flex">
          <button onClick={() => navigate("/")} className="text-blue-600 hover:underline">
            Category lev 2
          </button>
          <ChevronRight />
        </span>
        <p>{product.title}</p>
      </div>

      <div className="flex gap-4 items-start ">
        <section className="w-1/2 gap-2">
          <section className="h-[60vh] mb-1">
            <ImageZoom src={selectedImage} alt="Selected Product" />
          </section>

          <section className="bg-orange-100 h-[20vh]">
            <Gallery images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
          </section>
        </section>

        <section className="h-[80vh] w-1/2 p-5 bg-[#ffffff] ">
          <h1 className="text-3xl font-semibold mt-4 text-gray-500 mb-4">{product.title}</h1>
          <p className="text-red-500 font-bold text-3xl mb-2">Rs {product.price}</p>
          <p className="text-gray-400 text-sm">Delivery is charged</p>

          <section className="my-4">
            <div className="flex gap-4 items-center">
              <ProductQuantity />
              <button
                onClick={() => navigate("/addedtocart")}
                className="bg-red-600 rounded-md px-4 py-2 hover:bg-red-700">
                <p className="text-white font-bold">Add To Cart</p>
              </button>
            </div>
          </section>

          <section className="mt-4 text-sm flex flex-col space-y-4 h-[40vh]">
            <p>Description is Here</p>
            <p className="text-gray-500">Indulge in the rich taste of our Premium Chocolate Gift Box...</p>
          </section>
          <section>
            <div className="font-semibold space-y-2">
              <span className="text-sm flex gap-2 items-center">
                Category:
                <button className="bg-gray-100 rounded-full py-1 px-4 hover:bg-red-100 hover:text-red-700">Demo Product</button>
                <button className="bg-gray-100 rounded-full py-1 px-4 hover:bg-red-100 hover:text-red-700">Kitchen Product</button>
                <button className="bg-gray-100 rounded-full py-1 px-4 hover:bg-red-100 hover:text-red-700">Lifestyle</button>
              </span>
              <span className="text-sm flex gap-2 items-center">
                Brand:
                <p className="bg-gray-100 rounded-full py-1 px-4 hover:bg-red-100 hover:text-red-700">Unknown</p>
              </span>
            </div>
          </section>
        </section>
      </div>
      <div className="">
        <AboutProdinfo />
      </div>

      <div className="mt-6">
        <ProdDetail />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
};

export default ProductInformation;
