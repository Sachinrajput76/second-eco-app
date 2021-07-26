import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

export class ThemeProvider extends Component {
  constructor() {
    super()
    this.state = {
      isDarkMode: true,
    }
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme() {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
    })
  }
  render() {
    return (
      <>
        <ThemeContext.Provider
          value={{ ...this.state, changeTheme: this.changeTheme }}
        >
          {this.props.children}
        </ThemeContext.Provider>
      </>
    )
  }
}
