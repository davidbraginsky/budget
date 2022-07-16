import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [transactionList, setTransactionList] = useState([]);

  return (
    <div className="container">
      <nav className="nav">
        <div className="sidebarIcon"></div>
        <p className="nav__title">Home</p>
      </nav>
      <Link to="/transaction">Add Transaction</Link>
    </div>
  );
}

export default App;
