import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Category {
  name: string;
  description: string;
  icon: string;
  image: string;
}

const homeCategories: Category[] = [
  { name: "Furniture", description: "Sofas, tables, chairs & more", icon: "🛋️", image: "" },
  { name: "Kitchen & Dining", description: "Cookware, appliances & decor", icon: "🍳", image: "" },
  { name: "Bed & Bath", description: "Bedding, towels & essentials", icon: "🛏️", image: "" },
  { name: "Smart Home", description: "Connected living solutions", icon: "🏠", image: "" },
];

const techCategories: Category[] = [
  { name: "Computers & Laptops", description: "PCs, MacBooks & accessories", icon: "💻", image: "" },
  { name: "Mobile & Accessories", description: "Phones, cases & chargers", icon: "📱", image: "" },
  { name: "Audio & Headphones", description: "Speakers, headsets & earbuds", icon: "🎧", image: "" },
  { name: "Gaming", description: "Consoles, controllers & gear", icon: "🎮", image: "" },
];

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

interface CategorySectionProps {
  title: string;
  subtitle: string;
  categories: Category[];
  accentColor?: "primary" | "accent";
}

const CategoryGrid = ({ title, subtitle, categories, accentColor = "primary" }: CategorySectionProps) => {
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
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-soft"
            >
              <div className="p-6">
                <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl text-4xl ${
                  accentColor === "accent" ? "bg-accent/10" : "bg-primary/10"
                }`}>
                  {category.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {category.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`group/btn ${
                    accentColor === "accent" 
                      ? "text-accent hover:text-accent" 
                      : "text-primary hover:text-primary"
                  }`}
                >
                  Browse
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
              <div className={`absolute inset-x-0 bottom-0 h-1 ${
                accentColor === "accent" ? "bg-gradient-accent" : "bg-gradient-hero"
              } opacity-0 transition-opacity group-hover:opacity-100`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const CategorySection = () => {
  return (
    <>
      <CategoryGrid
        title="Home Essentials"
        subtitle="Transform your space with curated furniture and decor from trusted brands"
        categories={homeCategories}
        accentColor="accent"
      />
      
      <div className="bg-secondary/30">
        <CategoryGrid
          title="Technology Hub"
          subtitle="Discover the latest gadgets and tech gear at competitive prices"
          categories={techCategories}
          accentColor="primary"
        />
      </div>
    </>
  );
};
