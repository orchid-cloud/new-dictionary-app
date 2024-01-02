import './App.css';
import logo from './logo.jpg';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main></main>
        <Dictionary defaultKeyword="sun" />
        <footer className="App-footer">Coded by NZ</footer>
      </div>
    </div>
  );
}
