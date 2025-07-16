import { Search, Filter, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-xl font-bold text-green-800">NEBM</h1>
                <p className="text-xs text-green-600">
                  Nepal Elaichi Byabasahi Manasangh
                </p>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600">
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
                className="text-green-800 hover:text-green-600 font-medium"
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

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header with cardamom background */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl opacity-50"></div>
          <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Cardamom decoration"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-4 left-4 w-12 h-12 opacity-15">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Cardamom seeds"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative z-10 p-8 text-center">
            <div className="flex justify-center items-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Camera with cardamom"
                width={40}
                height={40}
              />
              <h1 className="text-3xl font-bold text-green-900 mx-4">
                Photo Gallery
              </h1>
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Cardamom plant"
                width={40}
                height={40}
              />
            </div>
            <p className="text-gray-600">
              Explore our collection of cardamom cultivation, processing, and
              community events
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search photos..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="cultivation">Cultivation</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="events">Events</SelectItem>
              <SelectItem value="training">Training</SelectItem>
              <SelectItem value="meetings">Meetings</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Photo 1 - Update with cardamom imagery */}
          <Card className="group overflow-hidden border-green-200 hover:shadow-lg transition-all relative">
            <div className="absolute top-2 right-2 z-10 w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Cardamom badge"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Lush cardamom plantation in terraced hills of Ilam"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors" />
                {/* Cardamom overlay icon */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Cardamom plant icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-green-100 text-green-800">
                  Cultivation
                </Badge>
                <h3 className="font-semibold text-green-800 mb-1 flex items-center">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Plant"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Cardamom Plantation
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Beautiful cardamom plants growing in the misty hills of Ilam
                  district
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    March 10, 2024
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Quality"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-green-600">
                      Premium Quality
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 2 */}
          <Card className="group overflow-hidden border-green-200 hover:shadow-lg transition-all relative">
            <div className="absolute top-2 right-2 z-10 w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Cardamom badge"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Cardamom processing facility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors" />
                {/* Cardamom overlay icon */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Cardamom plant icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-blue-100 text-blue-800">
                  Processing
                </Badge>
                <h3 className="font-semibold text-green-800 mb-1 flex items-center">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Factory"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Processing Facility
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Modern cardamom processing and drying facility
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    March 8, 2024
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Efficiency"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-green-600">
                      Efficient Processing
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 3 */}
          <Card className="group overflow-hidden border-green-200 hover:shadow-lg transition-all relative">
            <div className="absolute top-2 right-2 z-10 w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Cardamom badge"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Annual general meeting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors" />
                {/* Cardamom overlay icon */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Cardamom plant icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-purple-100 text-purple-800">
                  Events
                </Badge>
                <h3 className="font-semibold text-green-800 mb-1 flex items-center">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Meeting"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Annual General Meeting
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Members gathering for the annual meeting
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    March 5, 2024
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Participation"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-green-600">
                      High Participation
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 4 */}
          <Card className="group overflow-hidden border-green-200 hover:shadow-lg transition-all relative">
            <div className="absolute top-2 right-2 z-10 w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Cardamom badge"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Cardamom harvesting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors" />
                {/* Cardamom overlay icon */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Cardamom plant icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-green-100 text-green-800">
                  Cultivation
                </Badge>
                <h3 className="font-semibold text-green-800 mb-1 flex items-center">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Harvest"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Harvesting Season
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Farmers harvesting fresh cardamom pods
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    March 3, 2024
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Freshness"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-green-600">
                      Fresh Harvest
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 5 */}
          <Card className="group overflow-hidden border-green-200 hover:shadow-lg transition-all relative">
            <div className="absolute top-2 right-2 z-10 w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Cardamom badge"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Training workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors" />
                {/* Cardamom overlay icon */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Cardamom plant icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-orange-100 text-orange-800">
                  Training
                </Badge>
                <h3 className="font-semibold text-green-800 mb-1 flex items-center">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Education"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Training Workshop
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Quality control training for members
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    February 28, 2024
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Quality"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-green-600">
                      Quality Control
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 6 */}
          <Card className="group overflow-hidden border-green-200 hover:shadow-lg transition-all relative">
            <div className="absolute top-2 right-2 z-10 w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Cardamom badge"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Cardamom drying process"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors" />
                {/* Cardamom overlay icon */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Cardamom plant icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-blue-100 text-blue-800">
                  Processing
                </Badge>
                <h3 className="font-semibold text-green-800 mb-1 flex items-center">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Drying"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Drying Process
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Traditional cardamom drying methods
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    February 25, 2024
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Tradition"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-green-600">
                      Traditional Methods
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 7 */}
          <Card className="group overflow-hidden border-green-200 hover:shadow-lg transition-all relative">
            <div className="absolute top-2 right-2 z-10 w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Cardamom badge"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Member meeting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors" />
                {/* Cardamom overlay icon */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Cardamom plant icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-indigo-100 text-indigo-800">
                  Meetings
                </Badge>
                <h3 className="font-semibold text-green-800 mb-1 flex items-center">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Region"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Regional Meeting
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Regional coordinators meeting in Taplejung
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    February 20, 2024
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Coordination"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-green-600">
                      Regional Coordination
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 8 */}
          <Card className="group overflow-hidden border-green-200 hover:shadow-lg transition-all relative">
            <div className="absolute top-2 right-2 z-10 w-8 h-8 opacity-60 group-hover:opacity-80 transition-opacity">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Cardamom badge"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Cardamom flowers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors" />
                {/* Cardamom overlay icon */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Cardamom plant icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-green-100 text-green-800">
                  Cultivation
                </Badge>
                <h3 className="font-semibold text-green-800 mb-1 flex items-center">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Flower"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Cardamom Flowers
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Beautiful cardamom flowers in bloom
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    February 15, 2024
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Bloom"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-green-600">
                      Beautiful Bloom
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-green-700 text-green-700 hover:bg-green-50 bg-transparent"
          >
            Load More Photos
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NEBM</h3>
              <p className="text-green-200 mb-4">
                Nepal Elaichi Byabasahi Manasangh - Empowering cardamom
                entrepreneurs across Nepal.
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
