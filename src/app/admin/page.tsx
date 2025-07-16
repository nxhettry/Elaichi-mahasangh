import {
  Plus,
  Edit,
  Trash2,
  Upload,
  Eye,
  Calendar,
  ImageIcon,
  Users,
  TrendingUp,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminPage() {
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
                className="text-gray-700 hover:text-green-600"
              >
                Organization
              </Link>
              <Link
                href="/admin"
                className="text-green-800 hover:text-green-600 font-medium"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage website content, events, gallery, and prices
          </p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Events
              </CardTitle>
              <Calendar className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">24</div>
              <p className="text-xs text-gray-600">+3 from last month</p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Gallery Photos
              </CardTitle>
              <ImageIcon className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">156</div>
              <p className="text-xs text-gray-600">+12 from last week</p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Members
              </CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">1,247</div>
              <p className="text-xs text-gray-600">+15 from last month</p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Price Updates
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">Daily</div>
              <p className="text-xs text-gray-600">Last updated 2 hours ago</p>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tabs */}
        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="prices">Prices</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
          </TabsList>

          {/* Events Management */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-green-900">
                Manage Events
              </h2>
              <Button className="bg-green-700 hover:bg-green-800">
                <Plus className="h-4 w-4 mr-2" />
                Add New Event
              </Button>
            </div>

            {/* Add Event Form */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Add New Event</CardTitle>
                <CardDescription>
                  Create a new event or announcement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="event-title">Event Title</Label>
                    <Input id="event-title" placeholder="Enter event title" />
                  </div>
                  <div>
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="meeting">Meeting</SelectItem>
                        <SelectItem value="training">Training</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="announcement">
                          Announcement
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="event-date">Event Date</Label>
                    <Input id="event-date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="event-time">Event Time</Label>
                    <Input id="event-time" type="time" />
                  </div>
                  <div>
                    <Label htmlFor="event-location">Location</Label>
                    <Input id="event-location" placeholder="Event location" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="event-description">Description</Label>
                  <Textarea
                    id="event-description"
                    placeholder="Enter event description"
                    rows={4}
                  />
                </div>
                <Button className="bg-green-700 hover:bg-green-800">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </CardContent>
            </Card>

            {/* Events List */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Recent Events</CardTitle>
                <CardDescription>
                  Manage existing events and announcements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Advanced Processing Techniques
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          Workshop
                        </Badge>
                      </TableCell>
                      <TableCell>March 25, 2024</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800">
                          Upcoming
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Quarterly Board Meeting
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800">
                          Meeting
                        </Badge>
                      </TableCell>
                      <TableCell>March 30, 2024</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800">
                          Upcoming
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Sustainable Farming Workshop
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-purple-100 text-purple-800">
                          Training
                        </Badge>
                      </TableCell>
                      <TableCell>March 15, 2024</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          Completed
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Management */}
          <TabsContent value="gallery" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-green-900">
                Manage Gallery
              </h2>
              <Button className="bg-green-700 hover:bg-green-800">
                <Upload className="h-4 w-4 mr-2" />
                Upload Photos
              </Button>
            </div>

            {/* Upload Form */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">
                  Upload New Photos
                </CardTitle>
                <CardDescription>Add photos to the gallery</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="photo-upload">Select Photos</Label>
                  <Input
                    id="photo-upload"
                    type="file"
                    multiple
                    accept="image/*"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="photo-title">Photo Title</Label>
                    <Input id="photo-title" placeholder="Enter photo title" />
                  </div>
                  <div>
                    <Label htmlFor="photo-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cultivation">Cultivation</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="events">Events</SelectItem>
                        <SelectItem value="training">Training</SelectItem>
                        <SelectItem value="meetings">Meetings</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="photo-description">Description</Label>
                  <Textarea
                    id="photo-description"
                    placeholder="Enter photo description"
                    rows={3}
                  />
                </div>
                <Button className="bg-green-700 hover:bg-green-800">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photos
                </Button>
              </CardContent>
            </Card>

            {/* Gallery Grid */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Recent Photos</CardTitle>
                <CardDescription>Manage uploaded photos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <div key={i} className="relative group">
                      <div className="aspect-square bg-green-100 rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                        <Button size="sm" variant="secondary">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Price Management */}
          <TabsContent value="prices" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-green-900">
                Manage Prices
              </h2>
              <Button className="bg-green-700 hover:bg-green-800">
                <Plus className="h-4 w-4 mr-2" />
                Update Prices
              </Button>
            </div>

            {/* Price Update Form */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">
                  Update Daily Prices
                </CardTitle>
                <CardDescription>
                  Update current market prices for cardamom
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="premium-price">Premium Grade (₹/kg)</Label>
                    <Input
                      id="premium-price"
                      type="number"
                      placeholder="2850"
                    />
                  </div>
                  <div>
                    <Label htmlFor="standard-price">
                      Standard Grade (₹/kg)
                    </Label>
                    <Input
                      id="standard-price"
                      type="number"
                      placeholder="2650"
                    />
                  </div>
                  <div>
                    <Label htmlFor="commercial-price">
                      Commercial Grade (₹/kg)
                    </Label>
                    <Input
                      id="commercial-price"
                      type="number"
                      placeholder="2450"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="market-location">Market Location</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select market" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ilam">Ilam Bazaar</SelectItem>
                        <SelectItem value="taplejung">
                          Phungling Market
                        </SelectItem>
                        <SelectItem value="panchthar">Phidim Bazaar</SelectItem>
                        <SelectItem value="sankhuwasabha">
                          Khandbari Market
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="price-date">Date</Label>
                    <Input id="price-date" type="date" />
                  </div>
                </div>
                <Button className="bg-green-700 hover:bg-green-800">
                  <Plus className="h-4 w-4 mr-2" />
                  Update Prices
                </Button>
              </CardContent>
            </Card>

            {/* Price History */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Price History</CardTitle>
                <CardDescription>Recent price updates</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Market</TableHead>
                      <TableHead>Premium</TableHead>
                      <TableHead>Standard</TableHead>
                      <TableHead>Commercial</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Mar 16, 2024</TableCell>
                      <TableCell>Ilam Bazaar</TableCell>
                      <TableCell>₹2,850</TableCell>
                      <TableCell>₹2,650</TableCell>
                      <TableCell>₹2,450</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mar 15, 2024</TableCell>
                      <TableCell>Taplejung Market</TableCell>
                      <TableCell>₹2,800</TableCell>
                      <TableCell>₹2,620</TableCell>
                      <TableCell>₹2,470</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Members Management */}
          <TabsContent value="members" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-green-900">
                Manage Members
              </h2>
              <Button className="bg-green-700 hover:bg-green-800">
                <Plus className="h-4 w-4 mr-2" />
                Add Member
              </Button>
            </div>

            {/* Add Member Form */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Add New Member</CardTitle>
                <CardDescription>
                  Register a new federation member
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="member-name">Full Name</Label>
                    <Input id="member-name" placeholder="Enter member name" />
                  </div>
                  <div>
                    <Label htmlFor="member-email">Email</Label>
                    <Input
                      id="member-email"
                      type="email"
                      placeholder="member@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="member-phone">Phone</Label>
                    <Input id="member-phone" placeholder="+977-XXXXXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="member-district">District</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ilam">Ilam</SelectItem>
                        <SelectItem value="taplejung">Taplejung</SelectItem>
                        <SelectItem value="panchthar">Panchthar</SelectItem>
                        <SelectItem value="sankhuwasabha">
                          Sankhuwasabha
                        </SelectItem>
                        <SelectItem value="solukhumbu">Solukhumbu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="member-type">Membership Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="farmer">Farmer</SelectItem>
                        <SelectItem value="processor">Processor</SelectItem>
                        <SelectItem value="trader">Trader</SelectItem>
                        <SelectItem value="cooperative">Cooperative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="bg-green-700 hover:bg-green-800">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Member
                </Button>
              </CardContent>
            </Card>

            {/* Members List */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">
                  Member Directory
                </CardTitle>
                <CardDescription>Manage federation members</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>District</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Ram Bahadur Limbu
                      </TableCell>
                      <TableCell>Ilam</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          Farmer
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Sita Devi Rai
                      </TableCell>
                      <TableCell>Taplejung</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800">
                          Processor
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Pemba Sherpa
                      </TableCell>
                      <TableCell>Solukhumbu</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-100 text-purple-800">
                          Trader
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
