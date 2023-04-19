import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Loading from '../Loading/Loading';
import './Feed.css';
import { useNavigate } from "react-router-dom";

export default function FeedSearchBar() {
    const [movieNames, setMovieNames] = useState(undefined);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      fetch('http://localhost:8000/api/movieControllerName')
        .then(result => result.json())
        .then(json => setMovieNames(json))
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if(index === 0);
        else {
        setTimeout(() => {
            navigate(`/Feed/Movie?id=${index}`);
            window.location.reload();
            }, 0);
        }    
    },[index, navigate])

    if(!movieNames) {
        return (
          <Loading />
        );
    }

    const handleMovieSelection = (event, value) => {
        var i = movieNames.indexOf(value);
        setIndex(++i);
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
                        borderRadius: '5px', 
                        outline: 'none',
                        border: '1px solid black'
                    }}
                />
            </Stack>
        </div>
    );
}