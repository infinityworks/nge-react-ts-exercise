import { useState, useEffect, useCallback } from "react";
import EstablishmentsTable from "./EstablishmentsTable";
import EstablishmentsTableNavigation from "./EstablishmentsTableNavigation";
import { getEstablishmentRatings } from "../api/ratings";

type ApiError = {
  message: string;
};

type Establishment = {
  [key: string]: string;
};

const tableStyle = {
  background: "rgba(51, 51, 51, 0.9)",
  padding: "10px",
  width: "640px",
  margin: "50px auto",
  color: "white",
};

const PaginatedEstablishmentsTable = () => {
  const [error, setError] = useState<ApiError>();
  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageCount] = useState(100);

  const fetchData = useCallback(async () => {
    try {
      const data = await getEstablishmentRatings(pageNum);
      setEstablishments(data.establishments);
    } catch (e) {
      setError(e as ApiError);
    }
  }, [pageNum]);

  useEffect(() => {
    fetchData();
  }, [fetchData, pageNum]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div style={tableStyle}>
        <h2>Food Hygiene Ratings</h2>
        <EstablishmentsTable establishments={establishments} />
        <EstablishmentsTableNavigation
          pageNum={pageNum}
          pageCount={pageCount}
          onPreviousPage={() => pageNum > 1 && setPageNum(pageNum - 1)}
          onNextPage={() => pageNum < pageCount && setPageNum(pageNum + 1)}
        />
      </div>
    );
  }
};

export default PaginatedEstablishmentsTable;
