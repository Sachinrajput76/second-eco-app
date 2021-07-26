import React, { Component, createContext } from 'react'
export const LanguageContext = createContext()

class LanguageProvider extends Component {
  constructor() {
    super()
    this.state = {
      languages: 'English',
    }
    this.changeLanguage = this.changeLanguage.bind(this)
  }
  changeLanguage(e) {
    this.setState({
      languages: e.target.value,
    })
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
export { LanguageProvider }

export const withLanguageContext = (Component) => (props) =>
  (
    <LanguageContext.Consumer>
      {(value) => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
  )
