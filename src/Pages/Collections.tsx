import ByBrands from "@/Components/Filter/ByBrands"
import FilteredCollections from "@/Components/CollectionsCompon/FilteredCollections"

const Collections = () => {
  return (
    <div>
        <section className="flex items-center justify-center"> 
            <h1 className="text-3xl font-semibold mb-4">Collections Page</h1>  
        </section>
        <section className="flex flex-col gap-4">
            <section>
            <FilteredCollections />
            </section>
            <section>
            <ByBrands />
            </section>
            
        </section>
      
    </div>
  )
}

export default Collections
