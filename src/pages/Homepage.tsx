import SearchSection from "@/components/SearchSection";
import AvailableTicketsInfoSection from "@/components/AvailableTicketsInfoSection";
import FilterSection from "@/components/FilterSection";
import TicketGrid from "@/components/TicketGrid";
import { useState } from "react";

const Homepage = () => {
  const [fiveByFiveGrid, setFiveByFiveGrid] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [sixBySixGrid, setSixBySixGrid] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);
  const [eightByEightGrid, setEightByEightGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const onSeatSelect1 = (id: string) => {
    setSelected1(!selected1);

    const row = parseInt(id.split("-")[0]);
    const col = parseInt(id.split("-")[1]);
    const tempArr = fiveByFiveGrid;

    tempArr[row][col] = tempArr[row][col] === 0 ? 1 : 0;
    setFiveByFiveGrid(tempArr);
  };

  const onSeatSelect2 = (id: string) => {
    setSelected2(!selected2);

    const row = parseInt(id.split("-")[0]);
    const col = parseInt(id.split("-")[1]);
    const tempArr = sixBySixGrid;

    tempArr[row][col] = tempArr[row][col] === 0 ? 1 : 0;
    setSixBySixGrid(tempArr);
  };

  const onSeatSelect3 = (id: string) => {
    setSelected3(!selected3);

    const row = parseInt(id.split("-")[0]);
    const col = parseInt(id.split("-")[1]);
    const tempArr = eightByEightGrid;

    tempArr[row][col] = tempArr[row][col] === 0 ? 1 : 0;
    setEightByEightGrid(tempArr);
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <SearchSection />
            <TicketGrid
              column={fiveByFiveGrid.length}
              sectionHeading="VIP Section"
              gridArray={fiveByFiveGrid}
              onSeatSelect={onSeatSelect1}
              selected={selected1}
            />
            <TicketGrid
              column={sixBySixGrid.length}
              sectionHeading="General Section"
              gridArray={sixBySixGrid}
              onSeatSelect={onSeatSelect2}
              selected={selected2}
            />
            <TicketGrid
              column={eightByEightGrid.length}
              sectionHeading="Economy Section"
              gridArray={eightByEightGrid}
              onSeatSelect={onSeatSelect3}
              selected={selected3}
            />
            <AvailableTicketsInfoSection />
          </div>

          <div className="lg:col-span-1">
            <FilterSection />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Homepage;
