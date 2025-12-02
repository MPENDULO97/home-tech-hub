import { Link } from "react-router-dom";
import { Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">HomeTech Hub</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">Home</Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" size="sm">
                <Package className="mr-2 h-4 w-4" />
                All Products
              </Button>
            </Link>
            <Link to="/products?category=home">
              <Button variant="ghost" size="sm">Home Essentials</Button>
            </Link>
            <Link to="/products?category=technology">
              <Button variant="ghost" size="sm">Technology</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
