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
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=800',
            title: 'Beauty & Cosmetics',
        },
        {
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
            title: 'Shoes & Footwear',
        },
        {
            image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800',
            title: 'Accessories',
        },
        {
            image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800',
            title: 'Kids Fashion',
        },
        {
            image: 'https://images.unsplash.com/photo-1556228720-1910d93967d6?auto=format&fit=crop&q=80&w=800',
            title: 'Handbags',
        },
        {
            image: 'https://images.unsplash.com/photo-1509319117193-51043f65569c?auto=format&fit=crop&q=80&w=800',
            title: 'Watches',
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
