import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="sidebarIcon"></div>
        <p className="nav__title">Home</p>
      </nav>
      <section>
        <h1>List of Wallets</h1>
      </section>
      <Link to="/transaction">Add Transaction</Link>
    </div>
  );
}

export default App;
