import { useNavigate } from "react-router-dom";
import { specialEditions } from "@/data/specialEditionData";
import { ArrowUpRight } from "lucide-react";

const SpecialEdition = () => {
    const navigate = useNavigate();

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-black uppercase tracking-widest">Special Editions</h2>
                    <div className="w-12 h-1 bg-black mx-auto mt-4"></div>
                </div>

                {/* 2x2 Grid - Aspect Ratio [3/4] to match Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specialEditions.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => navigate(item.link)}
                            className="group relative cursor-pointer aspect-[3/4] overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                            {/* Bottom Left Text */}
                            <div className="absolute bottom-8 left-8 text-white max-w-xs">
                                <h3 className="text-3xl font-semibold uppercase tracking-tight mb-2 leading-none">{item.title}</h3>
                                <p className="text-sm font-medium uppercase tracking-widest mb-4 opacity-90">{item.subtitle}</p>
                                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline">
                                    Shop Now <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialEdition;
