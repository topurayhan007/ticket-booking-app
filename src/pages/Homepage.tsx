import { useState } from "react";
import { Calendar, Filter, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Homepage = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Search for Tickets
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="from">From</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="from"
                      placeholder="Departure City"
                      className="pl-9"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="to">To</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="to"
                      placeholder="Arrival City"
                      className="pl-9"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-2 top-3 h-5 w-5 text-gray-400" />
                    <Input id="date" type="date" className="pl-9" />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <Button className="w-full">
                    <Search className="mr-2 h-4 w-4" /> Search Tickets
                  </Button>
                </div>
              </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Available Tickets</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((ticket) => (
                  <div
                    key={ticket}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4"
                  >
                    <div>
                      <h3 className="font-semibold">New York to London</h3>
                      <p className="text-sm text-gray-600">
                        Departs: 10:00 AM | Arrives: 10:00 PM
                      </p>
                      <p className="text-sm text-gray-600">Duration: 7h 00m</p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <p className="font-semibold text-lg">$499</p>
                      <Button size="sm">Select</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="space-y-6">
                <div>
                  <Label>Price Range</Label>
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                <div>
                  <Label>Airlines</Label>
                  <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all">All Airlines</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delta" id="delta" />
                      <Label htmlFor="delta">Delta</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="united" id="united" />
                      <Label htmlFor="united">United</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="sort">Sort By</Label>
                  <Select>
                    <SelectTrigger id="sort">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price_low">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price_high">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="duration">Duration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">
                  <Filter className="mr-2 h-4 w-4" /> Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Homepage;
