import React from "react";

const DashboardMainTable = ({ title }) => {
  const data = {
    headers: [
      {
        id: 1,
        headerText: "#",
      },
      {
        id: 2,
        headerText: "Header",
      },
      {
        id: 3,
        headerText: "Header",
      },
      {
        id: 4,
        headerText: "Header",
      },
      {
        id: 5,
        headerText: "Header",
      },
    ],
    rows: [
      {
        id: 1,
        rowData: [
          {
            id: 1,
            info: "1,001",
          },
          {
            id: 2,
            info: "random",
          },
          {
            id: 3,
            info: "data",
          },
          {
            id: 4,
            info: "placeholder",
          },
          {
            id: 5,
            info: "text",
          },
        ],
      },
      {
        id: 2,
        rowData: [
          {
            id: 1,
            info: "1,002",
          },
          {
            id: 2,
            info: "placeholder",
          },
          {
            id: 3,
            info: "irrelevant",
          },
          {
            id: 4,
            info: "visual",
          },
          {
            id: 5,
            info: "layout",
          },
        ],
      },
      {
        id: 3,
        rowData: [
          {
            id: 1,
            info: "1,003",
          },
          {
            id: 2,
            info: "data",
          },
          {
            id: 3,
            info: "rich",
          },
          {
            id: 4,
            info: "dashboard",
          },
          {
            id: 5,
            info: "tabular",
          },
        ],
      },
      {
        id: 4,
        rowData: [
          {
            id: 1,
            info: "1,003",
          },
          {
            id: 2,
            info: "information",
          },
          {
            id: 3,
            info: "placeholder",
          },
          {
            id: 4,
            info: "illustrative",
          },
          {
            id: 5,
            info: "data",
          },
        ],
      },
      {
        id: 5,
        rowData: [
          {
            id: 1,
            info: "1,004",
          },
          {
            id: 2,
            info: "text",
          },
          {
            id: 3,
            info: "random",
          },
          {
            id: 4,
            info: "layout",
          },
          {
            id: 5,
            info: "dashboard",
          },
        ],
      },
      {
        id: 6,
        rowData: [
          {
            id: 1,
            info: "1,005",
          },
          {
            id: 2,
            info: "dashboard",
          },
          {
            id: 3,
            info: "irrelevant",
          },
          {
            id: 4,
            info: "text",
          },
          {
            id: 5,
            info: "placeholder",
          },
        ],
      },
      {
        id: 7,
        rowData: [
          {
            id: 1,
            info: "1,006",
          },
          {
            id: 2,
            info: "dashboard",
          },
          {
            id: 3,
            info: "illustrative",
          },
          {
            id: 4,
            info: "rich",
          },
          {
            id: 5,
            info: "data",
          },
        ],
      },
      {
        id: 8,
        rowData: [
          {
            id: 1,
            info: "1,007",
          },
          {
            id: 2,
            info: "placeholder",
          },
          {
            id: 3,
            info: "tabular",
          },
          {
            id: 4,
            info: "information",
          },
          {
            id: 5,
            info: "irrelevant",
          },
        ],
      },
      {
        id: 9,
        rowData: [
          {
            id: 1,
            info: "1,008",
          },
          {
            id: 2,
            info: "random",
          },
          {
            id: 3,
            info: "data",
          },
          {
            id: 4,
            info: "placeholder",
          },
          {
            id: 5,
            info: "text",
          },
        ],
      },
      {
        id: 10,
        rowData: [
          {
            id: 1,
            info: "1,009",
          },
          {
            id: 2,
            info: "placeholder",
          },
          {
            id: 3,
            info: "irrelevant",
          },
          {
            id: 4,
            info: "visual",
          },
          {
            id: 5,
            info: "layout",
          },
        ],
      },
      {
        id: 11,
        rowData: [
          {
            id: 1,
            info: "1,010",
          },
          {
            id: 2,
            info: "data",
          },
          {
            id: 3,
            info: "rich",
          },
          {
            id: 4,
            info: "dashboard",
          },
          {
            id: 5,
            info: "tabular",
          },
        ],
      },
      {
        id: 12,
        rowData: [
          {
            id: 1,
            info: "1,011",
          },
          {
            id: 2,
            info: "information",
          },
          {
            id: 3,
            info: "placeholder",
          },
          {
            id: 4,
            info: "illustrative",
          },
          {
            id: 5,
            info: "data",
          },
        ],
      },
      {
        id: 13,
        rowData: [
          {
            id: 1,
            info: "1,012",
          },
          {
            id: 2,
            info: "text",
          },
          {
            id: 3,
            info: "placeholder",
          },
          {
            id: 4,
            info: "layout",
          },
          {
            id: 5,
            info: "dashboard",
          },
        ],
      },
      {
        id: 14,
        rowData: [
          {
            id: 1,
            info: "1,013",
          },
          {
            id: 2,
            info: "dashboard",
          },
          {
            id: 3,
            info: "irrelevant",
          },
          {
            id: 4,
            info: "text",
          },
          {
            id: 5,
            info: "visual",
          },
        ],
      },
      {
        id: 15,
        rowData: [
          {
            id: 1,
            info: "1,014",
          },
          {
            id: 2,
            info: "dashboard",
          },
          {
            id: 3,
            info: "illustrative",
          },
          {
            id: 4,
            info: "rich",
          },
          {
            id: 5,
            info: "data",
          },
        ],
      },
      {
        id: 16,
        rowData: [
          {
            id: 1,
            info: "1,015",
          },
          {
            id: 2,
            info: "random",
          },
          {
            id: 3,
            info: "tabular",
          },
          {
            id: 4,
            info: "information",
          },
          {
            id: 5,
            info: "text",
          },
        ],
      },
    ],
  };
  return (
    <>
      <h2>{title}</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              {data.headers.map((header) => (
                <th scope="col" key={header.id}>
                  {header.headerText}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.id}>
                {row.rowData?.map((d) => (
                  <td key={d.id}>{d.info}</td>
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
