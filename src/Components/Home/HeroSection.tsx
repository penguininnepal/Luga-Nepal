
function HeroSection () {
  return (
    <section className='h-[45vh] bg-gradient-to-r bg from-orange-200 to-blue-100 flex justify-center items-center'>
        <div className='text-center px-6 max-w-3xl'>
          <h1 className="text-5xl text-white md:text-6xl font-extrabold uppercase tracking-wide mb-6">
          Fresh From Farmers To You
        </h1> 
        <p className="text-lg md:text-xl font-light mb-8">
          Discover organic produce, handmade goods, and local treasures — all in one marketplace.
        </p>
         <div className="flex justify-center space-x-6">
          <button className="group bg-orange-300 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-400 transition-colors">
           <span className='group-hover:text-green-900'>Shop Now</span>
          </button>
          <button className="group px-6 py-3 rounded-lg bg-green-300  text-white shadow-md font-semibold hover:bg-green-400 transition-colors">
            <span className='group-hover:text-green-900'>Go Green</span>
            </button>
        </div>

        </div>
    </section>
  )
}

export default HeroSection;
