import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Calculator, Clock, Truck, Info } from "lucide-react";
import baseCabinet from "@/assets/images/archive.png";
import topCabinet from "@/assets/images/topCabinet.png";
import wardrobeImg from "@/assets/images/wardrobe.png";

type FurnitureType = "base-cabinet" | "top-cabinet" | "wardrobe";
type Material = "melamine" | "plywood";
type WardrobeHeight = "6" | "9" | "custom";

interface CalculatorState {
  furnitureType: FurnitureType;
  length: number;
  material: Material;
  drawers: number;
  wardrobeHeight: WardrobeHeight;
  customHeight: number;
}

const PRICES = {
  baseCabinetPerFoot: 250,
  topCabinetPerFoot: 200,
  wardrobePerFoot: 200,
  drawerCost: 80,
};

export function FurnitureCalculator() {
  const [state, setState] = useState<CalculatorState>({
    furnitureType: "base-cabinet",
    length: 10,
    material: "melamine",
    drawers: 3,
    wardrobeHeight: "6",
    customHeight: 8,
  });

  const calculation = useMemo(() => {
    let total = 0;
    let breakdown: string[] = [];

    switch (state.furnitureType) {
      case "base-cabinet":
        const baseCost = state.length * PRICES.baseCabinetPerFoot;
        const drawerCost = state.drawers * PRICES.drawerCost;
        total = baseCost + drawerCost;
        breakdown = [
          `${state.length} ft × $${PRICES.baseCabinetPerFoot} = $${baseCost.toLocaleString()}`,
          `${state.drawers} drawers × $${PRICES.drawerCost} = $${drawerCost.toLocaleString()}`,
        ];
        break;

      case "top-cabinet":
        total = state.length * PRICES.topCabinetPerFoot;
        breakdown = [
          `${state.length} ft × $${PRICES.topCabinetPerFoot} = $${total.toLocaleString()}`,
        ];
        break;

      case "wardrobe":
        let heightFactor = 1;
        let heightValue = 3;

        if (state.wardrobeHeight === "custom") {
          heightValue = state.customHeight;
          heightFactor = Math.ceil(state.customHeight / 3);
        } else {
          heightValue = parseInt(state.wardrobeHeight);
          heightFactor = heightValue / 3;
        }

        total = state.length * PRICES.wardrobePerFoot * heightFactor;
        breakdown = [
          `${state.length} ft × $${PRICES.wardrobePerFoot} × ${heightFactor}x (${heightValue}ft height)`,
          `= $${total.toLocaleString()}`,
        ];
        break;
    }

    return { total, breakdown };
  }, [state]);

  const getFurnitureLabel = (type: FurnitureType) => {
    switch (type) {
      case "base-cabinet":
        return "Base Cabinet";
      case "top-cabinet":
        return "Top Cabinet";
      case "wardrobe":
        return "Wardrobe";
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Input Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Configure Your Furniture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Furniture Type */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Furniture Type</Label>
            <RadioGroup
              value={state.furnitureType}
              onValueChange={(value) =>
                setState((s) => ({
                  ...s,
                  furnitureType: value as FurnitureType,
                }))
              }
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {(
                ["base-cabinet", "top-cabinet", "wardrobe"] as FurnitureType[]
              ).map((type) => (
                <div key={type} className="relative">
                  <RadioGroupItem
                    value={type}
                    id={type}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={type}
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors"
                  >
                    <span className="font-medium">
                      {getFurnitureLabel(type)}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      $
                      {type === "base-cabinet"
                        ? PRICES.baseCabinetPerFoot
                        : PRICES.topCabinetPerFoot}
                      /ft
                    </span>
                    <img
                      src={
                        type === "base-cabinet"
                          ? baseCabinet
                          : type === "top-cabinet"
                            ? topCabinet
                            : wardrobeImg
                      }
                      alt="furniture"
                      className="w-10 absolute right-[20px] lg:hidden"
                    />
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Separator />

          {/* Length */}
          <div className="space-y-3">
            <Label htmlFor="length" className="text-base font-semibold">
              Length (Linear Feet)
            </Label>
            <div className="flex items-center gap-4">
              <Input
                id="length"
                type="number"
                min={1}
                max={100}
                value={state.length}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    length: Math.max(1, parseInt(e.target.value) || 1),
                  }))
                }
                className="w-24 text-lg font-semibold"
              />
              <span className="text-muted-foreground">feet</span>
            </div>
          </div>

          <Separator />

          {/* Material */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Material</Label>
            <RadioGroup
              value={state.material}
              onValueChange={(value) =>
                setState((s) => ({ ...s, material: value as Material }))
              }
              className="grid grid-cols-2 gap-3"
            >
              {(["melamine", "plywood"] as Material[]).map((mat) => (
                <div key={mat}>
                  <RadioGroupItem
                    value={mat}
                    id={mat}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={mat}
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors"
                  >
                    <span className="font-medium capitalize">{mat}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Conditional: Drawers for Base Cabinet */}
          {state.furnitureType === "base-cabinet" && (
            <>
              <Separator />
              <div className="space-y-3">
                <Label htmlFor="drawers" className="text-base font-semibold">
                  Sliding Drawers
                </Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="drawers"
                    type="number"
                    min={0}
                    max={20}
                    value={state.drawers}
                    onChange={(e) =>
                      setState((s) => ({
                        ...s,
                        drawers: Math.max(0, parseInt(e.target.value) || 0),
                      }))
                    }
                    className="w-24 text-lg font-semibold"
                  />
                  <span className="text-muted-foreground">
                    × ${PRICES.drawerCost} each
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Conditional: Height for Wardrobe */}
          {state.furnitureType === "wardrobe" && (
            <>
              <Separator />
              <div className="space-y-3">
                <Label className="text-base font-semibold">
                  Wardrobe Height
                </Label>
                <RadioGroup
                  value={state.wardrobeHeight}
                  onValueChange={(value) =>
                    setState((s) => ({
                      ...s,
                      wardrobeHeight: value as WardrobeHeight,
                    }))
                  }
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                >
                  {(["6", "9", "custom"] as WardrobeHeight[]).map((h) => (
                    <div key={h}>
                      <RadioGroupItem
                        value={h}
                        id={`height-${h}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`height-${h}`}
                        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors"
                      >
                        <span className="font-medium">
                          {h === "custom" ? "Custom" : `${h} ft`}
                        </span>
                        {h !== "custom" && (
                          <span className="text-xs text-muted-foreground">
                            {parseInt(h) / 3}x price
                          </span>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {state.wardrobeHeight === "custom" && (
                  <div className="flex items-center gap-4 mt-3">
                    <Input
                      type="number"
                      min={4}
                      max={12}
                      value={state.customHeight}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          customHeight: Math.max(
                            1,
                            parseInt(e.target.value) || 1,
                          ),
                        }))
                      }
                      className="w-24 text-lg font-semibold"
                    />
                    <span className="text-muted-foreground">feet</span>
                  </div>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Price Output Section */}
      <div className="space-y-6 relative">
        <Card className="border-2 border-primary bg-primary/5">
          <CardHeader>
            <CardTitle>Your Estimate</CardTitle>
            <img
              src={
                state.furnitureType === "base-cabinet"
                  ? baseCabinet
                  : state.furnitureType === "top-cabinet"
                    ? topCabinet
                    : wardrobeImg
              }
              alt="furniture"
              className="w-20 absolute right-[30px] max-lg:hidden"
            />
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Total Price */}
            <div className="text-center py-6">
              <p className="text-sm text-muted-foreground mb-2">
                Total Estimated Price
              </p>
              <p className="text-5xl font-bold text-primary">
                ${calculation.total.toLocaleString()}
              </p>
            </div>

            {/* Breakdown */}
            <div className="bg-background rounded-lg p-4 space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Price Breakdown
              </p>
              {calculation.breakdown.map((line, i) => (
                <p key={i} className="text-sm font-mono">
                  {line}
                </p>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Production</p>
                  <p className="text-xs text-muted-foreground">15 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Delivery</p>
                  <p className="text-xs text-muted-foreground">California</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button asChild size="lg" className="w-full text-lg">
              <Link
                to={`/contact?type=${state.furnitureType}&length=${state.length}&material=${state.material}&total=${calculation.total}`}
              >
                Request Order
              </Link>
            </Button>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5 shrink-0" />
              <p>
                Final price may vary based on custom options, finishes, and
                delivery location. This estimate is for reference only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
