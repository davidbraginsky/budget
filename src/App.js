import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [transactionList, setTransactionList] = useState([]);

  return (
    <div className="container">
      <h1>Budget App</h1>
      <Link to="/transaction">Add Transaction</Link>
    </div>
  );
}

export default App;
