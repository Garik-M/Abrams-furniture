import { Layout } from "@/components/layout/Layout";
import { FurnitureCalculator } from "@/components/calculator/FurnitureCalculator";
import { TrustBadges } from "@/components/home/TrustBadges";

const Calculator = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Custom Furniture Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Configure your custom cabinet or wardrobe and get an instant price
              estimate. Transparent pricing with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="container">
          <FurnitureCalculator />
        </div>
      </section>

      {/* Trust Section */}
      <TrustBadges />
    </Layout>
  );
};

export default Calculator;