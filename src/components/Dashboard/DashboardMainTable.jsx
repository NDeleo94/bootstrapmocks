import React from "react";

const DashboardMainTable = ({ title }) => {
  const headers = [
    {
      id: 1,
      headerText: "#",
      selector: (row) => row.propA,
    },
    {
      id: 2,
      headerText: "Header",
      selector: (row) => row.propB,
    },
    {
      id: 3,
      headerText: "Header",
      selector: (row) => row.propC,
    },
    {
      id: 4,
      headerText: "Header",
      selector: (row) => row.propD,
    },
    {
      id: 5,
      headerText: "Header",
      selector: (row) => row.propE,
    },
  ];

  const rows = [
    {
      id: 1,
      propA: "1,001",
      propB: "random",
      propC: "data",
      propD: "placeholder",
      propE: "text",
    },
    {
      id: 2,
      propA: "1,002",
      propB: "placeholder",
      propC: "irrelevant",
      propD: "visual",
      propE: "layout",
    },
    {
      id: 3,
      propA: "1,003",
      propB: "data",
      propC: "rich",
      propD: "dashboard",
      propE: "tabular",
    },
    {
      id: 4,
      propA: "1,003",
      propB: "information",
      propC: "placeholder",
      propD: "illustrative",
      propE: "data",
    },
    {
      id: 5,
      propA: "1,004",
      propB: "text",
      propC: "random",
      propD: "layout",
      propE: "dashboard",
    },
    {
      id: 6,
      propA: "1,005",
      propB: "dashboard",
      propC: "irrelevant",
      propD: "text",
      propE: "placeholder",
    },
    {
      id: 7,
      propA: "1,006",
      propB: "dashboard",
      propC: "illustrative",
      propD: "rich",
      propE: "data",
    },
    {
      id: 8,
      propA: "1,007",
      propB: "placeholder",
      propC: "tabular",
      propD: "information",
      propE: "irrelevant",
    },
    {
      id: 9,
      propA: "1,008",
      propB: "random",
      propC: "data",
      propD: "placeholder",
      propE: "text",
    },
    {
      id: 10,
      propA: "1,009",
      propB: "placeholder",
      propC: "irrelevant",
      propD: "visual",
      propE: "layout",
    },
    {
      id: 11,
      propA: "1,010",
      propB: "data",
      propC: "rich",
      propD: "dashboard",
      propE: "tabular",
    },
    {
      id: 12,
      propA: "1,011",
      propB: "information",
      propC: "placeholder",
      propD: "illustrative",
      propE: "data",
    },
    {
      id: 13,
      propA: "1,012",
      propB: "text",
      propC: "placeholder",
      propD: "layout",
      propE: "dashboard",
    },
    {
      id: 14,
      propA: "1,013",
      propB: "dashboard",
      propC: "irrelevant",
      propD: "text",
      propE: "visual",
    },
    {
      id: 15,
      propA: "1,014",
      propB: "dashboard",
      propC: "illustrative",
      propD: "rich",
      propE: "data",
    },
    {
      id: 16,
      propA: "1,015",
      propB: "random",
      propC: "tabular",
      propD: "information",
      propE: "text",
    },
  ];

  return (
    <>
      {title ? <h2>{title}</h2> : ""}
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              {headers.map((header) => (
                <th scope="col" key={header.id}>
                  {header.headerText}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                {headers.map((h) => (
                  <td key={h.id}>{h.selector(r)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardMainTable;
