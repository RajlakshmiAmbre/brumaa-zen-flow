import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">brumaa</h3>
            <p className="text-sm text-muted-foreground">
              Premium Japanese matcha for mindful living
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-primary transition-smooth">All Products</Link></li>
              <li><Link to="/subscription" className="hover:text-primary transition-smooth">Subscribe</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wider text-sm">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/our-story" className="hover:text-primary transition-smooth">Our Story</Link></li>
              <li><Link to="/how-to" className="hover:text-primary transition-smooth">How To</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-smooth">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} brumaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
