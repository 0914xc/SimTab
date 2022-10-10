import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

type SearchBarProps = {
    className?: string
}

const SearchBar: React.FC<SearchBarProps> = props => {
    const [keywords, setKeywords] = useState<string>()
    const [options, setOptions] = useState<string[]>([])

    window.result = (data: any) => {
        setOptions(data.s)
    }

    const getBaiduSuggest = async (keywords: string) => {
        const script = document.createElement('script')
        script.src = `http://suggestion.baidu.com/su?wd=${keywords}&cb=window.result`
        document.body.appendChild(script)
    }

    const handleInputChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
        setKeywords(value)
        getBaiduSuggest(value)
    }

    const handleChange = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
        if (value) {
            window.open(`https://www.google.com/search?q=${value}`)
        }
    }

    useEffect(() => {}, [])

    return (
        <Autocomplete
            className={props.className}
            size="medium"
            freeSolo
            options={options}
            onChange={handleChange}
            onInputChange={handleInputChange}
            renderInput={params => <TextField {...params} autoFocus label="Google" variant="standard" />}
        />
    )
}

export default SearchBar
