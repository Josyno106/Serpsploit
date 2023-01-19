import Cards from "../components/Dashboard/Cards";
import ResultsTable from "../components/Dashboard/ResultsTable";
import ThemeChanger from "../components/ThemeChanger";

const Dashboard = () => {
  return (
    <>
      <ThemeChanger />
      <Cards />
      <ResultsTable />
    </>
  );
};

export default Dashboard;
