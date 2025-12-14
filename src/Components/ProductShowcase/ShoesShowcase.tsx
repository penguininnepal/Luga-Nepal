
import { useNavigate } from "react-router-dom";
import { justforyouproducts } from "@/data/products";
import JustForYouCard from "./ProductCards/JustForYouCard";

const ShoesShowcase = () => {
    const navigate = useNavigate();
    const shoes = justforyouproducts.filter(p => p.category === "Shoes").slice(0, 4);

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-black uppercase tracking-widest">Premium Footwear</h2>
                    <div className="w-12 h-1 bg-black mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {shoes.map((product) => (
                        <JustForYouCard
                            key={product.id}
                            {...product}
                            onClick={() => navigate(`/productinformation/${product.id}`)}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => navigate('/collections')} className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                        View All Shoes
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShoesShowcase;
