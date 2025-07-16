import { Award, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function OrganizationPage() {
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
                className="text-gray-700 hover:text-green-600"
              >
                Events
              </Link>
              <Link
                href="/organization"
                className="text-green-800 hover:text-green-600 font-medium"
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            Our Organization
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about our organizational structure, leadership team, and
            dedicated members who work tirelessly to support cardamom
            entrepreneurs across Nepal.
          </p>
        </div>

        {/* About Section */}
        <Card className="mb-12 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">
              About NEBM
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              The Nepal Elaichi Byabasahi Manasangh (NEBM) was established in
              2010 as a federation of cardamom entrepreneurs dedicated to
              promoting sustainable cardamom cultivation, processing, and
              marketing in Nepal. Our organization serves as a bridge between
              farmers, processors, and markets, ensuring fair prices and quality
              standards.
            </p>
            <p className="text-gray-700">
              With over 1,200 active members across the cardamom-growing regions
              of Nepal, we provide essential services including market
              information, technical training, quality certification, and
              advocacy for farmer rights. Our mission is to empower cardamom
              entrepreneurs through unity, innovation, and sustainable
              practices.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">1,200+</div>
                <p className="text-gray-600">Active Members</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">15</div>
                <p className="text-gray-600">Districts Covered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">14</div>
                <p className="text-gray-600">Years of Service</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Executive Committee */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-8 text-center">
            Executive Committee
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200 text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="President"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-green-800">
                  Ram Bahadur Limbu
                </CardTitle>
                <CardDescription>President</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-green-100 text-green-800">
                  2022-2025
                </Badge>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Ilam, Nepal
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    president@nebm.org.np
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Vice President"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-green-800">Sita Devi Rai</CardTitle>
                <CardDescription>Vice President</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-green-100 text-green-800">
                  2022-2025
                </Badge>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Taplejung, Nepal
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    vicepresident@nebm.org.np
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Secretary"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-green-800">Pemba Sherpa</CardTitle>
                <CardDescription>General Secretary</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-green-100 text-green-800">
                  2022-2025
                </Badge>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Solukhumbu, Nepal
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    secretary@nebm.org.np
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Treasurer"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-green-800">
                  Krishna Bahadur Tamang
                </CardTitle>
                <CardDescription>Treasurer</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-green-100 text-green-800">
                  2022-2025
                </Badge>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Panchthar, Nepal
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    treasurer@nebm.org.np
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Joint Secretary"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-green-800">Dawa Lama</CardTitle>
                <CardDescription>Joint Secretary</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-green-100 text-green-800">
                  2022-2025
                </Badge>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Sankhuwasabha, Nepal
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    jointsec@nebm.org.np
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Member"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-green-800">
                  Ang Dorje Sherpa
                </CardTitle>
                <CardDescription>Executive Member</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-green-100 text-green-800">
                  2022-2025
                </Badge>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Dolakha, Nepal
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
                    member1@nebm.org.np
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regional Coordinators */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-8 text-center">
            Regional Coordinators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Eastern Region
                </CardTitle>
                <CardDescription>Ilam, Jhapa, Panchthar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Tanka Prasad Limbu</p>
                    <p className="text-sm text-gray-600">
                      Regional Coordinator
                    </p>
                    <p className="text-sm text-gray-500">eastern@nebm.org.np</p>
                  </div>
                  <Separator />
                  <div className="text-sm text-gray-600">
                    <p>Members: 450</p>
                    <p>Districts: 3</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Central Region
                </CardTitle>
                <CardDescription>
                  Taplejung, Sankhuwasabha, Solukhumbu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Mingma Sherpa</p>
                    <p className="text-sm text-gray-600">
                      Regional Coordinator
                    </p>
                    <p className="text-sm text-gray-500">central@nebm.org.np</p>
                  </div>
                  <Separator />
                  <div className="text-sm text-gray-600">
                    <p>Members: 520</p>
                    <p>Districts: 3</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Western Region
                </CardTitle>
                <CardDescription>
                  Dolakha, Sindhupalchok, Ramechhap
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Laxmi Tamang</p>
                    <p className="text-sm text-gray-600">
                      Regional Coordinator
                    </p>
                    <p className="text-sm text-gray-500">western@nebm.org.np</p>
                  </div>
                  <Separator />
                  <div className="text-sm text-gray-600">
                    <p>Members: 230</p>
                    <p>Districts: 3</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-8 text-center">
            Advisory Board
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">
                  Dr. Rajesh Kumar Shrestha
                </CardTitle>
                <CardDescription>Agricultural Expert & Advisor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    Former Director, Department of Agriculture, Government of
                    Nepal
                  </p>
                  <p className="text-sm text-gray-700">
                    PhD in Agricultural Sciences, 25+ years experience in spice
                    cultivation
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    National Agriculture Excellence Award 2020
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">
                  Ms. Kamala Devi Gurung
                </CardTitle>
                <CardDescription>Marketing & Export Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    Former CEO, Nepal Trade Promotion Center
                  </p>
                  <p className="text-sm text-gray-700">
                    MBA in International Business, Expert in spice export
                    markets
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    Export Excellence Award 2019
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 text-center">
              Contact Information
            </CardTitle>
            <CardDescription className="text-center">
              Get in touch with our organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-green-800 mb-4">
                  Head Office
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">
                        Nepal Elaichi Byabasahi Manasangh
                      </p>
                      <p className="text-gray-600">
                        Putalisadak, Kathmandu-44600
                      </p>
                      <p className="text-gray-600">Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-gray-700">
                      +977-1-4123456, +977-1-4123457
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-gray-700">info@nebm.org.np</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday - Thursday:</span>
                    <span className="text-gray-700">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Friday:</span>
                    <span className="text-gray-700">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-700">Closed</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <h3 className="font-semibold text-green-800 mb-2">
                  Emergency Contact
                </h3>
                <p className="text-gray-700">+977-9841234567 (24/7)</p>
              </div>
            </div>
          </CardContent>
        </Card>
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
