import { MessagesSquare } from 'lucide-react';

const Soldby = () => {
  return (
    <div className="w-110 h-50 bg-gray-100">
      <div className="pt-2 px-4 text-gray-700">
        <div className="grid grid-cols-2 items-center">
            <div >
            <h1 className="font-semibold ">Sold by</h1>
            <p className="text-black text-xl font-semibold cursor-pointer">Unknown Seller</p>
            </div>
            <div className='flex justify-end'>
            <button className="flex border-1 px-4 py-1 bg-green-100 hover:bg-green-300 rounded-md gap-1 cursor-pointer text-blue-500 font-semibold"><MessagesSquare className='text-blue-500' />Chat</button>
            </div>
        </div>
        
      </div>
      <div className='border-1 border-gray-300 mt-1'></div>
      <div className='grid grid-cols-3 bg-gray-100 h-22 cursor-pointer'>
            <div className=' hover:bg-gray-200 px-4 flex flex-col justify-between'>
                <h1>Seller Rating</h1>
                <p className='text-start mt-2 text-4xl'>
                    92%
                </p>
            </div>
            <div className='border-r-2 border-l-2 px-4 border-gray-300 hover:bg-gray-200 flex flex-col justify-between'>
                <h1>Delivery Time</h1>
                <p className='text-start mt-2 text-4xl'>3<span className='text-lg ms-1'>days</span></p>
            </div>
            <div className='px-4 hover:bg-gray-200 flex flex-col justify-between'>
                <h1>Response TIme</h1>
                <p className='text-start text-3xl text-gray-600 mt-2'>Good</p>
            </div>
        </div>
        <div className='flex justify-center mt-2 mb-2'>
            <button className='text-blue-500 font-semibold px-4 py-1 cursor-pointer hover:underline'>Go to Store</button>
        </div>
    </div>
  )
}

export default Soldby
