import CategoryCard from "./CategoryCard"

function Category() {
    const sales  = [
        {
            image: 'https://gardenerspath.com/wp-content/uploads/2015/01/How-to-Read-Seed-Packages.jpg',
            title: 'Agriculture',

        },
        {
            image: 'https://dropletlab.com/wp-content/uploads/2024/06/food-and-beverages-scaled.jpg',
            title: 'Food & Beverages',

        },
        {
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/TY/LZ/SZ/93007892/handicraft-jpg.jpg',
            title: 'Handicrafts',

        },
        {
            image: 'https://5.imimg.com/data5/SELLER/Default/2021/9/JT/XW/BL/137556958/commecial-furniture.jpg',
            title: 'Home & Living',

        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNlDOTYvjZ54PopezIQNoEVebs7Tyt90da7HmnNftdhhcfeg6liJiFnswOOmLO6GiuXs&usqp=CAU',
            title: 'Electronics',

        },
        {
            image: 'https://modaknits.com/wp-content/uploads/2023/09/ericwen_340_Generate_an_image_showcasing_a_diverse_range_of_clo_df863cd2-7654-48ab-bc80-0c7a279038bb_%E5%89%AF%E6%9C%AC.png',
            title: 'Fashion',

        },
        {
            image: 'https://www.heinens.com/content/uploads/2022/08/Heinens-Health-And-Beauty-products-800x550-1.jpg',
            title: 'Health & Beauty',

        },
        {
            image: 'https://tiimg.tistatic.com/fp/1/009/016/soft-toys-for-babies-976.jpg',
            title: 'Babies & Toys',

        },

        
    ];
        
  return (
    <section className="px-24">
    <div className="mx-w-7xl mx-auto">
        <div className="uppercase font-semibold py-2 mb-3 bg-white border-b-2 border-gray-700 text-2xl ">
            Category
        </div>
        <div className="flex gap-6 sm:grid-col-1 lg:grid-col-4 md:grid-col-2 xl:grid-cols-4 2xl:grid-cols-5 flex-wrap items-center justify-center ">
            {
                sales.map((sale, index) =>
                (
                    <CategoryCard 
                    key = {index}
                    image = {sale.image}
                    title = {sale.title}
                    
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
