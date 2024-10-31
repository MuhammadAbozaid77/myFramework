//

import { tbody, td } from "framer-motion/client";
import { createContext } from "react";

//
const TableContext = createContext();

export default function Table({ children }) {
  return (
    <TableContext.Provider value={{}}>
      <table className=" bg-red-100 w-[100%] rounded-md overflow-hidden">
        {children}
      </table>
    </TableContext.Provider>
  );
}
function Header({ children }) {
  return <thead className=" bg-gray-200">{children}</thead>;
}
function HeadCell({ children }) {
  return <th className="border border-red-200 p-2">{children}</th>;
}

function Body({ children }) {
  return <tbody>{children}</tbody>;
}
function Row({ children }) {
  return <>{children}</>;
}

function RowCell({ children }) {
  return <td className="border border-blue-200 text-center p-4">{children}</td>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.HeadCell = HeadCell;
Table.RowCell = RowCell;
