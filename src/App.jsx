import "./App.css";
import logo from "./logo-shecodes.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main></main>
        <Dictionary />
        <footer className="App-footer">Coded by NZ</footer>
      </div>
    </div>
  );
}
