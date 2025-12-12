import { siteFeatures } from "@/data/featuresData";

const FeaturesSection = () => {
    return (
        <section className="bg-white py-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                {siteFeatures.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                        <feature.icon strokeWidth={1} size={32} className="mb-4 text-black" />
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-1">{feature.title}</h3>
                        <p className="text-xs text-gray-500 font-light">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
