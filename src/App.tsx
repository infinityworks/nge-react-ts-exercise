import Background from "./assets/site-logo.svg";
import PaginatedEstablishmentsTable from "./components/PaginatedEstablishmentsTable";

const logoStyle: { [key: string]: string | number } = {
  width: "640px",
  height: "48px",
  background: `transparent url(${Background}) no-repeat center`,
  margin: "20px auto",
};

const App = () => (
  <div>
    <header style={logoStyle} />
    <PaginatedEstablishmentsTable />
    <footer>
      <div>
        <p>
          <span className='accent'>Accenture Next Gen Engineering</span>
          <span> - Tech Test</span>
        </p>
      </div>
    </footer>
  </div>
);

export default App;
