import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

function Navbar() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          ShopNow
        </Link>

        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <NavLink to="/" className="hover:text-black transition-colors">
            Home
          </NavLink>
          <NavLink className="hover:text-black transition-colors">
            Products
          </NavLink>
          <NavLink className="hover:text-black transition-colors">
            About
          </NavLink>
          <NavLink className="hover:text-black transition-colors">
            Contact
          </NavLink>
        </div>
        <div>
          <Link to="/cart">
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCart size={20} />
              <span>Cart ({cartQuantity})</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
