import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, TrendingUp } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  store: string;
  badge?: string;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Modern Ergonomic Office Chair",
    category: "Furniture",
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    reviews: 234,
    store: "ComfortHome",
    badge: "Best Value",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "MacBook Pro 14\" M3 Chip",
    category: "Computers",
    price: 1999,
    rating: 4.9,
    reviews: 567,
    store: "TechVault",
    badge: "Top Rated",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Smart Home Security System",
    category: "Smart Home",
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviews: 189,
    store: "SecureNest",
    badge: "Trending",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Premium Memory Foam Mattress",
    category: "Bed & Bath",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 412,
    store: "SleepWell",
    badge: "Hot Deal",
    image: "/placeholder.svg"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <TrendingUp className="h-4 w-4" />
            Editor's Choice
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Featured Products
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hand-picked deals and top-rated products from our verified retail partners
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-soft"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.badge && (
                  <Badge className="absolute right-3 top-3 bg-accent font-medium text-accent-foreground shadow-lg">
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {product.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <h3 className="mb-3 line-clamp-2 font-semibold text-card-foreground">
                  {product.name}
                </h3>
                
                <div className="mb-3 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                <div className="mb-4 text-xs text-muted-foreground">
                  Available at: <span className="font-medium text-primary">{product.store}</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-accent font-semibold shadow-soft transition-all hover:shadow-lg"
                  size="lg"
                >
                  View Deal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 font-semibold"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
