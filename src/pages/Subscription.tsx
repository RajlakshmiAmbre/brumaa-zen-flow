import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import productImage from "@/assets/matcha-product.jpg";

const Subscription = () => {
  const benefits = [
    "Priority access to new drops & seasonal collections",
    "Curated rituals, recipes, and mindful inspiration",
    "15% off on all orders",
    "Mystery gift with your first Brumaa Kit",
    "Free shipping on all subscription orders",
    "Flexible delivery schedule",
  ];

  const plans = [
    {
      name: "Monthly Ritual",
      price: "₹2,124",
      originalPrice: "₹2,499",
      interval: "per month",
      description: "Perfect for daily matcha moments",
      includes: "30g premium matcha delivered monthly",
    },
    {
      name: "Quarterly Collection",
      price: "₹6,372",
      originalPrice: "₹7,497",
      interval: "every 3 months",
      description: "Ideal for consistent practice",
      includes: "90g premium matcha (3x30g) delivered quarterly",
      popular: true,
    },
    {
      name: "Annual Journey",
      price: "₹24,489",
      originalPrice: "₹29,988",
      interval: "per year",
      description: "The ultimate matcha commitment",
      includes: "360g premium matcha (12x30g) + exclusive gifts",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
            <h1 className="text-5xl font-serif">Join Brumaa Matcha Moments</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Step into an exclusive circle where matcha becomes more than a drink — it's a lifestyle.
            </p>
          </div>

          {/* Benefits */}
          <div className="max-w-3xl mx-auto mb-16 bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-serif text-center mb-8">
              As a member, you'll enjoy:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Image */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="aspect-video overflow-hidden rounded-lg shadow-elegant">
              <img
                src={productImage}
                alt="Brumaa matcha essentials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-12">
              Choose Your Ritual
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-card border rounded-lg p-8 shadow-elegant transition-smooth hover:scale-105 ${
                    plan.popular
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs uppercase tracking-wider font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-serif">{plan.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          {plan.originalPrice}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.interval}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        {plan.includes}
                      </p>
                    </div>

                    <Button
                      variant={plan.popular ? "luxury" : "luxuryOutline"}
                      className="w-full"
                    >
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="max-w-3xl mx-auto mt-16 text-center space-y-4 text-sm text-muted-foreground">
            <p>All subscriptions can be paused, modified, or cancelled anytime.</p>
            <p>Free shipping on all subscription orders within India.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Subscription;
