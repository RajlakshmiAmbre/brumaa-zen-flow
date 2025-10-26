import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const EmailPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("brumaa-popup-seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("brumaa-popup-seen", "true");
      setOpen(false);
      // Handle email subscription here
    }
  };

  const handleClose = () => {
    localStorage.setItem("brumaa-popup-seen", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md bg-background border-border animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-smooth hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader className="space-y-4 pt-6 animate-fade-in-up">
          <DialogTitle className="text-3xl font-serif text-center">
            Want 10% Off Japan's Best Matcha?
          </DialogTitle>
          <p className="text-center text-muted-foreground font-light">
            Join the brumaa Lifestyle
          </p>
        </DialogHeader>

        <div className="space-y-6 pt-4 animate-fade-in-up stagger-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="text-center text-sm text-muted-foreground px-4">
            Join the journey behind the making of brumaa — be the first to get exclusive updates and early access
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-center transition-smooth focus:shadow-elegant"
            />
            <Button type="submit" variant="luxury" className="w-full hover-glow hover-scale">
              Subscribe
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
