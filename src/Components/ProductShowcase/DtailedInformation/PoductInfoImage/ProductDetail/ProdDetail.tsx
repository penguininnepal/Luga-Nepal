import Overview from "./Overview";
import Specification from "./Specification";

const ProdDetail = () => {
  return (
    <div className="h-auto">
      <div className="py-4 px-6 bg-[#fafafa]">
        
        <div className="">
        <Overview />
        <Specification />
        </div>
        <div className="flex justify-center mt-4 ">
            <button className="border-1 border-green-400 hover:border-green-700 py-1 px-16 cursor-pointer">
              Load More
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProdDetail;

