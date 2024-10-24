import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const FilterSection = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
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
                <SelectItem value="price_low">Price: Low to High</SelectItem>
                <SelectItem value="price_high">Price: High to Low</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </div>
  );
};

export default FilterSection;
