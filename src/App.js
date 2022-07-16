function App() {
  return (
    <div className="container">
      <h1>Budget App</h1>
      <form>
        <div className="inputWrapper">
          <label htmlFor="expense">Expense</label>
          <input type="text" id="expense" />
        </div>
        <div className="inputWrapper">
          <label htmlFor="income">Income</label>
          <input type="text" id="income" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
