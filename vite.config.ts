import React from '@vitejs/plugin-react'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        Unocss({
            presets: [presetUno(), presetAttributify(), presetIcons()],
        }),
        React(),
    ],
})
