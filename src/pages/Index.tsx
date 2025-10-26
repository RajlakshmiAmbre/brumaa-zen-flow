import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EmailPopup } from "@/components/EmailPopup";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-matcha.jpg";
import productImage from "@/assets/matcha-product.jpg";
import storyImage from "@/assets/story-image.jpg";
import { Leaf, Zap, Heart, Sparkles, Clock, Mountain } from "lucide-react";

const Index = () => {
  const properties = [
    { icon: Mountain, text: "Directly from Japan's finest tea gardens" },
    { icon: Heart, text: "A natural source of calm, balanced energy" },
    { icon: Sparkles, text: "Packed with antioxidants to support vitality" },
    { icon: Leaf, text: "Shade-grown longer for a richer nutrient profile" },
    { icon: Zap, text: "Sustained energy for 4–6 hours without the crash" },
    { icon: Clock, text: "Freshly stone-ground in small batches, farm-to-cup" },
  ];

  const benefits = [
    {
      title: "Hand-picked Excellence",
      description: "Matcha is a powerhouse of antioxidants, amino acids, and vitamins, delivering more nutrients than traditional tea by using the whole leaf. Rich in EGCG catechins to support immunity, chlorophyll for natural detox, and L-theanine for calm focus."
    },
    {
      title: "Naturally Energizing",
      description: "Matcha delivers a smooth, sustained boost of energy by combining moderate caffeine with the calming amino acid L-theanine. This unique synergy promotes steady alertness and mental clarity for hours without spikes or crashes."
    },
    {
      title: "Promotes Longevity",
      description: "Packed with antioxidants, matcha helps the body fight everyday oxidative stress. Its rich catechin content supports slower cellular wear, making it a mindful addition to a long-term wellness routine."
    }
  ];

  return (
    <div className="min-h-screen">
      <EmailPopup />
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0">
          {/* TODO: Replace src with your 4K HD video URL */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 animate-scale-in"
            poster={heroImage}
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img
              src={heroImage}
              alt="Premium matcha in elegant ceramic bowl"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="space-y-6 px-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white drop-shadow-lg">
              brumaa
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Quiet luxury meets mindful ritual
            </p>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-16 animate-fade-in">Why Brumaa Matcha</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {properties.map((prop, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 bg-background rounded-lg shadow-elegant transition-smooth hover-lift animate-fade-in-up stagger-${(index % 6) + 1} opacity-0`}
                style={{ animationFillMode: 'forwards' }}
              >
                <prop.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-float" />
                <p className="text-sm leading-relaxed">{prop.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Shop Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square group overflow-hidden rounded-lg animate-slide-in-left">
                <img
                  src={productImage}
                  alt="Premium matcha powder"
                  className="w-full h-full object-cover rounded-lg shadow-elegant transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-6 text-center md:text-left animate-slide-in-right">
                <h2 className="text-4xl font-serif">Ceremonial Grade Matcha</h2>
                <p className="text-muted-foreground">
                  Experience the finest ceremonial-grade matcha, stone-ground to perfection
                </p>
                <Link to="/shop">
                  <Button variant="luxury" size="lg" className="hover-glow">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <h2 className="text-4xl font-serif">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  brumaa is an India-founded lifestyle brand built on quality and shaped by a modern yet ritualistic approach to matcha. Founded by Jui Karkhele, we bridge the traditional and the contemporary.
                </p>
                <Link to="/our-story">
                  <Button variant="luxuryOutline" className="hover-glow">
                    Discover More
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-[4/3] group overflow-hidden rounded-lg animate-slide-in-right">
                <img
                  src={storyImage}
                  alt="Matcha latte in elegant setting"
                  className="w-full h-full object-cover rounded-lg shadow-elegant transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-16 animate-fade-in">The Matcha Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`text-center space-y-4 p-8 hover-lift rounded-lg transition-all duration-300 animate-fade-in-up stagger-${index + 1} opacity-0`}
                style={{ animationFillMode: 'forwards' }}
              >
                <h3 className="text-xl font-serif">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starter Kit CTA */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif">
              Start Your brumaa Matcha Moment
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the purity of ceremonial-grade matcha. Start your journey with the brumaa Essentials Kit — designed to transform your daily cup into a mindful ritual.
            </p>
            <Link to="/subscription">
              <Button variant="luxury" size="lg" className="hover-glow hover-scale">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
