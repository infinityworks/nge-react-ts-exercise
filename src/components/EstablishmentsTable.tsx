import React from "react";
import EstablishmentsTableRow from "./EstablishmentsTableRow";

type EstablishmentsTableProps = {
  establishments: { [key: string]: string }[] | null | undefined;
};

const headerStyle: { [key: string]: string | number } = {
  paddingBottom: "10px",
  textAlign: "left",
  fontSize: "20px",
};

const EstablishmentsTable = ({ establishments }: EstablishmentsTableProps) => (
  <table>
    <tbody>
      <tr>
        <th style={headerStyle}>Business Name</th>
        <th style={headerStyle}>Rating Value</th>
      </tr>
      {establishments &&
        establishments?.map(
          (
            establishment: { [key: string]: string } | null | undefined,
            index: React.Key | null | undefined
          ) => (
            <EstablishmentsTableRow key={index} establishment={establishment} />
          )
        )}
    </tbody>
  </table>
);

export default EstablishmentsTable;
