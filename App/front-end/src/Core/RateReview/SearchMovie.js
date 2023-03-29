import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Loading from '../Loading/Loading';

export default function ComboBox() {
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

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={movieNames}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
