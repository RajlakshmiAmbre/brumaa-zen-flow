import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/brumaa-logo.jpg";

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Our Story", path: "/our-story" },
    { name: "How To", path: "/how-to" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 animate-fade-in">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover-scale">
            <img 
              src={logo} 
              alt="brumaa" 
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-wider transition-smooth hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  location.pathname === link.path ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            {/* Mobile menu can be added later */}
          </div>
        </div>
      </nav>
    </header>
  );
};
