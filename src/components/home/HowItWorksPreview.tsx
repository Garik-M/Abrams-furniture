import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MousePointerClick,
  Ruler,
  Calculator,
  FileText,
  Factory,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose Type",
    description: "Select your furniture type",
  },
  {
    icon: Ruler,
    title: "Enter Dimensions",
    description: "Specify length and options",
  },
  {
    icon: Calculator,
    title: "Get Instant Price",
    description: "See transparent pricing",
  },
  {
    icon: FileText,
    title: "Submit Order",
    description: "Send your specifications",
  },
  {
    icon: Factory,
    title: "We Build",
    description: "Crafted in 15 days",
  },
  {
    icon: Truck,
    title: "Delivered",
    description: "To your door, USA wide",
  },
];

export function HowItWorksPreview() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to delivery in just 6 simple steps. Our streamlined
            process makes custom furniture easy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative mb-4">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-primary text-xs font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/how-it-works">Learn More About Our Process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}