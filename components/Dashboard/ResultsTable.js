import { COLUMNS } from "./COLUMNS.JS";
import { useMemo } from "react";
import { useTable } from "react-table";

const Mock_Data = [
  {
    id: "1",
    keyword: "Essay Hooks",
    current_pos: 245,
    prev_pos: 3,
  },
  {
    id: "2",
    keyword: "Essay Hooks Essay ",
    current_pos: 245,
    prev_pos: 3,
  },
  {
    id: "3",
    keyword: "Essay Hooks",
    current_pos: 298,
    prev_pos: 3,
  },
  {
    id: "4",
    keyword: "Essay Hooks",
    current_pos: 232,
    prev_pos: 3,
  },
  {
    id: "5",
    keyword: "Essay Hooks",
    current_pos: 2,
    prev_pos: 3,
  },
];

const ResultsTable = () => {
  const COLS = useMemo(() => COLUMNS, []);
  const DATA = useMemo(() => Mock_Data, []);
  const tableInstance = useTable({
    columns: COLS,
    data: DATA,
  });

  return (
    <>
      <div className="w-full lg:px-24">
        <div className=" relative max-w-7xl mx-auto  text-red-500 my-10 px-8 md:px-8 lg:px-8">
          {/* Here goes the results table */}
          <h2>Hello there</h2>
        </div>
      </div>
    </>
  );
};

export default ResultsTable;
