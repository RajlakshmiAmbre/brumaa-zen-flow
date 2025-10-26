import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Matcha Knowledge",
      questions: [
        {
          q: "What is Matcha?",
          a: "Matcha is a finely ground green tea powder made by stone-milling young tea leaves grown under shade. Unlike regular teas where leaves are steeped and discarded, matcha is consumed whole, giving you the full flavor and maximum nutrition in every sip.",
        },
        {
          q: "What does it taste like?",
          a: "Premium matcha has a naturally smooth balance of umami, gentle sweetness, and refreshing vegetal notes. Depending on the grade, it can carry subtle nutty, roasted, or floral tones with minimal bitterness and a lingering clean finish.",
        },
        {
          q: "Where does it come from?",
          a: "Matcha originated in China over 800 years ago and was later refined in Japan, becoming the heart of tea ceremonies. Today, Brumaa brings this heritage to India—curating ceremonial-grade matcha that blends tradition with a modern lifestyle.",
        },
        {
          q: "Why is the color so vibrant?",
          a: "Matcha gets its bright green color from the shading process, which boosts chlorophyll levels. This also enhances amino acids like L-theanine, giving matcha its distinctive taste and health benefits.",
        },
        {
          q: "Does matcha have caffeine?",
          a: "Yes, but in a gentler form. One cup has about a third of the caffeine found in coffee. Combined with L-theanine, it provides calm, focused energy without jitters or crashes.",
        },
      ],
    },
    {
      title: "Using Brumaa Matcha",
      questions: [
        {
          q: "How is matcha prepared?",
          a: "Traditionally, matcha is whisked in warm water with a bamboo whisk (chasen). You can enjoy it as Usucha (light, frothy tea), Koicha (thick, rich tea), or modern variations like lattes, smoothies, or desserts.",
        },
        {
          q: "What if I don't have a bamboo whisk?",
          a: "A frother or shaker works too—but for the most authentic experience, we recommend the bamboo whisk.",
        },
        {
          q: "How much should I drink daily?",
          a: "1–2 cups daily is ideal.",
        },
        {
          q: "When is the best time to drink matcha?",
          a: "Morning or early afternoon is best—when you need focus, calm energy, and clarity.",
        },
        {
          q: "Beyond tea, how else can I enjoy matcha?",
          a: "Matcha is versatile! Try it in lattes, iced drinks, smoothies, cakes, cookies, ice cream, or even savory recipes.",
        },
      ],
    },
    {
      title: "Storage & Freshness",
      questions: [
        {
          q: "How should I store matcha?",
          a: "Keep it in an airtight container, away from light, heat, and moisture. For long-term storage, refrigerate unopened packs or freeze them to lock in freshness.",
        },
        {
          q: "What is the shelf life?",
          a: "Unopened: up to 24 months. Opened: best enjoyed within 3 months for better quality.",
        },
        {
          q: "Why is it sold in small packs?",
          a: "Because matcha is delicate and oxidizes once opened. Smaller packaging ensures you always enjoy it at peak freshness.",
        },
      ],
    },
    {
      title: "Health & Lifestyle",
      questions: [
        {
          q: "What are the benefits of matcha?",
          a: "Rich in antioxidants (especially EGCG), supports focus and calm energy, boosts metabolism naturally, helps with stress balance, and contributes to skin health and vitality.",
        },
        {
          q: "What is L-theanine?",
          a: "A rare amino acid found in tea (especially matcha) that promotes relaxation, reduces stress, and works with caffeine to provide calm yet alert focus.",
        },
        {
          q: "What is EGCG?",
          a: "Epigallocatechin gallate (EGCG) is a powerful antioxidant in matcha. It helps fight oxidative stress, supports skin health, and may contribute to slow aging.",
        },
        {
          q: "Is matcha safe during pregnancy?",
          a: "Yes, in moderation. But please consult your doctor for any allergies.",
        },
        {
          q: "Any side effects?",
          a: "Matcha is generally safe when consumed in recommended amounts. Excessive consumption may lead to caffeine sensitivity in some people.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif mb-4">Frequently Asked Questions</h1>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about matcha and brumaa
              </p>
            </div>

            <div className="space-y-12">
              {faqCategories.map((category, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-2xl font-serif">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`${index}-${qIndex}`}
                        className="border border-border rounded-lg px-6 bg-card"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6">
                          <span className="font-medium">{item.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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

export default FAQ;
