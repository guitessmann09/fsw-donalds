import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FormatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../context/cart";
import CartItem from "./cart-product-item";

const CartSheet = () => {
  const { isOpen, toggleCart, products, total } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <Card className="mb-6">
            <CardContent className="flex justify-between p-4">
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-sm font-semibold">{FormatCurrency(total)}</p>
            </CardContent>
          </Card>
          <Button className="w-full rounded-full">Finalizar predido</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
