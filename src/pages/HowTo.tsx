import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import storyImage from "@/assets/story-image.jpg";

const HowTo = () => {
  const recipes = [
    {
      title: "Traditional Usucha (Thin Matcha)",
      description: "The classic preparation method for a light, frothy tea",
      ingredients: [
        "1-2 tsp matcha powder",
        "70ml hot water (80°C)",
      ],
      steps: [
        "Sift matcha powder into a bowl to remove clumps",
        "Add hot water",
        "Whisk vigorously in a W or M motion until frothy",
        "Enjoy immediately",
      ],
    },
    {
      title: "Iced Matcha Latte",
      description: "Refreshing and creamy, perfect for warm days",
      ingredients: [
        "1-2 tsp matcha powder",
        "30ml hot water (80°C)",
        "200ml milk of choice",
        "Ice cubes",
        "Optional: sweetener to taste",
      ],
      steps: [
        "Whisk matcha powder with hot water until smooth",
        "Fill a glass with ice",
        "Pour in your choice of milk",
        "Add the matcha mixture",
        "Stir gently and enjoy",
      ],
    },
    {
      title: "Hot Matcha Latte",
      description: "Comforting and warming, ideal for cozy moments",
      ingredients: [
        "1-2 tsp matcha powder",
        "30ml hot water (80°C)",
        "200ml warm milk",
        "Optional: honey or maple syrup",
      ],
      steps: [
        "Whisk matcha powder with hot water until smooth",
        "Heat and froth your milk",
        "Pour matcha mixture into a cup",
        "Add warm milk on top",
        "Optional: Create latte art and enjoy",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif mb-4">How to Prepare Matcha</h1>
              <p className="text-muted-foreground text-lg">
                Master the art of matcha preparation with our simple guides
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {recipes.map((recipe, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden shadow-elegant"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={storyImage}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-6">
                    <div>
                      <h2 className="text-2xl font-serif mb-2">{recipe.title}</h2>
                      <p className="text-sm text-muted-foreground">
                        {recipe.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3 uppercase tracking-wider text-sm">
                        Ingredients
                      </h3>
                      <ul className="space-y-2">
                        {recipe.ingredients.map((ingredient, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3 uppercase tracking-wider text-sm">
                        Steps
                      </h3>
                      <ol className="space-y-2">
                        {recipe.steps.map((step, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-3 font-medium">
                              {i + 1}.
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowTo;
