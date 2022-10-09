import { createTheme } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import { ThemeProvider } from '@mui/system'
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
            <Grid container spacing={2}>
                <Grid xs={4} xsOffset={4}>
                    <SearchBar />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App
