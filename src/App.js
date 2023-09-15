import React, { useState, useEffect } from "react";
import Login from "./login";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);

    setMovies(data.Search);
  };
  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div className="app">
      <h1>iBOMMA 2.0</h1>
      <br></br>
      <h2>Where Quality and Clarity matters !</h2>
      <br></br>
      {user ? 
      (
        <div>
          <div className="search" >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies"
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>

          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      )
       : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
