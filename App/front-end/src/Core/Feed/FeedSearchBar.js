import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Loading from '../Loading/Loading';
import './Feed.css'

export default function FeedSearchBar() {
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

    const handleMovieSelection = (event, value) => {
        // console.log(props)
        var index = movieNames.indexOf(value);
        // console.log(index);
        // props.onMovieSelection(++index);
        console.log(++index);
      };

    return (
        <div className='test-div'>
            <Stack spacing={2} >
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    onChange={handleMovieSelection}
                    options={movieNames}
                    renderInput={(params) => <TextField {...params} placeholder='Find movie'/>}
                    sx={{
                        width: "100%",
                        backgroundColor: '#fff', 
                        borderRadius: '5%', 
                        outline: 'none',
                        border: 'none'
                    }}
                />
            </Stack>
        </div>
    );
}