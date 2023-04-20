import { useContext } from 'react';
import { 
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select ,
  Box,
  Avatar
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LockOutlined } from '@mui/icons-material';

import { LanguageContext } from './contexts/LanguageContext';

const words = {
  english: {
    signIn: "Sign In",
    email: "Email Address",
    password: "Password",
    remember: "Remember Me"
  },
  french: {
    signIn: "Se Connecter",
    email: "Adresse Électronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame"
  }
};

const Form = () => {
  const theme = useTheme();

  const { language, changeLanguage } = useContext(LanguageContext);
  const { email, signIn, password, remember } = words[language];
  return (
    <Box component='main'
      sx={{
        width: 'auto',
        display: 'block',
        ml: theme.spacing(3),
        mr: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          width: 400,
          ml: 'auto',
          mr: 'auto'
        }
      }}
    >
      <Paper
        sx={{
          mt: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: theme.spacing(2, 3, 3),
        }}
      >
        <Avatar
          sx={{
            m: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <Select 
          value={language}
          onChange={changeLanguage}
          sx={{ mt: theme.spacing(2) }}
        >
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
        </Select>
        <Box 
          component='form'
          sx={{
            width: '100%',
            mt: theme.spacing(1)
          }}
        >
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus/>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autoFocus/>
          </FormControl>
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label={remember}
          />
          <Button
            variant='contained'
            type='submit'
            fullWidth
            color='primary'
            sx={{
              mt: theme.spacing(3)
            }}
          >
            {signIn}
          </Button>
        </Box>
      </Paper>
    </Box>  
  )
}

export default Form;