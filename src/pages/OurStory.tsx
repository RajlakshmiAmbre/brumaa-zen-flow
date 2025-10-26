import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import storyImage from "@/assets/story-image.jpg";

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-serif text-center mb-16 animate-fade-in">Our Story</h1>

            <div className="space-y-16">
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-elegant group animate-scale-in">
                <img
                  src={storyImage}
                  alt="Brumaa matcha moment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Story Content */}
              <div className="prose prose-lg mx-auto space-y-8">
                <div className="space-y-4 animate-fade-in-up">
                  <p className="text-lg leading-relaxed text-foreground">
                    brumaa is an India-founded lifestyle brand built on quality and shaped by a modern yet ritualistic approach to matcha. By introducing authentic Japanese matcha to India, we aspire to create mindful moments that elevate everyday living.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    Founded by Jui Karkhele, brumaa represents more than a lifestyle—it stands as a symbol of quiet luxury, bridging the traditional and the contemporary, while fostering a deeper connection not only with culture and community but also with ourselves.
                  </p>
                </div>

                <div className="bg-secondary p-8 rounded-lg space-y-4 hover-lift animate-fade-in-up stagger-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
                  <p className="text-base leading-relaxed text-foreground italic">
                    "My grandfather believed that only the finest quality products was worth sharing—a philosophy my father carried forward in his own field, and the same principle now inspires everything we do at brumaa."
                  </p>
                  <p className="text-base leading-relaxed text-foreground italic">
                    "To truly elevate life's rituals, we place quality and innovation at the heart of our approach. Our product strategy is rooted in freshness, consistency, and uncompromising standards: our matcha is ground fresh, shipped by air, and stored in freezer-grade facilities to prevent oxidation, preserving its vibrant color, rich flavor, and powerful nutrients."
                  </p>
                  <p className="text-sm text-muted-foreground text-right">— Jui Karkhele, Founder</p>
                </div>

                {/* Brumaa Wordmark */}
                <div className="text-center py-12 space-y-8 animate-fade-in-up stagger-3 opacity-0" style={{ animationFillMode: 'forwards' }}>
                  <h2 className="text-6xl font-serif tracking-tight">brumaa</h2>
                  <Link to="/subscription">
                    <Button variant="luxury" size="lg" className="hover-glow hover-scale">
                      Start Your brumaa Matcha Moment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
