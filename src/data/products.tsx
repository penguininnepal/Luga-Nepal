export type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
  color: string;
  badge?: string;
  stockStatus?: string;
  category: "Women" | "Men" | "Shoes";
  tags?: ('new-arrival' | 'trending' | 'icon')[];
};

export const products: Product[] = [
  {
    id: 101,
    image: "https://i.pinimg.com/736x/f7/cf/89/f7cf894ae66c91a7cd8587e23e814bb4.jpg",
    title: "Long Over Coat",
    price: "4500",
    color: "Black",
    badge: "New Arrival",
    stockStatus: "In Stock & Ready to Ship",
    category: "Women",
    tags: ['icon']
  },
  {
    id: 102,
    image: "https://i.pinimg.com/1200x/21/50/15/215015c008da7ad1014bbda9e0a03772.jpg",
    title: "Men's Classic Suit",
    price: "8500",
    color: "Navy",
    badge: "Trending",
    stockStatus: "Limited Stock",
    category: "Men",
    tags: ['icon']
  },
  {
    id: 104,
    image: "https://i.pinimg.com/1200x/d2/c3/3a/d2c33a58c6e7820e0d06317cfb4e7e8a.jpg",
    title: "Leather Running Shoes",
    price: "3500",
    color: "Brown",
    badge: "New",
    stockStatus: "In Stock & Ready to Ship",
    category: "Shoes",
    tags: ['icon']
  },
];

export type JustforyouProduct = {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: string;
  color?: string;
  badge?: string;
  stockStatus?: string;
  category: "Women" | "Men" | "Shoes";
  tags?: ('new-arrival' | 'trending' | 'icon')[];
};

export const justforyouproducts: JustforyouProduct[] = [
  // Womens Fashion
  {
    id: 1,
    image: "https://i.pinimg.com/736x/ba/e5/6e/bae56e80a8160981391daee0a563a5ac.jpg",
    title: "Adidas Ba Sing Se Jackect",
    price: "2500",
    rating: "4.8",
    badge: "Summer Sale",
    stockStatus: "In Stock",
    category: "Men",
    tags: ['new-arrival']
  },
  { id: 2, 
    image: "https://i.pinimg.com/1200x/20/a7/45/20a7455f832935c9dd2a097a3ad7315e.jpg", 
    title: "Denim Jacket", 
    price: "3200", 
    rating: "4.7", 
    stockStatus: "In Stock", 
    category: "Women", 
    tags: ['trending'] 
  },
  { 
    id: 3, 
    image: "https://i.pinimg.com/736x/45/3a/cb/453acb4be1d682cb2c68621cf2127251.jpg", 
    title: "Silk Scarf", 
    price: "6500", 
    rating: "4.9", 
    badge: "Premium", 
    stockStatus: "Low Stock", 
    category: "Women", 
    tags: ['trending'] 
  },
  { 
    id: 4, 
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80", 
    title: "Casual White Tee", 
    price: "950", 
    rating: "4.5", 
    stockStatus: "In Stock & Ready to Ship", 
    category: "Women" 
  },
  { 
    id: 5, 
    image: "https://images.unsplash.com/photo-1534030617326-7f415951680d?w=800&q=80", 
    title: "High-Waist Jeans", 
    price: "2800", 
    rating: "4.6", 
    category: "Women" 
  },
  { 
    id: 6, 
    image: "https://images.unsplash.com/photo-1589465885857-44edb59ef526?w=800&q=80", 
    title: "Cotton Kurthi", 
    price: "1500", 
    rating: "4.7", 
    category: "Women" 
  },
  { 
    id: 7, 
    image: "https://i.pinimg.com/1200x/20/a3/d8/20a3d803e7e8b03be0b7c379bb3a3069.jpg", 
    title: "Pyjamas", 
    price: "1200", 
    rating: "4.8", 
    badge: "Best Seller", 
    category: "Women", 
    tags: ['trending'] 
  },
  { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mz_ldhuhlq356d60XznWvCTMjbsInP0PIA&s", title: "Bridal Lehenga", price: "15000", rating: "4.9", badge: "Exclusive", category: "Women", tags: ['trending', 'new-arrival'] },
  { id: 9, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80", title: "Woolen Cardigan", price: "2200", rating: "4.6", category: "Women" },
  { id: 10, image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=800&q=80", title: "Boho Maxi Skirt", price: "1800", rating: "4.5", category: "Women" },

  // Mens Fashion
  { id: 11, image: "https://i.pinimg.com/736x/5a/ab/5b/5aab5b0d0a5d051db1cfb72adbaaf5ee.jpg", title: "Men's Linen Shirt", price: "2100", rating: "4.7", badge: "New", category: "Men", tags: ['new-arrival'] },
  { id: 12, image: "https://images.unsplash.com/photo-1593030761757-71bd90dbe78e?w=800&q=80", title: "Slim Fit Chinos", price: "2500", rating: "4.6", category: "Men" },
  { id: 13, image: "https://i.pinimg.com/736x/2b/b3/91/2bb3912c2771716df822b18aef1dad83.jpg", title: "Daily Blazer", price: "8000", rating: "4.9", badge: "Top Rated", category: "Men", tags: ['trending'] },
  { id: 14, image: "https://images.unsplash.com/photo-1594938298603-c8148c47e356?w=800&q=80", title: "Classic Polo T-Shirt", price: "1200", rating: "4.5", category: "Men" },
  { id: 15, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&q=80", title: "Bomber Jacket", price: "3500", rating: "4.7", category: "Men" },
  { id: 16, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80", title: "Graphic Tee", price: "900", rating: "4.4", category: "Men" },
  { id: 17, image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800&q=80", title: "Formal Trousers", price: "2400", rating: "4.6", category: "Men" },
  { id: 18, image: "https://images.unsplash.com/photo-1616248249518-86f9e299386d?w=800&q=80", title: "Hooded Sweatshirt", price: "1800", rating: "4.8", category: "Men", tags: ['trending'] },
  { id: 19, image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80", title: "Casual Shorts", price: "1100", rating: "4.5", category: "Men" },
  { id: 20, image: "https://images.unsplash.com/photo-1507680436348-527797e426dd?w=800&q=80", title: "Blazer Coat", price: "4500", rating: "4.8", category: "Men", tags: ['trending'] },


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