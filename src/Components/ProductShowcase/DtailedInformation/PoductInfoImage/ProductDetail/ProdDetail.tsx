import Overview from "./Overview";
import Specification from "./Specification";
type ProdDetailProps = {
  activeTab: string;
};

const ProdDetail = ({ activeTab }: ProdDetailProps) => {
  return (
    <div className="h-[50vh]">
      <div className="p-4 bg-[#fafafa]">
        
        <div>
          {activeTab === "overview" && <Overview />}
          {activeTab === "specification" && <Specification />}
        </div>
        <div className="flex justify-center mt-4 ">
            <button className="border-1 border-green-400 hover:border-green-700 py-1 px-16">
              Load More
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProdDetail;

