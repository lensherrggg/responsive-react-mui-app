import { useContext } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';

import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

const content = {
  english: {
    search: 'Search',
    flag: '😎'
  },
  french: {
    search: "Chercher",
    flag: "😍"
  },
  spanish: {
    search: "Buscar",
    flag: "🤠"
  }
}

const Navbar = () => {
  const theme = useTheme();

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { search, flag } = content[language];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            sx={{ mr: 1 }}
          >
            <span>{flag}</span>
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            color='inherit'
            sx={{ 
              display: 'none',
              [theme.breakpoints.up('sm')]: {
                display: 'block'
              }
            }}
          >
            App title
          </Typography>
          <Switch onChange={toggleTheme}/>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
           <SearchIconWrapper>
            <SearchIcon />
           </SearchIconWrapper>
           <StyledInputBase placeholder={`${search}...`} />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;