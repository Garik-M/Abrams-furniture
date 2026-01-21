import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calculator, CheckCircle2, XCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Durability",
    melamine: "Good",
    plywood: "Excellent",
  },
  {
    feature: "Moisture Resistance",
    melamine: "Good",
    plywood: "Moderate (with treatment)",
  },
  {
    feature: "Weight",
    melamine: "Medium",
    plywood: "Heavier",
  },
  {
    feature: "Price",
    melamine: "Budget-friendly",
    plywood: "Premium",
  },
  {
    feature: "Screw Holding",
    melamine: "Moderate",
    plywood: "Excellent",
  },
  {
    feature: "Best For",
    melamine: "Closets, offices, light use",
    plywood: "Kitchens, heavy use",
  },
];

const featureComparison = [
  { feature: "Easy to clean", melamine: true, plywood: true },
  { feature: "Scratch resistant surface", melamine: true, plywood: false },
  { feature: "Can be refinished", melamine: false, plywood: true },
  { feature: "Eco-friendly options", melamine: true, plywood: true },
  { feature: "High humidity areas", melamine: true, plywood: false },
  { feature: "Heavy load bearing", melamine: false, plywood: true },
];

const swatches = {
  melamine: [
    { name: "Classic White", color: "#FFFFFF", border: true },
    { name: "Warm Oak", color: "#C4A77D" },
    { name: "Graphite Gray", color: "#4A4A4A" },
    { name: "Natural Maple", color: "#E8D4B8" },
    { name: "Espresso", color: "#3C2415" },
    { name: "Coastal Blue", color: "#5B7C99" },
  ],
  plywood: [
    { name: "Natural Birch", color: "#E8D5B5" },
    { name: "Red Oak", color: "#B8956C" },
    { name: "Walnut", color: "#5C4033" },
    { name: "White Oak", color: "#D4C4A8" },
    { name: "Cherry", color: "#8B4513" },
    { name: "Maple", color: "#F5DEB3" },
  ],
};

const Materials = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Materials</h1>
            <p className="text-lg text-muted-foreground">
              We offer two premium material options for your custom furniture.
              Both are built to last—choose based on your needs and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Material Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Melamine */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Melamine</CardTitle>
                <p className="text-muted-foreground">
                  Budget-friendly with excellent finish
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">M</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Melamine is a resin-coated engineered wood that offers a
                  smooth, durable surface resistant to scratches and moisture.
                  It's an excellent choice for closets, home offices, and areas
                  with moderate use.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Best suited for:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Walk-in closets and wardrobes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Home office storage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Laundry room cabinets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Budget-conscious projects
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Plywood */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Plywood</CardTitle>
                <p className="text-muted-foreground">
                  Premium strength and natural beauty
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <span className="text-4xl font-bold text-amber-600/40">P</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Plywood is made from multiple layers of real wood veneer,
                  creating exceptional strength and durability. It handles heavy
                  loads and can be refinished, making it ideal for kitchens and
                  high-use areas.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Best suited for:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Kitchen cabinets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Heavy-duty storage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Premium furniture
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Long-term investments
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Material Comparison
            </h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Feature</TableHead>
                      <TableHead className="w-1/3">Melamine</TableHead>
                      <TableHead className="w-1/3">Plywood</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row) => (
                      <TableRow key={row.feature}>
                        <TableCell className="font-medium">
                          {row.feature}
                        </TableCell>
                        <TableCell>{row.melamine}</TableCell>
                        <TableCell>{row.plywood}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Feature checklist */}
            <Card className="mt-8">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/2">Capability</TableHead>
                      <TableHead className="w-1/4 text-center">
                        Melamine
                      </TableHead>
                      <TableHead className="w-1/4 text-center">
                        Plywood
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {featureComparison.map((row) => (
                      <TableRow key={row.feature}>
                        <TableCell className="font-medium">
                          {row.feature}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.melamine ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.plywood ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Color Swatches */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Available Colors & Finishes
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose from a range of colors and finishes. Custom colors may be
              available upon request.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Melamine Swatches */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Melamine Finishes</h3>
                <div className="grid grid-cols-3 gap-4">
                  {swatches.melamine.map((swatch) => (
                    <div key={swatch.name} className="text-center">
                      <div
                        className={`aspect-square rounded-lg mb-2 shadow-sm ${
                          swatch.border ? "border-2 border-border" : ""
                        }`}
                        style={{ backgroundColor: swatch.color }}
                      />
                      <p className="text-xs text-muted-foreground">
                        {swatch.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plywood Swatches */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Plywood Finishes</h3>
                <div className="grid grid-cols-3 gap-4">
                  {swatches.plywood.map((swatch) => (
                    <div key={swatch.name} className="text-center">
                      <div
                        className="aspect-square rounded-lg mb-2 shadow-sm"
                        style={{ backgroundColor: swatch.color }}
                      />
                      <p className="text-xs text-muted-foreground">
                        {swatch.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Choose Your Material?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Use our calculator to configure your furniture and see pricing for
              either material option.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Start Configuring
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Materials;