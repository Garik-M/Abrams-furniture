import { Factory, Clock, Truck, DollarSign, Shield } from "lucide-react";
import constants from "node:constants";
import { useEffect, useState } from "react";

const badges = [
  {
    icon: Factory,
    title: "Factory Direct",
    description: "No middlemen markup",
  },
  {
    icon: Clock,
    title: "15-Day Production",
    description: "Fast custom manufacturing",
  },
  {
    icon: Truck,
    title: "USA Wide Delivery",
    description: "Coast to coast shipping",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Instant calculator quotes",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Built to last",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-3">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{badge.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
