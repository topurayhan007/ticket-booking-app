import { Button } from "@/components/ui/button";

const AvailableTicketsInfoSection = () => {
  return (
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
  );
};

export default AvailableTicketsInfoSection;
