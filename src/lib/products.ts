export interface Store {
  name: string;
  url: string;
  logo?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  stores: {
    store: Store;
    price: number;
    affiliateLink: string;
    inStock: boolean;
  }[];
  specifications?: { [key: string]: string };
}

export const stores: { [key: string]: Store } = {
  amazon: { name: "Amazon", url: "https://www.amazon.com" },
  takealot: { name: "Takealot", url: "https://www.takealot.com" },
  mrprice: { name: "Mr Price Home", url: "https://www.mrphome.com" },
  game: { name: "Game", url: "https://www.game.co.za" },
  homechoice: { name: "Home Choice", url: "https://www.homechoice.co.za" },
  makro: { name: "Makro", url: "https://www.makro.co.za" },
  incredible: { name: "Incredible Connection", url: "https://www.incredible.co.za" },
  hirsch: { name: "Hirsch's", url: "https://www.hirschs.co.za" },
  builders: { name: "Builders Warehouse", url: "https://www.builders.co.za" },
  sheet: { name: "@Home", url: "https://www.athome.co.za" },
};

export const products: Product[] = [
  {
    id: "chair-001",
    name: "Modern Ergonomic Office Chair",
    category: "Home",
    subcategory: "Furniture",
    description: "Premium ergonomic office chair with lumbar support, adjustable armrests, and breathable mesh back. Perfect for long work hours.",
    price: 3999,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 234,
    image: "/placeholder.svg",
    badge: "Best Value",
    stores: [
      { store: stores.takealot, price: 3999, affiliateLink: "https://www.takealot.com/office-chair", inStock: true },
      { store: stores.makro, price: 4199, affiliateLink: "https://www.makro.co.za/office-chair", inStock: true },
      { store: stores.game, price: 4299, affiliateLink: "https://www.game.co.za/office-chair", inStock: true },
    ],
  },
  {
    id: "laptop-001",
    name: "MacBook Pro 14\" M3 Chip",
    category: "Technology",
    subcategory: "Computers & Laptops",
    description: "Latest MacBook Pro with M3 chip, 16GB RAM, 512GB SSD. Stunning Liquid Retina XDR display.",
    price: 32999,
    rating: 4.9,
    reviews: 567,
    image: "/placeholder.svg",
    badge: "Top Rated",
    stores: [
      { store: stores.incredible, price: 32999, affiliateLink: "https://www.incredible.co.za/macbook-pro", inStock: true },
      { store: stores.takealot, price: 33499, affiliateLink: "https://www.takealot.com/macbook-pro", inStock: true },
      { store: stores.hirsch, price: 33999, affiliateLink: "https://www.hirschs.co.za/macbook-pro", inStock: false },
    ],
  },
  {
    id: "security-001",
    name: "Smart Home Security System",
    category: "Home",
    subcategory: "Smart Home",
    description: "Complete smart home security system with 4 cameras, motion detection, mobile alerts, and 24/7 recording.",
    price: 4999,
    originalPrice: 6999,
    rating: 4.7,
    reviews: 189,
    image: "/placeholder.svg",
    badge: "Trending",
    stores: [
      { store: stores.takealot, price: 4999, affiliateLink: "https://www.takealot.com/security-system", inStock: true },
      { store: stores.incredible, price: 5299, affiliateLink: "https://www.incredible.co.za/security", inStock: true },
      { store: stores.makro, price: 5499, affiliateLink: "https://www.makro.co.za/security", inStock: true },
    ],
  },
  {
    id: "mattress-001",
    name: "Premium Memory Foam Mattress",
    category: "Home",
    subcategory: "Bed & Bath",
    description: "Queen size premium memory foam mattress with cooling gel technology and pressure relief support.",
    price: 8999,
    originalPrice: 12999,
    rating: 4.8,
    reviews: 412,
    image: "/placeholder.svg",
    badge: "Hot Deal",
    stores: [
      { store: stores.homechoice, price: 8999, affiliateLink: "https://www.homechoice.co.za/mattress", inStock: true },
      { store: stores.mrprice, price: 9499, affiliateLink: "https://www.mrphome.com/mattress", inStock: true },
      { store: stores.makro, price: 9999, affiliateLink: "https://www.makro.co.za/mattress", inStock: false },
    ],
  },
  {
    id: "sofa-001",
    name: "Luxury L-Shaped Sofa",
    category: "Home",
    subcategory: "Furniture",
    description: "Spacious L-shaped sofa with premium fabric upholstery, deep cushions, and modern design.",
    price: 14999,
    originalPrice: 19999,
    rating: 4.6,
    reviews: 156,
    image: "/placeholder.svg",
    badge: "Best Seller",
    stores: [
      { store: stores.mrprice, price: 14999, affiliateLink: "https://www.mrphome.com/sofa", inStock: true },
      { store: stores.homechoice, price: 15999, affiliateLink: "https://www.homechoice.co.za/sofa", inStock: true },
      { store: stores.sheet, price: 16499, affiliateLink: "https://www.athome.co.za/sofa", inStock: true },
    ],
  },
  {
    id: "phone-001",
    name: "Samsung Galaxy S24 Ultra",
    category: "Technology",
    subcategory: "Mobile Phones",
    description: "Flagship smartphone with 200MP camera, S Pen, and powerful AI features. 12GB RAM, 256GB storage.",
    price: 21999,
    rating: 4.8,
    reviews: 892,
    image: "/placeholder.svg",
    badge: "New Arrival",
    stores: [
      { store: stores.incredible, price: 21999, affiliateLink: "https://www.incredible.co.za/galaxy-s24", inStock: true },
      { store: stores.takealot, price: 22499, affiliateLink: "https://www.takealot.com/galaxy-s24", inStock: true },
      { store: stores.hirsch, price: 22999, affiliateLink: "https://www.hirschs.co.za/galaxy-s24", inStock: true },
    ],
  },
  {
    id: "headphones-001",
    name: "Sony WH-1000XM5 Headphones",
    category: "Technology",
    subcategory: "Audio & Headphones",
    description: "Industry-leading noise cancellation, exceptional sound quality, and 30-hour battery life.",
    price: 6999,
    originalPrice: 8999,
    rating: 4.9,
    reviews: 1234,
    image: "/placeholder.svg",
    badge: "Editor's Choice",
    stores: [
      { store: stores.takealot, price: 6999, affiliateLink: "https://www.takealot.com/sony-headphones", inStock: true },
      { store: stores.incredible, price: 7299, affiliateLink: "https://www.incredible.co.za/sony-headphones", inStock: true },
      { store: stores.hirsch, price: 7499, affiliateLink: "https://www.hirschs.co.za/sony-headphones", inStock: true },
    ],
  },
  {
    id: "cookware-001",
    name: "Premium Stainless Steel Cookware Set",
    category: "Home",
    subcategory: "Kitchen & Dining",
    description: "Complete 12-piece cookware set with tri-ply construction, perfect for all cooking methods.",
    price: 3499,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 267,
    image: "/placeholder.svg",
    stores: [
      { store: stores.makro, price: 3499, affiliateLink: "https://www.makro.co.za/cookware", inStock: true },
      { store: stores.game, price: 3699, affiliateLink: "https://www.game.co.za/cookware", inStock: true },
      { store: stores.takealot, price: 3899, affiliateLink: "https://www.takealot.com/cookware", inStock: true },
    ],
  },
  {
    id: "gaming-001",
    name: "PlayStation 5 Console",
    category: "Technology",
    subcategory: "Gaming",
    description: "Latest generation gaming console with ultra-high speed SSD and stunning 4K graphics.",
    price: 11999,
    rating: 4.9,
    reviews: 2341,
    image: "/placeholder.svg",
    badge: "Hot Item",
    stores: [
      { store: stores.takealot, price: 11999, affiliateLink: "https://www.takealot.com/ps5", inStock: true },
      { store: stores.game, price: 12499, affiliateLink: "https://www.game.co.za/ps5", inStock: false },
      { store: stores.incredible, price: 12999, affiliateLink: "https://www.incredible.co.za/ps5", inStock: true },
    ],
  },
  {
    id: "desk-001",
    name: "Standing Desk with Electric Height Adjustment",
    category: "Home",
    subcategory: "Furniture",
    description: "Premium standing desk with smooth electric adjustment, memory presets, and cable management.",
    price: 7999,
    originalPrice: 10999,
    rating: 4.8,
    reviews: 445,
    image: "/placeholder.svg",
    badge: "Trending",
    stores: [
      { store: stores.takealot, price: 7999, affiliateLink: "https://www.takealot.com/standing-desk", inStock: true },
      { store: stores.makro, price: 8299, affiliateLink: "https://www.makro.co.za/standing-desk", inStock: true },
    ],
  },
  {
    id: "tv-001",
    name: "Samsung 65\" 4K Smart TV",
    category: "Technology",
    subcategory: "TV & Home Entertainment",
    description: "Crystal UHD 4K TV with HDR, smart features, and stunning picture quality.",
    price: 12999,
    originalPrice: 15999,
    rating: 4.7,
    reviews: 678,
    image: "/placeholder.svg",
    stores: [
      { store: stores.hirsch, price: 12999, affiliateLink: "https://www.hirschs.co.za/samsung-tv", inStock: true },
      { store: stores.incredible, price: 13299, affiliateLink: "https://www.incredible.co.za/samsung-tv", inStock: true },
      { store: stores.game, price: 13499, affiliateLink: "https://www.game.co.za/samsung-tv", inStock: true },
    ],
  },
  {
    id: "bedding-001",
    name: "Egyptian Cotton Bedding Set",
    category: "Home",
    subcategory: "Bed & Bath",
    description: "Luxurious 400 thread count Egyptian cotton bedding set, includes duvet cover and pillowcases.",
    price: 1999,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 234,
    image: "/placeholder.svg",
    stores: [
      { store: stores.mrprice, price: 1999, affiliateLink: "https://www.mrphome.com/bedding", inStock: true },
      { store: stores.homechoice, price: 2199, affiliateLink: "https://www.homechoice.co.za/bedding", inStock: true },
      { store: stores.sheet, price: 2299, affiliateLink: "https://www.athome.co.za/bedding", inStock: true },
    ],
  },
];

export const categories = [
  { name: "All", slug: "all" },
  { name: "Furniture", slug: "furniture" },
  { name: "Kitchen & Dining", slug: "kitchen-dining" },
  { name: "Bed & Bath", slug: "bed-bath" },
  { name: "Smart Home", slug: "smart-home" },
  { name: "Computers & Laptops", slug: "computers" },
  { name: "Mobile Phones", slug: "mobile" },
  { name: "Audio & Headphones", slug: "audio" },
  { name: "Gaming", slug: "gaming" },
  { name: "TV & Entertainment", slug: "tv" },
];
