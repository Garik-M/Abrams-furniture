import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative rounded-2xl bg-primary p-8 md:p-16 text-center overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Build Your Custom Furniture?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Use our calculator to get an instant price quote. No waiting, no
              hidden fees—just transparent pricing for quality custom furniture.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              <Link to="/calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Get Instant Price
              </Link>
            </Button>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10" />
            <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-primary-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  );
}