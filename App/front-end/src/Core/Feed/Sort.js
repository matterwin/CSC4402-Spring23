import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import './Sort.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  disableScrollLock: true,
  position: 'absolute',
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxwidth: 30,
      borderRadius: 6,     
      border: '1.8px solid #1976d2',
      arginTop: "8px",
      width: "fit-content",
      transformOrigin: "right top",
      marginRight: "0px",
      marginLeft: "auto",
    },
    elevation: 0,
  },
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
};

const names = [
  'A-Z',
  'Highest Rating',
  'Lowest Rating',
  'Newest',
];

const genres = [
  'Action',
  'Adventure',
  'Drama',
  'Thriller'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [genreName, setGenreName] = React.useState([]);
  const [showReset, setShowReset] = React.useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const setMovies = props.setMovies;

  React.useEffect(() => {
    fetch('http://localhost:8000/api/movieControllerFeed')
      .then(res => res.json())
      .then(json => setMovies(json))
      .catch(err => console.error(err));
  }, [setMovies]);

  const handleChange = (event) => {
    setShowReset(true);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

    const sortType = event.target.value;

    switch(sortType) {
      case names[0]:
        setSelectedSort(names[0]);
        if(selectedGenre === null) {
          fetch('http://localhost:8000/api/movieControllerWithAvgTopol')
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        else {
          fetch(`http://localhost:8000/api/movieControllerWithAvgTopolPlusGenre?genre=${selectedGenre}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        break;
      case names[1]:
        setSelectedSort(names[1]);
        if(selectedGenre === null) {
          fetch('http://localhost:8000/api/movieControllerWithAvgAsc')
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        else {
          fetch(`http://localhost:8000/api/movieControllerWithAvgAscPlusGenre?genre=${selectedGenre}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        break;
      case names[2]:
        setSelectedSort(names[2]);
        if(selectedGenre === null) {
          fetch('http://localhost:8000/api/movieControllerWithAvgDesc')
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        else {
          fetch(`http://localhost:8000/api/movieControllerWithAvgDescPlusGenre?genre=${selectedGenre}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        break;
      case names[3]:
        setSelectedSort(names[3]);
        if(selectedGenre === null) {
          fetch('http://localhost:8000/api/movieControllerWithAvgReleaseDate')
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        else {
          fetch(`http://localhost:8000/api/movieControllerWithAvgReleaseDatePlusGenre?genre=${selectedGenre}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        break;
      default:
        console.error('invalid sort type!');
    }
  };

  function handleSortPlusGenre(genre) {
    switch(selectedSort) {
      case 'A-Z':
          fetch(`http://localhost:8000/api/movieControllerWithAvgTopolPlusGenre?genre=${genre}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        break;
      case 'Highest Rating':
          fetch(`http://localhost:8000/api/movieControllerWithAvgAscPlusGenre?genre=${genre}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        break;
      case 'Lowest Rating':
          fetch(`http://localhost:8000/api/movieControllerWithAvgDescPlusGenre?genre=${genre}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        break;
      case 'Newest':
          fetch(`http://localhost:8000/api/movieControllerWithAvgReleaseDatePlusGenre?genre=${genre}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        break;
      default:
        console.error('invalid sort and genre types');
    }
  }

  const handleChangeGenre = (event) => {
    setShowReset(true);
    const {
      target: { value },
    } = event;
    setGenreName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

    const sortType = event.target.value;

    switch(sortType) {
      case genres[0]: 
        setSelectedGenre(genres[0]);
        if(selectedSort === null) {
          fetch(`http://localhost:8000/api/movieControllerWithAvgGenre?genre=${genres[0]}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        else {
          handleSortPlusGenre(genres[0]);
        }
        break;
      case genres[1]:
        setSelectedGenre(genres[1]);
        if(selectedSort === null) {
          fetch(`http://localhost:8000/api/movieControllerWithAvgGenre?genre=${genres[1]}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        else {
          handleSortPlusGenre(genres[1]);
        }
        break;
      case genres[2]:
        setSelectedGenre(genres[2]);
        if(selectedSort === null) {
          fetch(`http://localhost:8000/api/movieControllerWithAvgGenre?genre=${genres[2]}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        else {
          handleSortPlusGenre(genres[2]);
        }
        break;
      case genres[3]:
        setSelectedGenre(genres[3]);
        if(selectedSort === null) {
          fetch(`http://localhost:8000/api/movieControllerWithAvgGenre?genre=${genres[3]}`)
            .then(res => res.json())
            .then(json => setMovies(json))
            .catch(err => console.error(err));
        }
        else {
          handleSortPlusGenre(genres[3]);
        }
        break;
      default:
        console.error('invalid genre type!');
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setPersonName([...personName]);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setGenreName([...genreName]);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleReset() {
    setShowReset(false);
    setPersonName([]);
    setGenreName([]);
    setSelectedSort(null);
    setSelectedGenre(null);
    fetch('http://localhost:8000/api/movieControllerFeed')
      .then(res => res.json())
      .then(json => setMovies(json))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    const feedBarActual = document.querySelector('.feed-bar-actual');
    const handleScroll = () => {
      const currentPosition = feedBarActual.getBoundingClientRect().top;

      if (currentPosition <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='feed-nav-div'>
    <div className={`feed-bar-actual ${isSticky ? 'sticky' : ''}`}>
      <div className="sort-bar">
        <FormControl sx={{ m: 0.1, width: 100, fontSize: 14, borderBottom: '0px'}} size='small'>
          <InputLabel id="demo-multiple-chip-label" sx={{ fontWeight: '600' }}>SORT</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            value={personName}
            onChange={(change) => handleChange(change)}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
            sx={{ textAlign: 'left' }}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 0.1, width: 100, fontSize: 14, borderBottom: '0px'}} size='small'>
          <InputLabel id="demo-multiple-chip-label" sx={{ fontWeight: '600' }} >GENRE&nbsp;</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            value={genreName}
            onChange={(change) => handleChangeGenre(change)}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
            sx={{ textAlign: 'left' }}
          >
            {genres.map((genre) => (
              <MenuItem
                key={genre}
                value={genre}
                style={getStyles(genre, genreName, theme)}
              >
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      { showReset && 
        <div onClick={handleReset} className='reset'>
          <p>RESET</p>
        </div>
      }
    </div></div>
  );
}
