import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseLine from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLable from '@material-ui/core/InputLabel'
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/select'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './styles/FormStyles'
import { LanguageContext } from './context/LanguageContext'

const words = {
  English: {
    SignIn: 'Sign in',
    Email: 'Email',
    Password: 'Password',
    RememberMe: 'Remember me',
  },
  French: {
    SignIn: "S'identifier",
    Email: 'courrier électronique',
    Password: 'Mot de passe',
    RememberMe: 'Souviens-toi de moi',
  },
  Spanish: {
    SignIn: 'Registrarse',
    Email: 'correo eléctronico',
    Password: 'la contraseña',
    RememberMe: 'Recuérdame',
  },
}

class Form extends Component {
  static contextType = LanguageContext
  render() {
    const { languages, changeLanguage } = this.context
    const { SignIn, Email, Password, RememberMe } = words[languages]
    const { classes } = this.props

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutLinedIcon />
          </Avatar>
          <Typography variant='h5'>{SignIn}</Typography>
          <Select value={languages} onChange={changeLanguage}>
            <MenuItem value='English'>English</MenuItem>
            <MenuItem value='French'>French</MenuItem>
            <MenuItem value='Spanish'>Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl
              margin='normal'
              required
              fullwidth
              className={classes.formControl}
            >
              <InputLable htmlFor='email'>{Email}</InputLable>
              <Input id='email' name='Email' autoFocus />
            </FormControl>
            <FormControl
              margin='normal'
              required
              fullwidth
              className={classes.formControl}
            >
              <InputLable htmlFor='password'>{Password}</InputLable>
              <Input id='password' name='password' />
            </FormControl>

            <FormControlLabel
              control={<CheckBox color='primary' />}
              label={RememberMe}
            />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
            >
              {SignIn}
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}
export default withStyles(styles)(Form)
