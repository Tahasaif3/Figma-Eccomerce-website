import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import  Navbar  from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="relative flex-1">
          <div className="flex h-full items-center justify-center p-6">
            <Image
              src="/signup.png"
              alt="Signup image"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 className="text-center text-3xl font-semibold tracking-tight">
              Log in to Exclusive
            </h1>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Enter your details below
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[400px]">
            <form className="space-y-4">
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
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#E94E4E] focus:ring-[#E94E4E]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#E94E4E] hover:text-[#D43E3E]"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button className="w-full bg-[#E94E4E] hover:bg-[#D43E3E] text-white rounded-lg py-6">
                Log in
              </Button>
              
              <Button
                variant="outline"
                className="w-full rounded-lg py-6 flex items-center gap-2"
              >
                <FcGoogle className="w-5 h-5" />
                Sign in with Google
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don`t have an account?{" "}
              <Link href="/Signup" className="text-[#E94E4E] hover:text-[#D43E3E] font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

