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

  if(!movieNames) {
    return (
      <Loading />
    );
  }

  const handleMovieSelection = (_event, value) => {
    props.onMovieSelection(value.id);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={movieNames}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300, backgroundColor: '#fff', borderRadius: '5px', outline: 'none' }}
      renderInput={(params) => <TextField {...params} placeholder='Search movie'/>}
      onChange={handleMovieSelection}
      ListboxProps={{ style: { maxHeight: '12rem' } }}
    />
  );
}
