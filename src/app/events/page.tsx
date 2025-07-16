import { Calendar, MapPin, Clock, Users, Search, Filter } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function EventsPage() {
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
                className="text-gray-700 hover:text-green-600"
              >
                Gallery
              </Link>
              <Link
                href="/events"
                className="text-green-800 hover:text-green-600 font-medium"
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
        {/* Header with cardamom theme */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-white to-green-100 rounded-2xl"></div>
          <div className="absolute top-4 left-4 w-16 h-16 opacity-15 animate-pulse">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Event cardamom"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12 opacity-20 animate-bounce">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Calendar cardamom"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative z-10 p-8 text-center">
            <div className="flex justify-center items-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Events"
                width={40}
                height={40}
              />
              <h1 className="text-3xl font-bold text-green-900 mx-4">
                Events & Updates
              </h1>
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Community"
                width={40}
                height={40}
              />
            </div>
            <p className="text-gray-600">
              Stay updated with our latest events, workshops, and important
              announcements
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search events..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="workshop">Workshops</SelectItem>
              <SelectItem value="meeting">Meetings</SelectItem>
              <SelectItem value="training">Training</SelectItem>
              <SelectItem value="conference">Conferences</SelectItem>
              <SelectItem value="announcement">Announcements</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Workshop cardamom"
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">
                      Workshop
                    </Badge>
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      alt="Training"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 25, 2024
                    </div>
                  </div>
                </div>
                <CardTitle className="text-green-800 flex items-center">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Processing"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Advanced Cardamom Processing Techniques
                </CardTitle>
                <CardDescription>
                  Learn modern processing methods to improve quality and
                  increase profits from cardamom cultivation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    10:00 AM - 4:00 PM
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Time"
                      width={16}
                      height={16}
                      className="ml-2"
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Ilam Community Hall, Ilam
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Location"
                      width={16}
                      height={16}
                      className="ml-2"
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    50 participants expected
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Community"
                      width={16}
                      height={16}
                      className="ml-2"
                    />
                  </div>
                  <Button className="w-full mt-4 bg-green-700 hover:bg-green-800 group">
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt="Register"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge className="bg-blue-100 text-blue-800">Meeting</Badge>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 30, 2024
                    </div>
                  </div>
                </div>
                <CardTitle className="text-green-800">
                  Quarterly Board Meeting
                </CardTitle>
                <CardDescription>
                  Review quarterly performance and discuss upcoming initiatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    2:00 PM - 5:00 PM
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    NEBM Headquarters, Kathmandu
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Board members only
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-blue-700 text-blue-700 hover:bg-blue-50 bg-transparent"
                  >
                    View Agenda
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Events */}
        <div>
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            Recent Events
          </h2>
          <div className="space-y-6">
            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge className="bg-purple-100 text-purple-800">
                    Training
                  </Badge>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 15, 2024
                    </div>
                  </div>
                </div>
                <CardTitle className="text-green-800">
                  Sustainable Farming Practices Workshop
                </CardTitle>
                <CardDescription>
                  A comprehensive workshop on sustainable cardamom farming
                  techniques and environmental conservation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    9:00 AM - 5:00 PM
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Taplejung Agricultural Center
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    75 participants attended
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  The workshop covered organic farming methods, pest management,
                  soil conservation, and climate-resilient practices.
                  Participants received certificates and resource materials.
                </p>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-700 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    View Photos
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge className="bg-blue-100 text-blue-800">Meeting</Badge>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 10, 2024
                    </div>
                  </div>
                </div>
                <CardTitle className="text-green-800">
                  Annual General Meeting 2024
                </CardTitle>
                <CardDescription>
                  Annual review of federation activities, financial reports, and
                  election of new board members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    10:00 AM - 4:00 PM
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Hotel Himalaya, Kathmandu
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    120 members attended
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  The AGM successfully concluded with the presentation of annual
                  reports, approval of budgets, and election of new executive
                  committee members. Key decisions were made regarding market
                  expansion and member benefits.
                </p>
                <div className="mt-4 space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-700 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    View Minutes
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-700 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    Download Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge className="bg-orange-100 text-orange-800">
                    Training
                  </Badge>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 5, 2024
                    </div>
                  </div>
                </div>
                <CardTitle className="text-green-800">
                  Quality Control and Grading Standards
                </CardTitle>
                <CardDescription>
                  Training session on international quality standards and proper
                  grading techniques for cardamom
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    1:00 PM - 6:00 PM
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Panchthar Training Center
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    45 participants attended
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  Expert trainers conducted hands-on sessions on quality
                  assessment, grading criteria, packaging standards, and export
                  requirements. Participants practiced with real cardamom
                  samples.
                </p>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-700 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    View Training Materials
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge className="bg-red-100 text-red-800">
                    Announcement
                  </Badge>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 1, 2024
                    </div>
                  </div>
                </div>
                <CardTitle className="text-green-800">
                  New Export Partnership Agreement
                </CardTitle>
                <CardDescription>
                  NEBM signs strategic partnership with international buyers for
                  direct cardamom exports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We are pleased to announce a new partnership agreement with
                  premium spice importers in Europe and North America. This
                  partnership will provide our members with direct access to
                  international markets, better pricing, and reduced
                  intermediary costs. The agreement is expected to benefit over
                  500 cardamom farmers across Nepal.
                </p>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-700 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    Read Full Announcement
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-green-700 text-green-700 hover:bg-green-50 bg-transparent"
          >
            Load More Events
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
