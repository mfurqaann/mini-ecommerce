import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div to="/" className="text-2xl font-bold text-gray-800">
          ShopNow
        </div>

        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <div className="hover:text-black transition-colors">Home</div>
          <div className="hover:text-black transition-colors">Products</div>
          <div className="hover:text-black transition-colors">About</div>
          <div className="hover:text-black transition-colors">Contact</div>
        </div>
        <div>
          <div>
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCart size={20} />
              <span>Cart (0)</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
