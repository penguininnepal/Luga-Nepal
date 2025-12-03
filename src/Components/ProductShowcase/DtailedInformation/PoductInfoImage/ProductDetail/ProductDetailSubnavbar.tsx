type PDSubnavbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};
const PDSubnavbar = ({ activeTab, setActiveTab }: PDSubnavbarProps) => {
  const tabs = ["overview", "specification"];

  return (
    <div className="grid grid-cols-8 text-black font-semibold">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 flex items-center justify-start h-10 border border-gray-400 transition-colors
            ${activeTab === tab ? "bg-orange-500 text-white" : "hover:bg-orange-500"}
          `}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default PDSubnavbar;