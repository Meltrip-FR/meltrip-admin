//imports Packages
import React, { useState, useEffect, useRef, Fragment } from "react";
import router from "next/router";
import {
  useTable,
  useRowSelect,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

//imports Plugins Components react-table
import Header from "./plugins/header";
import Pagination from "./plugins/pagination";

//imports Icons (SVG)
import { SortIcon, SortUpIcon, SortDownIcon } from "./plugins/shared/Icons";

const Tables = ({ fetchData, columns, options }: any) => {
  const expanderBody = useRef<string>();
  const [expanded, setExpanded] = useState<boolean>(false);

  const [id, setId] = useState<string>();
  const [data, setData] = useState<any>(fetchData);
  const [render, setRender] = useState<any>(0);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [newLeftButton, setNewLeftButton] = useState<boolean>(false);
  const [newRightButton, setNewRightButton] = useState<boolean>(false);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    rows,
    preGlobalFilteredRows,
    setGlobalFilter,
  }: any = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );
  const pageRows = rows.slice(0, page.pageSize);
  useEffect(() => {
    setPageSize(50);
    loadData();
  }, [render]);

  const loadData = () => {};

  const toggleExpander = (e: any, uid: any) => {
    if (!expanded) {
      setExpanded(true);
    } else if (expanderBody && id !== uid) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  const mouseDownHandler = (e: any, row: any) => {
    if (e.button === 1) {
      if (options.link.pathName) {
        const res = options?.link?.inFieldName
          ? row.original[options.link.fieldName][options?.link?.inFieldName]
          : row.original[options?.link?.fieldName];
        window.open(options.link.pathName + "/" + res, "_blank");
      }
    }
  };

  const count = preGlobalFilteredRows.length;
  return (
    <div>
      {options.header.button.activated ? (
        <Header
          options={options}
          pageRows={pageRows}
          data={data}
          newLeftButton={newLeftButton}
          setNewLeftButton={setNewLeftButton}
          newRightButton={newRightButton}
          setNewRightButton={setNewRightButton}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          headerGroups={headerGroups}
          state={state}
        />
      ) : (
        <Header
          options={options}
          pageRows={pageRows}
          data={data}
          newLeftButton={newLeftButton}
          setNewLeftButton={setNewLeftButton}
          newRightButton={newRightButton}
          setNewRightButton={setNewRightButton}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          headerGroups={headerGroups}
          state={state}
        />
      )}
      <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 mt-5 mb-5">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="border border-gray-200 rounded-md shadow ">
            <table
              className="w-full divide-y divide-gray-200"
              {...getTableProps()}
            >
              <thead>
                {headerGroups.map((headerGroup: any, index: any) => (
                  <tr
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map((column: any, key: any) => {
                      return (
                        <th
                          key={key}
                          scope="col"
                          className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps(
                            options.sort.activated &&
                              options.sort.names.map((e: any) => {
                                return column.getSortByToggleProps();
                              })
                          )}
                        >
                          <div className="flex items-center justify-between">
                            {column.render("Header")}
                            <span>
                              {options.sort.activated &&
                                options.sort.names.map((e: any, i: any) => {
                                  return column
                                    .render("Header")
                                    .includes(
                                      e.toUpperCase() ===
                                        column.render("Header")
                                    ) ? null : column.isSorted ? (
                                    column.isSortedDesc ? (
                                      <SortDownIcon
                                        key={i}
                                        className="w-4 h-4 text-gray-400"
                                      />
                                    ) : (
                                      <SortUpIcon
                                        key={i}
                                        className="w-4 h-4 text-gray-400"
                                      />
                                    )
                                  ) : (
                                    <SortIcon
                                      key={i}
                                      className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100"
                                    />
                                  );
                                })}
                            </span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {count === 0 ? (
                  <tr>
                    <td colSpan={7}>
                      {errorMessage && (
                        <div className="flex align-center w-full justify-center items-center">
                          <div className="loader bg-white flex">
                            <h6 className="h-10 mt-5">{errorMessage}</h6>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ) : (
                  page.map((row: any, k: any) => {
                    prepareRow(row);
                    return (
                      <Fragment key={k}>
                        <tr
                          {...row.getRowProps()}
                          className={`hover:${
                            options?.link?.color
                              ? options?.link?.color
                              : "bg-gray-100 cursor-pointer"
                          }`}
                          onMouseDown={(e: any) => {
                            e.stopPropagation();
                            mouseDownHandler(e, row);
                          }}
                          onClick={(e: any) => {
                            if (options.section === "users") {
                              e.stopPropagation();
                              toggleExpander(e, row.original.uid);
                              setId(row.original.uid);
                            } else if (options.link.pathName) {
                              const res = options?.link?.inFieldName
                                ? row.original[options.link.fieldName][
                                    options?.link?.inFieldName
                                  ]
                                : row.original[options?.link?.fieldName];

                              if (e.metaKey) {
                                window.open(
                                  options.link.pathName + "/" + res,
                                  "_blank"
                                );
                              } else {
                                router.push(options.link.pathName + "/" + res);
                              }
                            }
                          }}
                        >
                          {row.cells.map((cell: any, secondKey: any) => {
                            return (
                              <td
                                key={secondKey}
                                {...cell.getCellProps()}
                                className="px-6 py-4 relative cursor-pointer"
                              >
                                {cell.column.Cell.name === "defaultRenderer" ? (
                                  <div className="text-sm text-gray-500">
                                    {cell.render("Cell")}
                                  </div>
                                ) : (
                                  cell.render("Cell")
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      </Fragment>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        state={state}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageOptions={pageOptions}
        setPageSize={setPageSize}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
      />
    </div>
  );
};
export default Tables;
