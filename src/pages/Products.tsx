import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Star, ExternalLink, Filter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, categories } from "@/lib/products";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");
  
  const [searchQuery, setSearchQuery] = useState(searchParam || "");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      if (selectedCategory === "home") {
        filtered = filtered.filter((product) => product.category === "Home");
      } else if (selectedCategory === "technology") {
        filtered = filtered.filter((product) => product.category === "Technology");
      } else {
        filtered = filtered.filter(
          (product) => product.subcategory.toLowerCase().replace(/\s+/g, "-") === selectedCategory
        );
      }
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-mesh-gradient">
      <Navigation />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="mb-4 text-4xl font-bold text-foreground">
              All Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our complete catalog of home and technology products from trusted retailers
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProducts.map((product) => (
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
                      {product.subcategory}
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
                  
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  
                  <div className="mb-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      R{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        R{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-4 text-xs text-muted-foreground">
                    Available at: <span className="font-medium text-primary">{product.stores.length} stores</span>
                  </div>
                  
                  {product.stores.slice(0, 1).map((store) => (
                    <a
                      key={store.store.name}
                      href={store.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        className="w-full bg-gradient-accent font-semibold shadow-soft transition-all hover:shadow-lg"
                        size="lg"
                      >
                        Buy at {store.store.name}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  ))}
                  
                  {product.stores.length > 1 && (
                    <p className="mt-2 text-center text-xs text-muted-foreground">
                      +{product.stores.length - 1} more store{product.stores.length > 2 ? "s" : ""}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center"
            >
              <p className="text-lg text-muted-foreground">
                No products found. Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
