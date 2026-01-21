import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="CustomCraft Logo" className="h-auto w-[50px]" />
              <span className="font-bold text-lg">CustomCraft</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Custom Furniture Manufacturing
              <br />
              Built to Order | 15-Day Production
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/calculator"
                  className="hover:text-primary transition-colors"
                >
                  Price Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/materials"
                  className="hover:text-primary transition-colors"
                >
                  Materials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (818) 205-6081</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>orders@customcraft.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>California Delivery</span>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="space-y-4">
            <h4 className="font-semibold">Why Choose Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Factory Direct Pricing</li>
              <li>✓ Custom Built in 15 Days</li>
              <li>✓ California Delivery</li>
              <li>✓ No Middlemen</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} CustomCraft. All rights reserved.
            </p>
            <p>Custom Furniture Manufacturing | Built in the USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
