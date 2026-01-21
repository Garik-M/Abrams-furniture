import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MousePointerClick,
  Ruler,
  Calculator,
  FileText,
  Factory,
  Truck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose Your Furniture Type",
    description:
      "Start by selecting from our range of custom furniture options: Base Cabinets, Top Cabinets, or Wardrobes. Each type has specific options tailored to its function.",
    details: [
      "Base cabinets for kitchen counters and storage",
      "Top cabinets for wall-mounted storage",
      "Wardrobes for bedroom organization",
    ],
  },
  {
    icon: Ruler,
    title: "Enter Dimensions & Options",
    description:
      "Specify the exact dimensions and features you need. Our calculator adapts to show relevant options based on your furniture choice.",
    details: [
      "Linear feet measurement for width",
      "Height options for wardrobes",
      "Drawer quantity for base cabinets",
      "Material selection (Melamine or Plywood)",
    ],
  },
  {
    icon: Calculator,
    title: "Get Instant Price",
    description:
      "See your price calculated in real-time as you adjust options. Our transparent pricing shows exactly how your total is calculated—no hidden fees.",
    details: [
      "Real-time price updates",
      "Detailed cost breakdown",
      "Production timeline shown",
      "Delivery estimate included",
    ],
  },
  {
    icon: FileText,
    title: "Submit Your Order",
    description:
      "When you're happy with your configuration, submit your order request. We'll contact you to confirm details and arrange payment.",
    details: [
      "Configuration details auto-attached",
      "Add special instructions",
      "Specify delivery location",
      "No commitment until confirmed",
    ],
  },
  {
    icon: Factory,
    title: "We Build in 15 Days",
    description:
      "Our skilled craftsmen build your furniture to exact specifications in our US facility. Quality materials and precision manufacturing ensure a perfect result.",
    details: [
      "Factory-direct manufacturing",
      "Quality materials",
      "Skilled craftsmanship",
      "Progress updates available",
    ],
  },
  {
    icon: Truck,
    title: "Delivered to Your Door",
    description:
      "We deliver your custom furniture directly to your home anywhere in the USA. Professional delivery ensures your furniture arrives in perfect condition.",
    details: [
      "USA-wide delivery coverage",
      "Professional handling",
      "Delivery scheduling",
      "Installation guidance included",
    ],
  },
];

const faqs = [
  {
    question: "How accurate is the calculator price?",
    answer:
      "The calculator provides a close estimate based on standard options. Final price may vary slightly based on custom finishes, hardware upgrades, or specific requirements discussed during order confirmation.",
  },
  {
    question: "Can I customize beyond the calculator options?",
    answer:
      "Absolutely! The calculator covers standard configurations. For special requests like custom finishes, unique dimensions, or specific hardware, mention them in your order and we'll provide a custom quote.",
  },
  {
    question: "What's included in the 15-day timeline?",
    answer:
      "The 15-day production timeline begins after order confirmation and payment. This includes material preparation, manufacturing, quality checks, and packaging. Delivery time is additional and depends on your location.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "We provide detailed installation guidance with every order. For full installation services, we can recommend certified installers in your area for an additional fee.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-lg text-muted-foreground">
              From your first click to delivery at your door, our streamlined
              process makes custom furniture simple, transparent, and fast.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-border hidden md:block" />
                )}

                <div className="flex gap-6">
                  {/* Step number */}
                  <div className="shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground relative">
                      <step.icon className="h-7 w-7" />
                      <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-primary text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Use our calculator to configure your custom furniture and see
              transparent pricing instantly.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;