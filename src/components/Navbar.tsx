import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">TopuTravels</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            My Bookings
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Support
          </a>
        </nav>
        <Button variant="ghost" className="md:hidden">
          <Menu />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
