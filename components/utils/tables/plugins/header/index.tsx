import React from "react";
import { GlobalFilter } from "./GlobalFilter";

const Header = ({
  options,
  pageRows,
  data,
  preGlobalFilteredRows,
  setGlobalFilter,
  headerGroups,
  state,
}: {
  options: any;
  pageRows: any;
  data: any;
  newLeftButton?: any;
  setNewLeftButton?: any;
  newRightButton?: any;
  setNewRightButton?: any;
  preGlobalFilteredRows: any;
  setGlobalFilter: any;
  headerGroups: any;
  state: any;
}) => {
  return (
    <div className={`flex mb-4 justify-between`}>
      <GlobalFilter
        options={options}
        pageRows={pageRows}
        data={data}
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <div className="flex mr-3 items-center cursor-pointer">
        {headerGroups.map((headerGroup: any) =>
          headerGroup.headers.map((column: any) =>
            column.Filter ? (
              <div className="mt-2 ml-3 sm:mt-0" key={column.id}>
                {column.render("Filter")}
              </div>
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default Header;
