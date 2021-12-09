import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Coins from "./components/Coins";

const App = () => {
  return (
      <Router>
          <Header />
          <main role="main">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-12">
                          <Coins />
                      </div>
                  </div>
              </div>
          </main>
      </Router>
  );
}

export default App;
