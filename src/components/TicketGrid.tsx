/* eslint-disable @typescript-eslint/no-unused-vars */
interface TicketGridProps {
  column: number;
  sectionHeading: string;
  gridArray: number[][];
  onSeatSelect: (id: string) => void;
  selected: boolean;
}

const TicketGrid = ({
  column,
  sectionHeading,
  gridArray,
  onSeatSelect,
  selected,
}: TicketGridProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {sectionHeading}
      </h2>

      <div
        className={`grid ${
          column === 5
            ? "grid-cols-5"
            : column === 6
            ? "grid-cols-6"
            : column === 8
            ? "grid-cols-8"
            : ""
        } gap-5 justify-items-center cursor-pointer`}
      >
        {gridArray.map((row, rowIndex) =>
          row.map((elem, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => onSeatSelect(`${rowIndex}-${colIndex}`)}
              className={`w-10 h-10 p-2 text-center rounded ${
                elem === 1 ? "bg-black text-white" : "bg-zinc-200 text-zinc-400"
              }`}
            >
              <p>{colIndex + 1}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TicketGrid;
