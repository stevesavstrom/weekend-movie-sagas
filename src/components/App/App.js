import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import MovieForm from "../MovieForm/MovieForm";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <header className="App-header">
          <img className="logo" src="images/logo.png"></img>
        </header>

        {/* Navigation */}
        <nav className="navigation">
          <div className="movieList">
            <Link to="/" className="link">
              Movie List
            </Link>
          </div>

          <div className="addMovie">
            <Link to="/movieform" className="link">
              Add Movie
            </Link>
          </div>
        </nav>

        {/* MovieList page */}
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details/:id" exact>
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path="/movieform" exact>
          <MovieForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
