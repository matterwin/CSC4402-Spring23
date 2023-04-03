import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Loading from '../Loading/Loading';

export default function SearchMovie(props) {
  const [movieNames, setMovieNames] = useState(undefined);

  useEffect(() => {
    fetch('http://localhost:8000/api/movieControllerName')
      .then(result => result.json())
      .then(json => setMovieNames(json))
      .catch(err => console.error(err));
  }, []);

  // console.log(movieNames);

  if(!movieNames) {
    return (
      <Loading />
    );
  }

  const handleMovieSelection = (event, value) => {
    // console.log(props)
    var index = movieNames.indexOf(value);
    // console.log(index);
    props.onMovieSelection(++index);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={movieNames}
      sx={{ width: 300, backgroundColor: '#fff', borderRadius: '5px', outline: 'none' }}
      renderInput={(params) => <TextField {...params} placeholder='Movie'/>}
      onChange={handleMovieSelection}
    />
  );
}
