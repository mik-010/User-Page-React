import Header from "../components/header/Header.jsx";
import Welcome from "../components/welcomeMessage/Welcome.jsx";
import Dashboard from "../components/dashboard/Dashboard.jsx";

export default function User() {

  return (
    <>
      <Header logoUrl="/sparkles.svg" />
      <div className="main">
        <Welcome />
        <Dashboard />
      </div>
    </>
  );
}