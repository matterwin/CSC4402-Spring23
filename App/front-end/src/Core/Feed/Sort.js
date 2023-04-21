import * as React from 'react';
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
  const [showReset, setShowReset] = React.useState(false);
  const setMovies = props.setMovies;
  const movies = props.movies;


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
        fetch('http://localhost:8000/api/movieControllerWithAvgTopol')
          .then(res => res.json())
          .then(json => setMovies(json))
          .catch(err => console.error(err));
        break;
      case names[1]:
        fetch('http://localhost:8000/api/movieControllerWithAvgAsc')
          .then(res => res.json())
          .then(json => setMovies(json))
          .catch(err => console.error(err));
        break;
      case names[2]:
        fetch('http://localhost:8000/api/movieControllerWithAvgDesc')
          .then(res => res.json())
          .then(json => setMovies(json))
          .catch(err => console.error(err));
        break;
      case names[3]:
        fetch('http://localhost:8000/api/movieControllerWithAvgReleaseDate')
          .then(res => res.json())
          .then(json => setMovies(json))
          .catch(err => console.error(err));
        break;
      default:
        console.error('invalid sort type!');
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setPersonName([...personName]);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleReset() {
    setShowReset(false);
    setPersonName([]);
  }

  return (
    <div className="feed-bar-actual">
      <div>
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
      </div>
      { showReset && 
        <div onClick={handleReset} className='reset'>
          <p>RESET</p>
        </div>
      }
    </div>
  );
}
