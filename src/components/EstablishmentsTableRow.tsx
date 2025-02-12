type EstablishmentsTableRowProps = {
  establishment: { [key: string]: string } | null | undefined;
};

const EstablishmentsTableRow = ({
  establishment,
}: EstablishmentsTableRowProps) => (
  <tr>
    <td>{establishment?.BusinessName}</td>
    <td>{establishment?.RatingValue}</td>
  </tr>
);

export default EstablishmentsTableRow;
