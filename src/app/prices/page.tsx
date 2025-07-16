import { TrendingUp, TrendingDown, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function PricesPage() {
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
                className="text-green-800 hover:text-green-600 font-medium"
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

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header with cardamom background */}
        <div className="mb-8 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600"></div>
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/placeholder.svg?height=200&width=800"
              alt="Cardamom market background"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating cardamom elements */}
          <div className="absolute top-4 left-8 w-12 h-12 opacity-30 animate-pulse">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Cardamom pod"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-4 right-8 w-16 h-16 opacity-25 animate-bounce">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Cardamom seeds"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Price chart with cardamom"
                width={48}
                height={48}
              />
              <h1 className="text-3xl font-bold mx-4">Daily Cardamom Prices</h1>
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Market cardamom"
                width={48}
                height={48}
              />
            </div>
            <p className="text-green-100 text-center">
              Real-time market prices updated throughout the day
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Calendar className="h-4 w-4 text-green-200" />
              <span className="text-sm text-green-200">
                Last updated: March 16, 2024 at 2:30 PM
              </span>
              <Image
                src="/placeholder.svg?height=16&width=16"
                alt="Fresh update"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        {/* Current Prices Grid with enhanced visuals */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white relative overflow-hidden group hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Premium cardamom pods"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-5">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Cardamom pattern"
                fill
                className="object-contain"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Premium cardamom"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <span>Premium Grade</span>
                  <TrendingUp className="h-4 w-4 text-green-600 inline ml-2" />
                </div>
              </CardTitle>
              <CardDescription className="flex items-center">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="Quality badge"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Highest quality cardamom - Export grade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2 mb-2">
                <div className="text-3xl font-bold text-green-700">₹2,850</div>
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Rupee with cardamom"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">per kg</p>
              <div className="flex items-center justify-between">
                <Badge className="bg-green-100 text-green-800">
                  +₹50 from yesterday
                </Badge>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Quality indicator"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs text-green-600">Premium</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white relative overflow-hidden group hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Standard cardamom pods"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-5">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Cardamom pattern"
                fill
                className="object-contain"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Standard cardamom"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <span>Standard Grade</span>
                  <TrendingUp className="h-4 w-4 text-green-600 inline ml-2" />
                </div>
              </CardTitle>
              <CardDescription className="flex items-center">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="Quality badge"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Good quality for export
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2 mb-2">
                <div className="text-3xl font-bold text-green-700">₹2,650</div>
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Rupee with cardamom"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">per kg</p>
              <div className="flex items-center justify-between">
                <Badge className="bg-green-100 text-green-800">
                  +₹30 from yesterday
                </Badge>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Quality indicator"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs text-green-600">Standard</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white relative overflow-hidden group hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Commercial cardamom pods"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-5">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Cardamom pattern"
                fill
                className="object-contain"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Commercial cardamom"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <span>Commercial Grade</span>
                  <TrendingDown className="h-4 w-4 text-red-600 inline ml-2" />
                </div>
              </CardTitle>
              <CardDescription className="flex items-center">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="Quality badge"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Standard commercial quality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2 mb-2">
                <div className="text-3xl font-bold text-green-700">₹2,450</div>
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Rupee with cardamom"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">per kg</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  -₹20 from yesterday
                </Badge>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/placeholder.svg?height=16&width=16"
                    alt="Quality indicator"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs text-green-600">Commercial</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Prices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Regional Market Prices
            </CardTitle>
            <CardDescription>
              Cardamom prices across different regions of Nepal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Market</TableHead>
                  <TableHead>Premium (₹/kg)</TableHead>
                  <TableHead>Standard (₹/kg)</TableHead>
                  <TableHead>Commercial (₹/kg)</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Ilam</TableCell>
                  <TableCell>Ilam Bazaar</TableCell>
                  <TableCell>₹2,900</TableCell>
                  <TableCell>₹2,700</TableCell>
                  <TableCell>₹2,500</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Taplejung</TableCell>
                  <TableCell>Phungling Market</TableCell>
                  <TableCell>₹2,850</TableCell>
                  <TableCell>₹2,650</TableCell>
                  <TableCell>₹2,450</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Panchthar</TableCell>
                  <TableCell>Phidim Bazaar</TableCell>
                  <TableCell>₹2,800</TableCell>
                  <TableCell>₹2,600</TableCell>
                  <TableCell>₹2,400</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sankhuwasabha</TableCell>
                  <TableCell>Khandbari Market</TableCell>
                  <TableCell>₹2,820</TableCell>
                  <TableCell>₹2,620</TableCell>
                  <TableCell>₹2,420</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Solukhumbu</TableCell>
                  <TableCell>Salleri Bazaar</TableCell>
                  <TableCell>₹2,780</TableCell>
                  <TableCell>₹2,580</TableCell>
                  <TableCell>₹2,380</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Closed</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Price History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-800">
              7-Day Price History
            </CardTitle>
            <CardDescription>
              Track price movements over the past week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Premium Grade</TableHead>
                  <TableHead>Standard Grade</TableHead>
                  <TableHead>Commercial Grade</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Mar 16, 2024</TableCell>
                  <TableCell>₹2,850</TableCell>
                  <TableCell>₹2,650</TableCell>
                  <TableCell>₹2,450</TableCell>
                  <TableCell>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 15, 2024</TableCell>
                  <TableCell>₹2,800</TableCell>
                  <TableCell>₹2,620</TableCell>
                  <TableCell>₹2,470</TableCell>
                  <TableCell>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 14, 2024</TableCell>
                  <TableCell>₹2,750</TableCell>
                  <TableCell>₹2,600</TableCell>
                  <TableCell>₹2,450</TableCell>
                  <TableCell>
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 13, 2024</TableCell>
                  <TableCell>₹2,780</TableCell>
                  <TableCell>₹2,630</TableCell>
                  <TableCell>₹2,480</TableCell>
                  <TableCell>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mar 12, 2024</TableCell>
                  <TableCell>₹2,720</TableCell>
                  <TableCell>₹2,580</TableCell>
                  <TableCell>₹2,420</TableCell>
                  <TableCell>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
