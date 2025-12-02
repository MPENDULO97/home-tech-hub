import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Access to 100K+ engaged shoppers",
  "Performance-based commission structure",
  "Advanced analytics dashboard",
  "Marketing support & featured placements",
  "Simple product feed integration",
  "Dedicated partner success team"
];

export const MerchantCTA = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                For Retailers & Brands
              </div>
              
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Grow Your Business With Our Marketplace
              </h2>
              
              <p className="mb-8 text-lg text-muted-foreground">
                Join hundreds of successful retailers reaching new customers through our curated platform. 
                Zero upfront costs, transparent pricing, and powerful analytics.
              </p>

              <div className="mb-8 space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                      <Check className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  size="lg"
                  className="bg-gradient-accent font-semibold shadow-soft hover:shadow-lg"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 font-semibold"
                >
                  View Partnership Tiers
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="mb-6">
                  <div className="mb-2 text-sm font-medium text-muted-foreground">
                    Average Commission Rate
                  </div>
                  <div className="text-4xl font-bold text-primary">3-10%</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Per successful sale
                  </div>
                </div>

                <div className="mb-6 border-t border-border pt-6">
                  <div className="mb-4 text-sm font-medium text-muted-foreground">
                    Partnership Tiers
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-secondary/30 p-3">
                      <span className="font-medium text-foreground">Starter</span>
                      <span className="text-sm text-muted-foreground">$0/month</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-secondary/30 p-3">
                      <span className="font-medium text-foreground">Premium</span>
                      <span className="text-sm text-muted-foreground">$49/month</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-gradient-hero p-3 text-white">
                      <span className="font-medium">Enterprise</span>
                      <span className="text-sm">Custom</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-accent/10 p-4 text-center">
                  <div className="text-sm text-muted-foreground">
                    🎉 <span className="font-medium">Launch Offer:</span> First 3 months at 0% commission
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
