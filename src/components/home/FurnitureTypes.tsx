import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import baseImg from "@/assets/images/tg_image_1143212202.png";
import topImg from "@/assets/images/tg_image_818381764.png";
import wardrobeImg from "@/assets/images/tg_image_4113282786.png";

const furnitureTypes = [
  {
    id: "base-cabinet",
    title: "Base Cabinet",
    description:
      "Kitchen and bathroom base cabinets with optional sliding drawers",
    price: "$250/linear ft",
    features: ["Counter support", "Drawer options", "Custom width"],
    img: baseImg,
  },
  {
    id: "top-cabinet",
    title: "Top Cabinet",
    description: "Wall-mounted upper cabinets for kitchens and storage",
    price: "$200/linear ft",
    features: ["Wall mounted", "Adjustable shelves", "Multiple heights"],
    img: topImg,
  },
  {
    id: "wardrobe",
    title: "Wardrobe",
    description:
      "Full-height wardrobes with customizable internal organization",
    price: "$200/linear ft",
    features: ["4-9 ft heights", "Custom internals", "Sliding or hinged"],
    img: wardrobeImg,
  },
];

export function FurnitureTypes() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Build</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Choose from our range of custom furniture options, all built to your
            exact specifications with transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {furnitureTypes.map((type) => (
            <Card
              key={type.id}
              className="group hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-4 md:p-6">
                {/* Visual placeholder */}
                <div className="aspect-video rounded-lg bg-secondary mb-4 md:mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={type.img}
                    alt="furniture picture"
                    className="mix-blend-darken w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {type.description}
                </p>

                <p className="text-base md:text-lg font-bold text-primary mb-4">
                  Starting at {type.price}
                </p>

                <ul className="space-y-2 mb-4 md:mb-6">
                  {type.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link to={`/calculator?type=${type.id}`}>
                    Configure & Price
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
