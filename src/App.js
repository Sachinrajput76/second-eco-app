import Navbar from './Navbar'
import Form from './Form'
import PageContent from './PageContent'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <>
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <Navbar />
            <Form />
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>
    </>
  )
}

export default App
