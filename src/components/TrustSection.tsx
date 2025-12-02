import { motion } from "framer-motion";
import { Shield, TrendingUp, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified Retailers Only",
    description: "Every merchant is thoroughly vetted to ensure quality, reliability, and customer satisfaction."
  },
  {
    icon: TrendingUp,
    title: "Best Price Comparison",
    description: "Compare prices across multiple trusted stores to guarantee you're getting the best deal."
  },
  {
    icon: Award,
    title: "Curated Selection",
    description: "Our team hand-picks products based on quality, reviews, and value to save you time."
  },
  {
    icon: Users,
    title: "Community Reviews",
    description: "Real customer reviews and ratings help you make informed purchasing decisions."
  }
];

const stats = [
  { value: "500+", label: "Verified Retailers" },
  { value: "50K+", label: "Products Listed" },
  { value: "4.8", label: "Average Rating" },
  { value: "100K+", label: "Happy Customers" }
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

export const TrustSection = () => {
  return (
    <>
      {/* Benefits Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Why Shop With Us?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We connect you with the best retailers while ensuring a safe, transparent shopping experience
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={item}
                className="text-center"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
