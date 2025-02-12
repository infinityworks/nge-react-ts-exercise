type EstablishmentsTableNavigationProps = {
  pageNum: number;
  pageCount: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

const buttonStyle = {
  margin: "0 5px",
};

const EstablishmentsTableNavigation = ({
  pageNum,
  pageCount,
  onPreviousPage,
  onNextPage,
}: EstablishmentsTableNavigationProps) => {
  return (
    <nav>
      {
        <button
          type='button'
          style={buttonStyle}
          disabled={pageNum <= 1}
          onClick={onPreviousPage}
        >
          -
        </button>
      }
      {pageNum}
      {
        <button
          type='button'
          style={buttonStyle}
          disabled={pageNum >= pageCount}
          onClick={onNextPage}
        >
          +
        </button>
      }
    </nav>
  );
};

export default EstablishmentsTableNavigation;
