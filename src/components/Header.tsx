import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Industries", href: "/industries" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-90 backdrop-blur-md border-b border-border shadow-md"
          : "bg-black bg-opacity-40"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img
                src="/favicon.ico"
                alt="Elevate360 Logo"
                className="h-8 w-auto sm:h-10 md:h-11 lg:h-12 transition-transform duration-300 hover:scale-105 drop-shadow-xl"
              />
            </Link>
            <div></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-electric-blue transition-colors duration-200 font-medium"
                onClick={() => {
                  if (item.href.startsWith("/#")) {
                    const element = document.querySelector(item.href.slice(1));
                    element?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="gradient-primary hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-electric-blue transition-colors duration-200"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (item.href.startsWith("/#")) {
                      const element = document.querySelector(
                        item.href.slice(1)
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="gradient-primary">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
