import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { formatRupiah } from "../utils/FormatRupiah";
import PrimaryButton from "../components/layout/PrimaryButton";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) => state.cart.totalPrice);
  const shipping = 20000;

  const total = subTotal + shipping;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main Street" />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Jakarta" />
            </div>
            <div>
              <Label htmlFor="zip">Postal Code</Label>
              <Input id="zip" placeholder="12345" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between md:flex-nowrap flex-wrap"
              >
                <span className="truncate md:w-3xs">
                  {item.name} ({item.quantity})
                </span>
                <span>{formatRupiah(item.price)}</span>
              </div>
            ))}

            <hr />

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatRupiah(subTotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{formatRupiah(shipping)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{formatRupiah(total)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <PrimaryButton className="w-full">Place Order</PrimaryButton>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
