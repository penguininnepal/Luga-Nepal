import { CircleAlert } from "lucide-react"

const Overview = () => {
  return (
    <div className="mb-4">
      <div>
        <div className="mb-4" >
          <h1 className="text-xl font-semibold">Overview of this Product Title</h1>
        </div>
        <div className="border-1 p-2 opacity-40 flex gap-2">
          <div className="text-blue-700">
            <CircleAlert  />
          </div>
          
          <p className="">The image provided here is only for reference purpose. Actual product packaging and materials may contain more and different information than what is shown on our app or website. We recommend that you do not rely solely on the information presented here and that you always read labels, warnings, and directions before using or consuming a product.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Overview
