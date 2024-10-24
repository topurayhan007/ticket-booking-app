import SelectedSeatsGrid from "./SelectedSeatsGrid";
import { Button } from "./ui/button";

interface SelectedSeatsSectionProps {
  arr1: number[][];
  arr2: number[][];
  arr3: number[][];
}
const SelectedSeatsSection = ({
  arr1,
  arr2,
  arr3,
}: SelectedSeatsSectionProps) => {
  // Price List
  const vipSeatPrice = 50;
  const generalSeatPrice = 30;
  const economySeatPrice = 15;

  // Each category seat count
  const vipSeats = arr1.flat().reduce((acc, curr) => acc + curr, 0);
  const generalSeats = arr2.flat().reduce((acc, curr) => acc + curr, 0);
  const economySeats = arr3.flat().reduce((acc, curr) => acc + curr, 0);

  const totalBookedSeats = vipSeats + generalSeats + economySeats;
  const totalPrice =
    vipSeatPrice * vipSeats +
    generalSeatPrice * generalSeats +
    economySeatPrice * economySeats;

  const onCheckout = () => {
    if (totalBookedSeats === 0) {
      window.alert("Please select your desired seats to continue!");
      return;
    } else {
      window.alert("Order Confirmed");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
        Selected Seats: {totalBookedSeats}
      </h2>

      <SelectedSeatsGrid sectionName="VIP" arr={arr1} seats={vipSeats} />

      <SelectedSeatsGrid
        sectionName="General"
        arr={arr2}
        seats={generalSeats}
      />

      <SelectedSeatsGrid
        sectionName="Economy"
        arr={arr3}
        seats={economySeats}
      />

      <h4 className="mt-5 text-xl font-semibold">Total: ${totalPrice}</h4>
      <Button className="w-full mt-4" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default SelectedSeatsSection;
