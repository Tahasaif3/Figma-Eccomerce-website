"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const initialCartItems = [
    {
        id: "1",
        name: "LCD Monitor",
        image: "/c1.png?height=100&width=100",
        price: 650,
        quantity: 1,
    },
    {
        id: "2",
        name: "H4 Gamepad",
        image: "/c2.png?height=100&width=100",
        price: 550,
        quantity: 2,
    },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [couponCode, setCouponCode] = useState("");

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity < 1) return;
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-[#E94E4E]">
                        Home
                    </Link>
                    <span>/</span>
                    <span>Cart</span>
                </div>

                <div className="max-w-6xl mx-auto">
                    {cartItems.length > 0 ? (
                        <>
                            {/* Cart Table Header */}
                            <div className="hidden md:grid md:grid-cols-4 gap-4 mb-6 text-sm font-medium">
                                <div>Product</div>
                                <div className="text-center">Price</div>
                                <div className="text-center">Quantity</div>
                                <div className="text-right">Subtotal</div>
                            </div>

                            {/* Cart products mapping */}
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 border-t items-center"
                                >
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={60}
                                            height={60}
                                            className="rounded-lg"
                                        />
                                        <span className="font-medium">
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className="text-center md:text-left">
                                        ${item.price}
                                    </div>
                                    <div className="flex justify-center md:justify-start">
                                        <div className="flex items-center border rounded-md">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.quantity - 1
                                                    )
                                                }
                                                className="px-3 py-1 hover:bg-gray-50"
                                            >
                                                -
                                            </button>
                                            <span className="px-3 py-1 border-x">
                                                {item.quantity
                                                    .toString()
                                                    .padStart(2, "0")}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.quantity + 1
                                                    )
                                                }
                                                className="px-3 py-1 hover:bg-gray-50"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right font-medium">
                                        ${item.price * item.quantity}
                                    </div>
                                </div>
                            ))}

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 justify-between mt-8">
                                <Button
                                    variant={"outline"}
                                    className="hover:bg-gray-100 text-black w-full md:w-[223px] h-[56px]"
                                >
                                    Return To Shop
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className="hover:bg-gray-100 text-black w-full md:w-[218px] h-[56px]"
                                >
                                    Update Cart
                                </Button>
                            </div>

                            {/* Coupon and Cart Total */}
                            <div className="grid gap-8 mt-8 md:grid-cols-2">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Coupon Code"
                                        value={couponCode}
                                        onChange={(e) =>
                                            setCouponCode(e.target.value)
                                        }
                                        className="w-full md:max-w-[200px]"
                                    />
                                    <Button className="bg-[#E94E4E] hover:bg-[#D43E3E] text-white">
                                        Apply Coupon
                                    </Button>
                                </div>

                                <div className="border rounded-lg p-6 ml-auto w-full max-w-md">
                                    <h2 className="text-lg font-semibold mb-4">
                                        Cart Total
                                    </h2>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between py-2 border-b">
                                            <span>Subtotal:</span>
                                            <span className="font-medium">
                                                ${subtotal}
                                            </span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b">
                                            <span>Shipping:</span>
                                            <span className="text-green-600">
                                                Free
                                            </span>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span>Total:</span>
                                            <span className="font-medium">
                                                ${subtotal}
                                            </span>
                                        </div>
                                    </div>
                                    <Button className="w-full mt-6 bg-[#E94E4E] hover:bg-[#D43E3E] text-white">
                                        Proceed to checkout
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-4">
                                Your cart is empty
                            </p>
                            <Button asChild>
                                <Link href="/shop">Continue Shopping</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
