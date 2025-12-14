import CategoryCard from "./CategoryCard"

function Category() {
    const sales = [
        {
            image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=800',
            title: "Women's Fashion",
        },
        {
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=800',
            title: "Men's Fashion",
        },
        {
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
            title: 'Shoes & Footwear',
        },
    ];

    return (
        <section className="px-24">
            <div className="mx-w-7xl mx-auto">
                <div className="uppercase font-medium tracking-widest py-4 mb-6 text-xl text-center border-b border-gray-100 text-black">
                    Shop by Category
                </div>
                <div className="flex gap-6 sm:grid-col-1 lg:grid-col-4 md:grid-col-2 xl:grid-cols-4 2xl:grid-cols-5 flex-wrap items-center justify-center ">
                    {
                        sales.map((sale, index) =>
                        (
                            <CategoryCard
                                key={index}
                                image={sale.image}
                                title={sale.title}

                            />
                        )
                        )
                    }
                </div>

            </div>
        </section>
    )
}

export default Category
