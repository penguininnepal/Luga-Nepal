import { useNavigate } from "react-router-dom";
import { exploreBannerData } from "@/data/bannerData";

const ExploreBanner = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full h-[60vh] overflow-hidden bg-gray-900 my-1">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${exploreBannerData.image}")` }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="absolute bottom-16 left-8 md:left-16 text-white max-w-xl">
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 leading-none whitespace-pre-line">
                    {exploreBannerData.title}
                </h2>
                <button
                    onClick={() => navigate(exploreBannerData.link)}
                    className="border-b-2 border-white pb-1 text-lg font-bold uppercase tracking-widest hover:text-gray-300 hover:border-gray-300 transition-colors"
                >
                    {exploreBannerData.cta}
                </button>
            </div>
        </section>
    );
};

export default ExploreBanner;
