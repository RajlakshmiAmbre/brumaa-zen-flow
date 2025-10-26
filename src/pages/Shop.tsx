import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productImage from "@/assets/matcha-product.jpg";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Ceremonial Grade Matcha",
      description: "Premium stone-ground matcha from Japan's finest tea gardens",
      price: "₹2,499",
      size: "30g",
      image: productImage,
    },
    {
      id: 2,
      name: "Ceremonial Grade Matcha",
      description: "Premium stone-ground matcha from Japan's finest tea gardens",
      price: "₹4,499",
      size: "60g",
      image: productImage,
    },
    {
      id: 3,
      name: "Brumaa Essentials Kit",
      description: "Complete matcha starter kit with bowl, whisk, and premium matcha",
      price: "₹5,999",
      size: "Full Kit",
      image: productImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif mb-4">Shop Matcha</h1>
            <p className="text-muted-foreground text-lg">
              Authentic ceremonial-grade matcha, delivered fresh from Japan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-elegant transition-smooth hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {product.description}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {product.size}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-serif">{product.price}</p>
                    <Button variant="luxury">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Starter Kit CTA */}
          <section className="py-16 bg-secondary rounded-lg">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl font-serif">
                  Start Your brumaa Matcha Moment
                </h2>
                <p className="text-lg text-muted-foreground">
                  Discover the purity of ceremonial-grade matcha. Start your journey with the brumaa Essentials Kit.
                </p>
                <Link to="/subscription">
                  <Button variant="luxury" size="lg">
                    Subscribe & Save
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
