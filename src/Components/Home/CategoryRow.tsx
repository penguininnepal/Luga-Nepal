import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CategoryRow = () => {
    const navigate = useNavigate();
    const categories = [
        { name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600" },
        { name: "Men", image: "https://i.pinimg.com/736x/5c/a0/3e/5ca03ee2efb4a38ca3c78532bc603624.jpg" },
        { name: "Shoes", image: "https://i.pinimg.com/736x/f6/a7/65/f6a76526b4024ad78c938021ab857ab9.jpg" },
    ];

    return (
        <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            onClick={() => navigate('/collections')}
                            className="group relative cursor-pointer aspect-[3/4] overflow-hidden"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay: Only visible on hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-4">
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4 drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {cat.name}
                                </h3>
                                <button className="border border-white text-white px-6 py-2 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-colors flex items-center gap-2 translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                                    Shop Now <ArrowUpRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryRow;
