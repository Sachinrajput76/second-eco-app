import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import iconButton from '@material-ui/core/IconButton'
import { IconFlagUK, IconFlagFR, IconFlagES } from 'material-ui-flags'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import ToolBar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import { Styles } from './styles/NavbarStyles'
import { ThemeContext } from './context/ThemeContext'
import { withLanguageContext } from './context/LanguageContext'

const navbarWord = {
  English: {
    search: 'search',
  },
  French: {
    search: 'chercher',
  },
  Spanish: {
    search: 'búsqueda',
  },
}

class Navbar extends Component {
  static contextType = ThemeContext

  render() {
    const { languages } = this.props.languageContext
    const { isDarkMode, changeTheme } = this.context
    const { search } = navbarWord[languages]
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? 'primary' : 'default'}>
          <ToolBar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>
                {languages === 'English' ? (
                  <IconFlagUK />
                ) : languages === 'French' ? (
                  <IconFlagFR />
                ) : languages === 'Spanish' ? (
                  <IconFlagES />
                ) : (
                  'select language'
                )}
              </span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              SHOP.IO
            </Typography>
            <Switch onClick={changeTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}
export default withLanguageContext(withStyles(Styles)(Navbar))
