import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trendCategories } from "@/data/categoryData";

const TrendGrid = () => {
    const navigate = useNavigate();

    // Assuming guaranteed structure: [Large, Small1, Small2]
    const [largeItem, smallItem1, smallItem2] = trendCategories;

    return (
        <section className="bg-white py-1">
            <div className="w-full h-screen md:h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-1 p-1">

                {/* Large Item - Left */}
                <div
                    onClick={() => navigate(largeItem.link)}
                    className="relative group overflow-hidden cursor-pointer h-full"
                >
                    <img
                        src={largeItem.image}
                        alt={largeItem.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">{largeItem.title}</h3>
                        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline">
                            {largeItem.cta} <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Right Column - Split 2 Items */}
                <div className="grid grid-rows-2 gap-1 h-full">

                    {/* Top Right */}
                    <div
                        onClick={() => navigate(smallItem1.link)}
                        className="relative group overflow-hidden cursor-pointer h-full"
                    >
                        <img
                            src={smallItem1.image}
                            alt={smallItem1.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{smallItem1.title}</h3>
                            <p className="text-xs font-medium uppercase tracking-widest opacity-80">{smallItem1.subtitle}</p>
                        </div>
                    </div>

                    {/* Bottom Right */}
                    <div
                        onClick={() => navigate(smallItem2.link)}
                        className="relative group overflow-hidden cursor-pointer h-full"
                    >
                        <img
                            src={smallItem2.image}
                            alt={smallItem2.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{smallItem2.title}</h3>
                            <p className="text-xs font-medium uppercase tracking-widest opacity-80">{smallItem2.subtitle}</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TrendGrid;
