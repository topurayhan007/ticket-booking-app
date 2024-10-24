import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search } from "lucide-react";

const SearchSection = () => {
  return (
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Search for Tickets</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="from">From</Label>
            <div className="relative">
              <MapPin className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
              <Input id="from" placeholder="Departure City" className="pl-9" />
            </div>
          </div>
          <div>
            <Label htmlFor="to">To</Label>
            <div className="relative">
              <MapPin className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
              <Input id="to" placeholder="Arrival City" className="pl-9" />
            </div>
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <div className="relative">
              <Calendar className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
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
  );
};

export default SearchSection;
