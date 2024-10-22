import { useState } from "react";
import { Calendar, Filter, MapPin, Menu, Search } from "lucide-react";
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
    <div className="min-h-screen bg-gray-100">
      
    </div>
  );
};
export default Homepage;
