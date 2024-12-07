import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="relative flex-1">
          <div className="flex h-full items-center justify-center p-6">
            <Image
              src="/signup.png"
              alt="Shopping cart with phone and shopping bags"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side Sign up form */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 className="text-center text-3xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Enter your details below
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[400px]">
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                className="block w-full rounded-lg border-0 bg-background"
              />
              <Input
                type="text"
                placeholder="Email or Phone Number"
                className="block w-full rounded-lg border-0 bg-background"
              />
              <Input
                type="password"
                placeholder="Password"
                className="block w-full rounded-lg border-0 bg-background"
              />
              <Button className="w-full bg-[#E94E4E] hover:bg-[#D43E3E] text-white rounded-lg py-6">
                Create Account
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-lg py-6 flex items-center gap-2"
              >
                <FcGoogle className="w-5 h-5" />
                Sign up with Google
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/Login" className="text-[#E94E4E] hover:text-[#D43E3E] font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
