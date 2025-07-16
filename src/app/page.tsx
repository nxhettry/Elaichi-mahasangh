import {
  ArrowRight,
  TrendingUp,
  Users,
  Calendar,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-green-800">NEBM</h1>
                <p className="text-xs text-green-600">
                  Nepal Elaichi Byabasahi Manasangh
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-green-800 hover:text-green-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/prices"
                className="text-gray-700 hover:text-green-600"
              >
                Daily Prices
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-green-600"
              >
                Gallery
              </Link>
              <Link
                href="/events"
                className="text-gray-700 hover:text-green-600"
              >
                Events
              </Link>
              <Link
                href="/organization"
                className="text-gray-700 hover:text-green-600"
              >
                Organization
              </Link>
              <Link
                href="/admin"
                className="text-gray-700 hover:text-green-600"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-green-700/90 z-10"></div>
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Cardamom plantation in Nepal hills"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating Cardamom Elements */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 opacity-20">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Cardamom pod"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-40 right-20 w-12 h-12 opacity-15">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Cardamom seeds"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-32 left-20 w-20 h-20 opacity-10">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Cardamom plant"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-20 right-10 w-14 h-14 opacity-20">
            <Image
              src="/placeholder.svg?height=56&width=56"
              alt="Cardamom flower"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="NEBM Logo with Cardamom"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Cardamom pod decoration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Nepal Elaichi Byabasahi Manasangh
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-4 drop-shadow-md">
              Federation of Large Cardamom Entrepreneurs Nepal
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Empowering cardamom entrepreneurs across Nepal through unity,
              innovation, and sustainable practices. Building a stronger future
              for our agricultural community.
            </p>

            {/* Cardamom-themed decorative elements */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Cardamom"
                  width={24}
                  height={24}
                />
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300"></div>
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Cardamom"
                  width={24}
                  height={24}
                />
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/prices">
                  View Daily Prices <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-800 bg-white/10 backdrop-blur-sm shadow-lg"
              >
                <Link href="/organization">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Cardamom pattern"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-20 right-20 w-24 h-24">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Cardamom pattern"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28">
            <Image
              src="/placeholder.svg?height=112&width=112"
              alt="Cardamom pattern"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Cardamom"
                  width={32}
                  height={32}
                />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Services
                </h2>
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Cardamom"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <p className="text-lg text-gray-600">
              Supporting cardamom entrepreneurs with essential tools and
              information
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Cardamom decoration"
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-green-800">
                      Daily Prices
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time cardamom market prices updated daily to help you
                  make informed business decisions.
                </CardDescription>
                <div className="mt-4 flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Premium cardamom"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-green-700 font-medium">
                    Premium Quality Tracking
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Cardamom decoration"
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ImageIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-green-800">Gallery</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore our photo gallery showcasing cardamom cultivation,
                  processing, and community events.
                </CardDescription>
                <div className="mt-4 flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Cardamom plantation"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-green-700 font-medium">
                    Cultivation Journey
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Cardamom decoration"
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-green-800">Events</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay updated with upcoming events, workshops, and important
                  announcements from our federation.
                </CardDescription>
                <div className="mt-4 flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Training"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-green-700 font-medium">
                    Expert Training
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Cardamom decoration"
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-green-800">
                      Organization
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn about our organizational structure, leadership team, and
                  dedicated members.
                </CardDescription>
                <div className="mt-4 flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Community"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-green-700 font-medium">
                    Strong Community
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Price Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background with cardamom pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-green-50"></div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Cardamom processing background"
            fill
            className="object-cover"
          />
        </div>

        {/* Floating cardamom elements */}
        <div className="absolute top-10 left-10 w-20 h-20 opacity-20 animate-bounce">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Cardamom pod"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-20 right-20 w-16 h-16 opacity-15 animate-pulse">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="Cardamom seeds"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 opacity-10 animate-bounce delay-500">
          <Image
            src="/placeholder.svg?height=96&width=96"
            alt="Cardamom plant"
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center items-center mb-8">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Cardamom"
              width={48}
              height={48}
            />
            <h2 className="text-3xl font-bold text-green-900 mx-4">
              Today{"'"}s Cardamom Price
            </h2>
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Cardamom"
              width={48}
              height={48}
            />
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 opacity-30">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Premium cardamom"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="Premium"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    Premium Grade
                  </h3>
                  <p className="text-3xl font-bold text-green-700">₹2,850</p>
                  <p className="text-sm text-gray-500">per kg</p>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 opacity-30">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Standard cardamom"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="Standard"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    Standard Grade
                  </h3>
                  <p className="text-3xl font-bold text-green-700">₹2,650</p>
                  <p className="text-sm text-gray-500">per kg</p>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 opacity-30">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Commercial cardamom"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      alt="Commercial"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    Commercial Grade
                  </h3>
                  <p className="text-3xl font-bold text-green-700">₹2,450</p>
                  <p className="text-sm text-gray-500">per kg</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-2">
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Clock"
                  width={20}
                  height={20}
                />
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Last updated: Today, 2:30 PM
                </Badge>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6">
            <Button
              asChild
              className="bg-green-700 hover:bg-green-800 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/prices">
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Chart"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                View Detailed Price History
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Events
            </h2>
            <p className="text-lg text-gray-600">
              Stay connected with our latest activities and announcements
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800">
                  Workshop
                </Badge>
                <CardTitle className="text-green-800">
                  Sustainable Farming Practices
                </CardTitle>
                <CardDescription>March 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join us for an interactive workshop on modern sustainable
                  cardamom farming techniques and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-800">
                  Meeting
                </Badge>
                <CardTitle className="text-green-800">
                  Annual General Meeting
                </CardTitle>
                <CardDescription>March 10, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Annual general meeting to discuss federation activities,
                  financial reports, and future plans.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <Badge className="w-fit bg-purple-100 text-purple-800">
                  Training
                </Badge>
                <CardTitle className="text-green-800">
                  Quality Control Training
                </CardTitle>
                <CardDescription>March 5, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive training session on cardamom quality control
                  standards and grading techniques.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-50 bg-transparent"
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NEBM</h3>
              <p className="text-green-200 mb-4">
                Nepal Elaichi Byabasahi Manasangh - Empowering cardamom
                entrepreneurs across Nepal.
              </p>
              <p className="text-green-300 text-sm">
                Building a sustainable future for our agricultural community.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-200">
                <li>
                  <Link href="/prices" className="hover:text-white">
                    Daily Prices
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/organization" className="hover:text-white">
                    Organization
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-green-200">
                <li>Market Price Updates</li>
                <li>Training Programs</li>
                <li>Quality Control</li>
                <li>Member Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-green-200">
                <p>Kathmandu, Nepal</p>
                <p>Phone: +977-1-XXXXXXX</p>
                <p>Email: info@nebm.org.np</p>
              </div>
            </div>
          </div>

          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
            <p>
              &copy; 2024 Nepal Elaichi Byabasahi Manasangh. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
