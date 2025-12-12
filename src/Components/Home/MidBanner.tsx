import { useNavigate } from "react-router-dom";
import { midBannerData } from "@/data/bannerData";

const MidBanner = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full h-[70vh] overflow-hidden bg-gray-900 group">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${midBannerData.image}")` }}
            >
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                    {midBannerData.title}
                </h2>
                <p className="text-lg md:text-xl font-light mb-8 max-w-lg">
                    {midBannerData.description}
                </p>
                <button
                    onClick={() => navigate(midBannerData.link)}
                    className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                >
                    {midBannerData.cta}
                </button>
            </div>
        </section>
    );
};

export default MidBanner;
