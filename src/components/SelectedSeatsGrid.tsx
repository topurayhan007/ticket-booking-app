interface SelectedSeatsGridProps {
  sectionName: string;
  arr: number[][];
  seats: number;
}

const SelectedSeatsGrid = ({
  sectionName,
  arr,
  seats,
}: SelectedSeatsGridProps) => {
  const rowLetters = [..."abcdefghijklmnopqrstuvwxyz".split("")];

  return (
    <div className={`${seats === 0 ? "hidden" : "flex"} mt-5 items-center`}>
      <h4 className="text-base text-zinc-400 font-medium me-2">
        {sectionName} Seats:{" "}
      </h4>
      <div className="overflow-x-auto">
        <div className="min-w-max flex gap-5">
          {seats &&
            arr.map((row, rowIndex) =>
              row.map((col, colIndex) =>
                col === 1 ? (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className="w-10 h-10 bg-zinc-200 text-zinc-400 rounded p-2 uppercase"
                  >
                    <p>
                      {rowLetters.slice(rowIndex, rowIndex + 1)}
                      {colIndex + 1}{" "}
                    </p>
                  </div>
                ) : (
                  ""
                )
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default SelectedSeatsGrid;
