import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system'
import Clock from './components/Clock'
import SearchBar from './components/SearchBar'

declare global {
    interface Window {
        result: any
    }
}

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <Clock className="flex justify-center" />
            <SearchBar className="max-w-2xl m-auto" />
        </ThemeProvider>
    )
}

export default App
