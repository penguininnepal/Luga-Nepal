export type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
  color: string;
  badge?: string;
  stockStatus?: string;
};

export const products: Product[] = [
  {
    id: 101,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800",
    title: "Velvet Evening Gown",
    price: "4500",
    color: "Black",
    badge: "New Arrival",
    stockStatus: "In Stock & Ready to Ship",
  },
  {
    id: 102,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800",
    title: "Men's Classic Suit",
    price: "8500",
    color: "Navy",
    badge: "Trending",
    stockStatus: "Limited Stock",
  },
  {
    id: 103,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
    title: "Luxury Watch",
    price: "12000",
    color: "Gold",
    badge: "Best Seller",
    stockStatus: "In Stock",
  },
  {
    id: 104,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    title: "Leather Running Shoes",
    price: "3500",
    color: "Brown",
    badge: "New",
    stockStatus: "In Stock & Ready to Ship",
  },
  {
    id: 105,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
    title: "Designer Handbag",
    price: "5500",
    color: "Beige",
    stockStatus: "In Stock",
  },
  {
    id: 106,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    title: "Fashion Sunglasses",
    price: "1500",
    color: "Black",
    badge: "Hot Deal",
    stockStatus: "In Stock",
  },
];

export type JustforyouProduct = {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: string;
  badge?: string;
  stockStatus?: string;
  category: "Women" | "Men" | "Kids" | "Shoes";
};

export const justforyouproducts: JustforyouProduct[] = [
  // ==========================================
  // WOMEN'S FASHION
  // ==========================================
  { id: 1, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80", title: "Summer Floral Dress", price: "2500", rating: "4.8", badge: "Summer Sale", stockStatus: "In Stock", category: "Women" },
  { id: 2, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80", title: "Denim Jacket", price: "3200", rating: "4.7", stockStatus: "In Stock", category: "Women" },
  { id: 3, image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80", title: "Silk Saree", price: "6500", rating: "4.9", badge: "Premium", stockStatus: "Low Stock", category: "Women" },
  { id: 4, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80", title: "Casual White Tee", price: "950", rating: "4.5", stockStatus: "In Stock & Ready to Ship", category: "Women" },
  { id: 5, image: "https://images.unsplash.com/photo-1534030617326-7f415951680d?w=800&q=80", title: "High-Waist Jeans", price: "2800", rating: "4.6", category: "Women" },
  { id: 6, image: "https://images.unsplash.com/photo-1589465885857-44edb59ef526?w=800&q=80", title: "Cotton Kurthi", price: "1500", rating: "4.7", category: "Women" },
  { id: 7, image: "https://images.unsplash.com/photo-1595956553066-fe2438fa44a5?w=800&q=80", title: "Athletic Leggings", price: "1200", rating: "4.8", badge: "Best Seller", category: "Women" },
  { id: 8, image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?w=800&q=80", title: "Bridal Lehenga", price: "15000", rating: "4.9", badge: "Exclusive", category: "Women" },
  { id: 9, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80", title: "Woolen Cardigan", price: "2200", rating: "4.6", category: "Women" },
  { id: 10, image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=800&q=80", title: "Boho Maxi Skirt", price: "1800", rating: "4.5", category: "Women" },
  // Accessories (Women's)
  { id: 21, image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80", title: "Silk Scarf Patterned", price: "1800", rating: "4.8", category: "Women" },
  { id: 23, image: "https://images.unsplash.com/photo-1542219551-9c595000da81?w=800&q=80", title: "Pendant Necklace", price: "850", rating: "4.7", category: "Women" },
  { id: 24, image: "https://images.unsplash.com/photo-1589125132338-3482d8c39175?w=800&q=80", title: "Canvas Tote Bag", price: "1500", rating: "4.6", category: "Women" },
  { id: 26, image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=80", title: "Chic Sunglasses", price: "1100", rating: "4.9", category: "Women" },
  { id: 29, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80", title: "Floral Headband", price: "500", rating: "4.8", category: "Women" },
  { id: 30, image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80", title: "Silver Bracelet", price: "800", rating: "4.6", category: "Women" },
  { id: 41, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80", title: "Leather Tote Bag", price: "4500", rating: "4.8", category: "Women" },
  { id: 44, image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&q=80", title: "Silk Scarf", price: "850", rating: "4.8", category: "Women" },
  { id: 47, image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80", title: "Silver Necklace", price: "1800", rating: "4.8", category: "Women" },
  { id: 48, image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=800&q=80", title: "Gold Hoop Earrings", price: "1200", rating: "4.7", category: "Women" },
  { id: 50, image: "https://images.unsplash.com/photo-1628147673752-16c87995dc7c?w=800&q=80", title: "Hair Accessories", price: "300", rating: "4.5", category: "Women" },

  // ==========================================
  // MEN'S FASHION
  // ==========================================
  { id: 11, image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80", title: "Men's Linen Shirt", price: "2100", rating: "4.7", badge: "New", category: "Men" },
  { id: 12, image: "https://images.unsplash.com/photo-1593030761757-71bd90dbe78e?w=800&q=80", title: "Slim Fit Chinos", price: "2500", rating: "4.6", category: "Men" },
  { id: 13, image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=80", title: "Leather Biker Jacket", price: "8000", rating: "4.9", badge: "Top Rated", category: "Men" },
  { id: 14, image: "https://images.unsplash.com/photo-1594938298603-c8148c47e356?w=800&q=80", title: "Classic Polo T-Shirt", price: "1200", rating: "4.5", category: "Men" },
  { id: 15, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&q=80", title: "Bomber Jacket", price: "3500", rating: "4.7", category: "Men" },
  { id: 16, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80", title: "Graphic Tee", price: "900", rating: "4.4", category: "Men" },
  { id: 17, image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800&q=80", title: "Formal Trousers", price: "2400", rating: "4.6", category: "Men" },
  { id: 18, image: "https://images.unsplash.com/photo-1616248249518-86f9e299386d?w=800&q=80", title: "Hooded Sweatshirt", price: "1800", rating: "4.8", category: "Men" },
  { id: 19, image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80", title: "Casual Shorts", price: "1100", rating: "4.5", category: "Men" },
  { id: 20, image: "https://images.unsplash.com/photo-1507680436348-527797e426dd?w=800&q=80", title: "Blazer Coat", price: "4500", rating: "4.8", category: "Men" },
  // Accessories (Men's)
  { id: 22, image: "https://images.unsplash.com/photo-1614174124247-bd77d67eb9c7?w=800&q=80", title: "Classic Fedora Hat", price: "2200", rating: "4.9", category: "Men" },
  { id: 25, image: "https://images.unsplash.com/photo-1600091474842-839527ec6a4f?w=800&q=80", title: "Leather Wallet", price: "950", rating: "4.8", category: "Men" },
  { id: 27, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80", title: "Travel Backpack", price: "2750", rating: "4.7", category: "Men" },
  { id: 28, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80", title: "Men's Tie Set", price: "600", rating: "4.5", category: "Men" },
  { id: 42, image: "https://images.unsplash.com/photo-1509319117193-51043f65569c?w=800&q=80", title: "Classic Wristwatch", price: "2500", rating: "4.7", category: "Men" },
  { id: 43, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80", title: "Sunglasses", price: "1200", rating: "4.6", category: "Men" },
  { id: 45, image: "https://images.unsplash.com/photo-1601065969566-ae224b533519?w=800&q=80", title: "Leather Belt", price: "1500", rating: "4.7", category: "Men" },
  { id: 46, image: "https://images.unsplash.com/photo-1534349762913-961f749141b0?w=800&q=80", title: "Knit Beanie", price: "450", rating: "4.6", category: "Men" },
  { id: 49, image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&q=80", title: "Canvas Backpack", price: "2200", rating: "4.8", category: "Men" },

  // ==========================================
  // KIDS FASHION
  // ==========================================
  { id: 51, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80", title: "Baby Romper", price: "850", rating: "4.9", category: "Kids" },
  { id: 52, image: "https://images.unsplash.com/photo-1519278409-7fba43f7915a?w=800&q=80", title: "Kids' Denim Dungarees", price: "1500", rating: "4.8", category: "Kids" },
  { id: 53, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80", title: "Cotton Frock", price: "1200", rating: "4.7", category: "Kids" },
  { id: 54, image: "https://images.unsplash.com/photo-1621452773781-0f992fd03d51?w=800&q=80", title: "Boys' T-Shirt Set", price: "950", rating: "4.6", category: "Kids" },
  { id: 55, image: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=800&q=80", title: "Soft Baby Shoes", price: "600", rating: "4.8", category: "Kids" },
  { id: 56, image: "https://images.unsplash.com/photo-1607386001047-927b587b1c4b?w=800&q=80", title: "Kids' Hoodie", price: "1800", rating: "4.7", category: "Kids" },
  { id: 57, image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80", title: "Party Dress", price: "2500", rating: "4.9", category: "Kids" },
  { id: 58, image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&q=80", title: "Winter Jacket (Kids)", price: "3200", rating: "4.8", category: "Kids" },
  { id: 59, image: "https://images.unsplash.com/photo-1614030646196-7bea882d7335?w=800&q=80", title: "School Backpack", price: "1500", rating: "4.6", category: "Kids" },
  { id: 60, image: "https://images.unsplash.com/photo-1545548170-66e2cdd4b07e?w=800&q=80", title: "Baby Beanie", price: "350", rating: "4.8", category: "Kids" },

  // ==========================================
  // SHOES
  // ==========================================
  { id: 31, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80", title: "Running Sneakers", price: "3200", rating: "4.7", category: "Shoes" },
  { id: 32, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80", title: "High Heels (Black)", price: "2800", rating: "4.8", category: "Shoes" },
  { id: 33, image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=80", title: "Leather Boots", price: "4500", rating: "4.9", category: "Shoes" },
  { id: 34, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80", title: "Formal Oxfords", price: "3800", rating: "4.7", category: "Shoes" },
  { id: 35, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80", title: "Canvas Slip-Ons", price: "1200", rating: "4.5", category: "Shoes" },
  { id: 36, image: "https://images.unsplash.com/photo-1607522370255-f80476094935?w=800&q=80", title: "Summer Sandals", price: "950", rating: "4.6", category: "Shoes" },
  { id: 37, image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=800&q=80", title: "Sports Shoes", price: "2500", rating: "4.7", category: "Shoes" },
  { id: 38, image: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?w=800&q=80", title: "Ankle Boots", price: "3200", rating: "4.8", category: "Shoes" },
  { id: 39, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", title: "White Sneakers", price: "2100", rating: "4.9", category: "Shoes" },
  { id: 40, image: "https://images.unsplash.com/photo-1620794341491-76b001002598?w=800&q=80", title: "Hiking Boots", price: "5500", rating: "4.8", category: "Shoes" },
];