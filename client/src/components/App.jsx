import React, { useState, useEffect } from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';
import AddInput from './AddInput.jsx';
import axios from 'axios';

export const App = () => { // example of named import
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [toWatch, setToWatch] = useState('all');

  // const updateMovies = function(movie) {
  //   setMovies([...movies, {id: 100, title: movie, watched: 1}]);
  // }

  const getMovies = function () {
    return axios.get('/movies')
  }

  // useEffect - will run once component has been mounted takes in cb and dependency - tells react when to re-run
  useEffect(() => {
    getMovies()
      .then(({ data }) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createMovie = function (movie) { // for any type of post, put, or delete request, you want to do a get request after
    axios.post('/movies', { title: movie, watched: 1 })
      .then(function (res) {
        getMovies()
          .then(({ data }) => {
            setMovies(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  const changeWatched = function(obj) {
    const { id, title, watched } = obj;

    axios.put(`/movies/${id}`, { title, watched })
      .then(() => {
        getMovies()
          .then(({ data }) => {
            setMovies(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  let filtered = [...movies].filter((movie) => {
    return movie.title.toLowerCase().includes(query.toLowerCase())
  })
  console.log('in App filtered movies are', filtered)

  let alreadyWatched = [...movies].filter((movie) => {
    return movie.watched === 1;
  })
  console.log('in App alreadyWatched movies are', alreadyWatched)

  let notWatched = [...movies].filter((movie) => {
    return movie.watched === 0;
  })
  console.log('in App notWatched movies are', notWatched)


  return (
    <div>
      <h1>Movies</h1>
      <div>
        <AddInput handleAdd={createMovie} />
      </div>
      <div>
        <Search setQuery={setQuery} />
      </div>
      <div>
        <button style={{ backgroundColor: 'green', color: 'white', fontWeight: '700' }} onClick={() => { setToWatch('watched') }}>Watched</button>
        <button style={{ backgroundColor: 'white', color: 'green', fontWeight: '700' }} onClick={() => { setToWatch('unwatched') }}>To Watch</button>
        <div>
          {toWatch === 'watched' ? (
            <MovieList movies={alreadyWatched} changeWatched={changeWatched} />
          ) : toWatch === 'unwatched' ? (
            <MovieList movies={notWatched} changeWatched={changeWatched} />
          ) : (<MovieList movies={filtered} changeWatched={changeWatched} />
          )}
        </div>
      </div>
    </div>

  );
};

// no default due to changing to named import