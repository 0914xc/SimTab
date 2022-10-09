import { Autocomplete, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

const SearchBar = () => {
    const [options, setOptions] = useState<string[]>([])

    window.result = (data: any) => {
        setOptions(data.s)
    }

    // 获取百度搜索建议
    const getBaiduSuggest = async (keywords: string) => {
        const script = document.createElement('script')
        script.src = `http://suggestion.baidu.com/su?wd=${keywords}&cb=window.result`
        document.body.appendChild(script)
    }

    useEffect(() => {}, [])

    return (
        <Autocomplete
            size="medium"
            freeSolo
            onInputChange={(event, value) => {
                if (value) {
                    getBaiduSuggest(value)
                }
            }}
            options={options}
            renderInput={params => <TextField {...params} label="Google" variant="standard" />}
        />
    )
}

export default SearchBar
